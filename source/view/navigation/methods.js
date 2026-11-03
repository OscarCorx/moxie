class Navigation {
  static exit(model) {
    const state = model.accessComponent("/current", "/view/navigation");
    if (!state.exit) return false;
    model.setReference("/current", state.source, state.exit, true);
  }

  static incrementCard(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");

    const archetype_entity = model.getComponent(state.archetype_entity);
    state.archetype_property = model.nextId(archetype_entity.archetype, "/archetype/property", 0);
    const property = model.getComponent(state.archetype_property).property;
    state.component = model.nextId(archetype_entity.entity, property, 0);
    state.field = model.nextId(property, "/schema/field", 0);
    if (reverse) {
      state.archetype_entity = model.previousId(archetype_entity.archetype, "/archetype/entity", archetype_entity.id);
    } else {
      state.archetype_entity = model.nextId(archetype_entity.archetype, "/archetype/entity", archetype_entity.id);
    }
  }

  static incrementFace(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");

    const archetype_entity = model.getComponent(state.archetype_entity);
    const property = model.getComponent(state.archetype_property).property;
    state.component = model.nextId(archetype_entity.entity, property, 0);
    state.field = model.nextId(property, "/schema/field", 0);
    if (reverse) {
      state.archetype_property = model.previousId(archetype_entity.archetype, "/archetype/property", state.archetype_property);
    } else {
      state.archetype_property = model.nextId(archetype_entity.archetype, "/archetype/property", state.archetype_property);
    }
  }

  static incrementSecondary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.getComponent(state.archetype_entity);

    if (reverse) {
      const property = model.getComponent(state.archetype_property).property;
      state.component = model.previousId(archetype_entity.entity, property, state.component);
    } else {
      const property = model.getComponent(state.archetype_property).property;
      state.component = model.nextId(archetype_entity.entity, property, state.component);
    }
  }

  static changeComponent(model, component) {
    const state = model.accessComponent("/current", "/view/navigation");
    state.component = component;
  }

  static incrementPrimary(model, reverse) {
    const state = model.accessComponent("/current", "/view/navigation");
    if (reverse) {
      state.field = model.previousId(state.property, "/schema/field", state.field);
    } else {
      state.field = model.nextId(state.property, "/schema/field", state.field);
    }
  }
}
