class Style {
  static compile(model) {
    const state = model.accessComponent("/current", "/view/style");
    const style = model.getEntity(state.main_theme);

    const display = {};
    const prototype = model.accessComponent(state.main_display, "/archetype/entity");
    const properties = model.accessComponentIds(prototype.archetype, "/archetype/property");
    for (const id of properties) {
      const p = model.getComponent(id);
      Object.assign(display, model.accessComponent(state.main_display, p.property));
    }

    for (const id of model.accessComponentIds(state.main_theme, "/theme/definition")) {
      const definition = model.getComponent(id);
      const s = {};

      for (const [k, v] of Object.entries(definition)) {
        if (!display[v]) continue;
        s[k] = display[v];
      }
      style[definition.key] = s;
    }
  }
}
