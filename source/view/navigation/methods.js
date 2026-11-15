class Navigation {
  static exit(model) {
    const state = model.accessComponent("/current", "/view/navigation");
    if (!state.exit) return false;
    model.setReference("/current", state.source, state.exit, true);
  }

  static incrementCard(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.accessComponent(state.entity, "/archetype/entity");
    let entity_id;
    for (entity_id of model.accessComponentIds(archetype_entity.archetype, "/archetype/entity")) {
      const component = model.getComponent(entity_id);
      if (component.entity === state.entity) break;
    }
    if (reverse) {
      console.log("reverse", state.entity);
      const id = model.previousId(archetype_entity.archetype, "/archetype/entity", entity_id);
      state.entity = model.getComponent(id).entity;
      console.log("reverse", state.entity);
    } else {
      console.log("forward", state.entity);
      const id = model.nextId(archetype_entity.archetype, "/archetype/entity", entity_id);
      state.entity = model.getComponent(id).entity;
      console.log("forward", state.entity);
    }
    console.log(state.entity);
    const id = model.nextId(archetype_entity.archetype, "/archetype/property", 0);
    state.property = model.getComponent(id).property;
    state.component = model.nextId(archetype_entity.entity, state.property, 0);
    state.schema_field = model.nextId(state.property, "/schema/field", 0);
  }

  static incrementFace(model, reverse) {
    console.log("INCREMENT")
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.accessComponent(state.entity, "/archetype/entity");
    let property_id;
    for (property_id of model.accessComponentIds(archetype_entity.archetype, "/archetype/property")) {
      const component = model.getComponent(property_id);
      if (component.property === state.property) break;
    }
    if (reverse) {
      const id = model.previousId(archetype_entity.archetype, "/archetype/property", property_id);
      state.property = model.getComponent(id).property;
    } else {
      const id = model.nextId(archetype_entity.archetype, "/archetype/property", property_id);
      state.property = model.getComponent(id).property;
    }
    state.component = model.nextId(archetype_entity.entity, state.property, 0);
    console.log(model.getComponent(state.component));
    state.schema_field = model.nextId(state.property, "/schema/field", 0);
  }

  static incrementSecondary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");

    if (reverse) {
      state.component = model.previousId(state.entity, state.property, state.component);
    } else {
      state.component = model.nextId(state.entity, state.property, state.component);
    }
  }

  static changeComponent(model, component) {
    const state = model.accessComponent("/current", "/view/navigation");
    state.component = component;
  }

  static incrementPrimary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    if (reverse) {
      state.schema_field = model.previousId(state.property, "/schema/field", state.schema_field);
    } else {
      state.schema_field = model.nextId(state.property, "/schema/field", state.schema_field);
    }
  }

  static dragMove(model, x, y, resultId) {
    const user_input = model.accessComponent("/current", "/view/user_input");
    const target = model.getComponent(user_input.mouse_target);
    target.x = x - target.offset_x;
    target.y = y - target.offset_y;
  }
}
