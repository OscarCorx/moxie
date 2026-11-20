class Crud {
  static input(model, header) {
    const state = model.accessComponent("/current", "/view/navigation");
    const component = model.getComponent(state.component);
    const field = model.getComponent(state.field);
    if (header.value === "Backspace") {
      component[field.key] = component[field.key].slice(0, -1);
    } else {
      component[field.key] += header.value;
    }
  }

  static update(model, header) {
    const state = model.accessComponent("/current", "/view/navigation");
    const component = model.getComponent(state.component);
    const schema_field = model.getComponent(state.schema_field);
    component[header.field] = header.value;
  }

  static new(model, header) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const archetype_property = model.getComponent(state.property);
    const component = model.getComponent(state.component);
    const schema = model.accessComponentIds(archetype_property.property, "/schema/field");
    const c = {
      source: archetype_property.property,
    };
    for (const id of schema) {
      const f = model.getComponent(id);
      if (archetype_property.field === f.key) {
        c[f.key] = archetype_entity.entity;
      } else {
        c[f.key] = "";
      }
    }
    model.setComponent(c);
  }

  static create_entity(model, header, resultId) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const c = {
      source: archetype_entity.source,
      archetype: archetype_entity.archetype,
      entity: model.ID(),
    };
    model.setComponent(c);
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/event/create_entity",
      entity: c.entity,
    });
  }
}
