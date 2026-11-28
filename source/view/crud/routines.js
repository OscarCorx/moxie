class Crud {
  static input(m, h) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const component = m.getComponent(state.component);
    const field = m.getComponent(state.field);
    if (h.value === "Backspace") {
      component[field.key] = component[field.key].slice(0, -1);
    } else {
      component[field.key] += h.value;
    }
  }

  static update(m, h) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const component = m.getComponent(state.component);
    const schema_field = m.getComponent(state.schema_field);
    component[h.field] = h.value;
  }

  static createComponent(m, h) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const archetype_entity = m.getComponent(state.entity);
    const archetype_property = m.getComponent(state.property);
    const component = m.getComponent(state.component);
    const schema = m.accessComponentIds(archetype_property.property, "/schema/field");
    const c = {
      source: archetype_property.property,
    };
    for (const id of schema) {
      const f = m.getComponent(id);
      if (archetype_property.field === f.key) {
        c[f.key] = archetype_entity.entity;
      } else {
        c[f.key] = "";
      }
    }
    m.setComponent(c);
  }

  static createEntity(m, h, resultId) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const archetype_entity = m.getComponent(state.entity);
    const c = {
      source: archetype_entity.source,
      archetype: archetype_entity.archetype,
      entity: m.ID(),
    };
    m.setComponent(c);
    m.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/event/create_entity",
      entity: c.entity,
    });
  }
}
