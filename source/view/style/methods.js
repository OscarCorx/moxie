class Style {
  static compile(model) {
    const current = model.accessComponent("/current", "/current/view/state");
    const current_version = model.accessComponent(current.view_state, "/view/state/version");
    const style = model.getEntity(current_version.main_theme);

    const display = {};
    const prototype = model.accessComponent(current_version.main_display, "/archetype/entity");
    const properties = model.accessComponentIds(prototype.archetype, "/archetype/property");
    for (const id of properties) {
      const p = model.getComponent(id);
      Object.assign(display, model.accessComponent(current_version.main_display, p.property));
    }

    for (const id of model.accessComponentIds(current_version.main_theme, "/theme/definition")) {
      const definition = model.getComponent(id);
      const s = {};

      for (const [k, v] of Object.entries(definition)) {
        if (!display[v]) continue;
        s[k] = display[v];
      }
      style[definition.key] = s;
    }
    console.log("HERE WE GO")
  }
}
