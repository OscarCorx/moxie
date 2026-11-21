class Navigation {
  static createState(model, thread, entity) {
    const archetype_entity = model.accessComponent(entity, "/archetype/entity");
    const archetype_property = model.accessComponent(archetype_entity.archetype, "/archetype/property");
    const component = model.accessComponent(entity, archetype_property.property);
    const field = model.accessComponent(archetype_property.property, "/schema/field");
    const c = model.setComponent({
      source: "/view/navigation",
      entity: archetype_entity.id,
      property: archetype_property.id,
      component: component.id,
      field: field.id,
    });
    model.setReference(thread, "/view/navigation", c.id, true);
    const user_input = model.accessComponent(thread, "/view/user_input");
    user_input.buffer = "";
  }

  static exit(model) {
    const state = model.accessComponent(header.thread, "/view/navigation");
    if (!state.exit) return false;
    model.setReference(header.thread, state.source, state.exit, true);
  }

  static changeCard(model, entity) {
    const archetype_entity = model.accessComponent(entity, "/archetype/entity");
    const state = model.accessComponent("/current", "/view/navigation");
    state.entity = archetype_entity.id;
    state.property = model.nextId(archetype_entity.archetype, "/archetype/property");
    const archetype_property = model.getComponent(state.property);
    state.component = model.nextId(archetype_entity.entity, archetype_property.property);
    state.field = model.nextId(archetype_property.property, "/schema/field");
  }

  static incrementCard(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
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

  static incrementFace(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
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

  static incrementSecondary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const archetype_property = model.getComponent(state.property);
    if (reverse) {
      state.component = model.previousId(archetype_entity.entity, archetype_property.property, state.component);
    } else {
      state.component = model.nextId(archetype_entity.entity, archetype_property.property, state.component);
    }
  }

  static incrementPrimary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_property = model.getComponent(state.property);
    if (reverse) {
      state.field = model.previousId(archetype_property.property, "/schema/field", state.field);
    } else {
      state.field = model.nextId(archetype_property.property, "/schema/field", state.field);
    }
  }

  static dragMove(model, x, y, resultId) {
    const user_input = model.accessComponent("/current", "/view/user_input");
    const target = model.getComponent(user_input.mouse_target);
    target.x = x - target.offset_x;
    target.y = y - target.offset_y;
  }

  static changeEntry(model, component, field) {
    const state = model.accessComponent("/current", "/view/navigation");
    if (component) state.component = component;
    if (field) state.field = field;
  }
}
