class DeckNavigation {
  static build(m, entity) {
    const archetype_entity = m.accessComponent(entity, "/archetype/entity");
    const archetype_property = m.accessComponent(archetype_entity.archetype, "/archetype/property");
    const component = m.accessComponent(entity, archetype_property.property);
    const field = m.accessComponent(archetype_property.property, "/schema/field");
    const c = {
      source: "/navigation/state",
      entity: archetype_entity.id,
      property: archetype_property.id,
      component: component.id,
      field: field.id,
    };
    m.setComponent(c);
    m.setReference(m.endpoint, "/navigation", c.id, true);
  }

  static exit(m) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    if (!state.exit) return false;
    m.setReference(m.endpoint, state.source, state.exit, true);
  }

  static changeCard(m, entity) {
    const archetype_entity = m.accessComponent(entity, "/archetype/entity");
    const state = m.accessComponent(m.endpoint, "/navigation");
    state.entity = archetype_entity.id;
    state.property = m.nextId(archetype_entity.archetype, "/archetype/property");
    const archetype_property = m.getComponent(state.property);
    state.component = m.nextId(archetype_entity.entity, archetype_property.property);
    state.field = m.nextId(archetype_property.property, "/schema/field");
  }

  static incrementCard(m, reverse) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    let archetype_entity = m.getComponent(state.entity);
    if (reverse) {
      state.entity = m.previousId(archetype_entity.archetype, "/archetype/entity", state.entity);
    } else {
      state.entity = m.nextId(archetype_entity.archetype, "/archetype/entity", state.entity);
    }
    archetype_entity = m.getComponent(state.entity);
    state.property = m.nextId(archetype_entity.archetype, "/archetype/property");
    const archetype_property = m.getComponent(state.property);
    state.component = m.nextId(archetype_entity.entity, archetype_property.property);
    state.field = m.nextId(archetype_property.property, "/schema/field");
  }

  static incrementFace(m, reverse) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const archetype_entity = m.getComponent(state.entity);
    let archetype_property = m.getComponent(state.property);
    if (reverse) {
      state.property = m.previousId(archetype_property.archetype, "/archetype/property", state.property);
    } else {
      state.property = m.nextId(archetype_property.archetype, "/archetype/property", state.property);
    }
    archetype_property = m.getComponent(state.property);
    state.component = m.nextId(archetype_entity.entity, archetype_property.property);
    state.field = m.nextId(archetype_property.property, "/schema/field");
  }

  static incrementSecondary(m, reverse) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const archetype_entity = m.getComponent(state.entity);
    const archetype_property = m.getComponent(state.property);
    if (reverse) {
      state.component = m.previousId(archetype_entity.entity, archetype_property.property, state.component);
    } else {
      state.component = m.nextId(archetype_entity.entity, archetype_property.property, state.component);
    }
  }

  static incrementPrimary(m, reverse) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    const archetype_property = m.getComponent(state.property);
    if (reverse) {
      state.field = m.previousId(archetype_property.property, "/schema/field", state.field);
    } else {
      state.field = m.nextId(archetype_property.property, "/schema/field", state.field);
    }
  }

  static dragMove(m, x, y) {
    const user_input = m.accessComponent(m.endpoint, "/user_input");
    const target = m.getComponent(user_input.mouse_target);
    target.x = x - target.offset_x;
    target.y = y - target.offset_y;
  }

  static selectPrimary(m, h) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    if (h.component) state.component = h.component;
    if (h.field) state.field = h.field;
  }

  static selectFace(m, h) {
    const state = m.accessComponent(m.endpoint, "/navigation");
    state.property = h.value;
  }
}
