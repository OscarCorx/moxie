class Navigation {
  static createState(model, header, entity) {
    const archetype_entity = model.accessComponent(entity, "/archetype/entity");
    const archetype_property = model.accessComponent(archetype_entity.archetype, "/archetype/property");
    const component = model.accessComponent(entity, archetype_property.property);
    const field = model.accessComponent(archetype_property.property, "/schema/field");
    const c = {
      source: "/navigation/state",
      entity: archetype_entity.id,
      property: archetype_property.id,
      component: component.id,
      field: field.id,
    };
    model.setComponent(c);
    model.setReference(header.thread, "/navigation", c.id, true);
  }

  static exit(model, header) {
    const state = model.accessComponent(header.thread, "/navigation");
    if (!state.exit) return false;
    model.setReference(header.thread, state.source, state.exit, true);
  }

  static changeCard(model, header, entity) {
    const archetype_entity = model.accessComponent(entity, "/archetype/entity");
    const state = model.accessComponent(header.thread, "/navigation");
    state.entity = archetype_entity.id;
    state.property = model.nextId(archetype_entity.archetype, "/archetype/property");
    const archetype_property = model.getComponent(state.property);
    state.component = model.nextId(archetype_entity.entity, archetype_property.property);
    state.field = model.nextId(archetype_property.property, "/schema/field");
  }

  static incrementCard(model, header, reverse) {
    const state = model.accessComponent(header.thread, "/navigation");
    let archetype_entity = model.getComponent(state.entity);
    if (reverse) {
      state.entity = model.previousId(archetype_entity.archetype, "/archetype/entity", state.entity);
    } else {
      state.entity = model.nextId(archetype_entity.archetype, "/archetype/entity", state.entity);
    }
    archetype_entity = model.getComponent(state.entity);
    state.property = model.nextId(archetype_entity.archetype, "/archetype/property");
    const archetype_property = model.getComponent(state.property);
    state.component = model.nextId(archetype_entity.entity, archetype_property.property);
    state.field = model.nextId(archetype_property.property, "/schema/field");
  }

  static incrementFace(model, header, reverse) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_entity = model.getComponent(state.entity);
    let archetype_property = model.getComponent(state.property);
    if (reverse) {
      state.property = model.previousId(archetype_property.archetype, "/archetype/property", state.property);
    } else {
      state.property = model.nextId(archetype_property.archetype, "/archetype/property", state.property);
    }
    archetype_property = model.getComponent(state.property);
    state.component = model.nextId(archetype_entity.entity, archetype_property.property);
    state.field = model.nextId(archetype_property.property, "/schema/field");
  }

  static incrementSecondary(model, header, reverse) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const archetype_property = model.getComponent(state.property);
    if (reverse) {
      state.component = model.previousId(archetype_entity.entity, archetype_property.property, state.component);
    } else {
      state.component = model.nextId(archetype_entity.entity, archetype_property.property, state.component);
    }
  }

  static incrementPrimary(model, header, reverse) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_property = model.getComponent(state.property);
    if (reverse) {
      state.field = model.previousId(archetype_property.property, "/schema/field", state.field);
    } else {
      state.field = model.nextId(archetype_property.property, "/schema/field", state.field);
    }
  }

  static dragMove(model, header, x, y, resultId) {
    const user_input = model.accessComponent(header.thread, "/user_input");
    const target = model.getComponent(user_input.mouse_target);
    target.x = x - target.offset_x;
    target.y = y - target.offset_y;
  }

  static selectPrimary(model, header) {
    const state = model.accessComponent(header.thread, "/navigation");
    if (header.component) state.component = header.component;
    if (header.field) state.field = header.field;
  }

  static selectFace(model, header) {
    const state = model.accessComponent(header.thread, "/navigation");
    state.property = header.value;
  }
}
