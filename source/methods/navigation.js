class Navigation {
  static incrementBlueprint(model, reverse) {
    const navigation_current = model.accessComponent("/navigation", "/state/current");
    if (reverse) {
      navigation_current.blueprint = model.nextId("/navigation", "/navigation/blueprint", navigation_current.blueprint);
    } else {
      navigation_current.blueprint = model.previousId("/navigation", "/navigation/blueprint", navigation_current.blueprint);
    }
  }

  static incrementEntity(model, reverse) {
    const navigation_current = model.accessComponent("/navigation", "/state/current");
    const archetype_blueprint = model.accessComponent(navigation_current.blueprint, "/archetype/blueprint");
    if (reverse) {
      navigation_current.entity = archetype_blueprint.current_entity = model.previousId(archetype_blueprint.blueprint, "/blueprint/entity", navigation_current.entity);
    } else {
      navigation_current.entity = archetype_blueprint.current_entity = model.nextId(archetype_blueprint.blueprint, "/blueprint/entity", navigation_current.entity);
    }
  }

  static incrementProperty(model, reverse) {
    const navigation_current = model.accessComponent("/navigation", "/state/current");
    const archetype_blueprint = model.accessComponent(navigation_current.blueprint, "/archetype/blueprint");
    if (reverse) {
      navigation_current.property = archetype_blueprint.current_property = model.previousId(archetype_blueprint.blueprint, "/blueprint/property", navigation_current.property);
    } else {
      navigation_current.property = archetype_blueprint.current_property = model.nextId(archetype_blueprint.blueprint, "/blueprint/property", navigation_current.property);
    }
  }

  static incrementComponent(model, reverse) {
    const navigation_current = model.accessComponent("/navigation", "/state/current");
    const archetype_blueprint = model.accessComponent(navigation_current.blueprint, "/archetype/blueprint");
    if (reverse) {
      navigation_current.primary = archetype_blueprint.current_component = model.previousId(navigation_current.entity, navigation_current.property, navigation_current.component);
    } else {
      navigation_current.primary = archetype_blueprint.current_component = model.nextId(navigation_current.entity, navigation_current.property, navigation_current.component);
    }
  }

  static incrementField(model, reverse) {
    const navigation_current = model.accessComponent("/navigation", "/state/current");
    const archetype_blueprint = model.accessComponent(navigation_current.blueprint, "/archetype/blueprint");
    if (reverse) {
      navigation_current.field = archetype_blueprint.current_field = model.previousId(navigation_current.property, "/schema/field", navigation_current.field);
    } else {
      navigation_current.field = archetype_blueprint.current_field = model.nextId(navigation_current.property, "/schema/field", navigation_current.field);
    }
  }

  static dragStart(model, local) {
    const user_interaction = model.getComponent("/user_interaction");
    user_interaction.component = local.id;
  }

  static dragMove(model, local) {
    const user_interaction = model.getComponent("/user_interaction");
    if (!user_interaction.component) return;
    const component = model.accessComponent(user_interaction.component, "/panel/flavor");
    component.x = local.x;
    component.y = local.y;
  }

  static dragStop(model, local) {
    const user_interaction = model.getComponent("/user_interaction");
    user_interaction.component = null;
  }
}
