class Crud {
  static input(model, header) {
    const user_input = model.accessComponent("/current", "/view/user_input");
    if (header.value === "d") {
      user_input.buffer = user_input.buffer.slice(0, -1);
    } else {
      user_input.buffer += header.value;
    }
  }

  static update(model, header) {
    const state = model.accessComponent("/current", "/view/navigation");
    const component = model.getComponent(state.component);
    const schema_field = model.getComponent(state.schema_field);
    component[header.field] = header.value;
  }

  static new(model, header) {
    const navigation = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.getComponent(navigation.archetype_entity);

    const component = model.getComponent(navigation.component);
    const schema = model.accessComponentIds(component.source, "/schema/field");
    const c = {
      source: component.source,
    };
    for (const id of schema) {
      const f = model.getComponent(id);
      if (component[f.key] === archetype_entity.entity) {
        c[f.key] = archetype_entity.entity;
      } else {
        c[f.key] = null;
      }
    }
    model.setComponent(c);
  }
}
