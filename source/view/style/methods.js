class Style {
  static createState(model, header) {
    const state = {
      source: "/style/state",
      main_theme: "/theme/dark_mode",
      stable_theme: "/theme/light",
      main_space: "/layout/0",
      stable_space: "/layout/1",
      main_display: "/display/0",
      stable_display: "/display/1",
    };
    model.setComponent(state);
    model.setReference(header.thread, "/style", state.id);
  }

  static compile(model, header) {
    const state = model.accessComponent(header.thread, "/style");
    const style = model.getEntity(state.main_theme);

    const display = {};
    const prototype = model.accessComponent(state.main_display, "/archetype/entity");
    const properties = model.accessComponentIds(prototype.archetype, "/archetype/property");
    for (const id of properties) {
      const p = model.getComponent(id);
      Object.assign(display, model.accessComponent(state.main_display, p.property));
    }

    const definition_ids = model.accessComponentIds(state.main_theme, "/style/definition");
    for (const id of definition_ids) {
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
