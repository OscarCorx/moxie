class Style {
  static build(m, h) {
    const c = {
      source: "/style/state",
      main_theme: "/theme/dark_mode",
      stable_theme: "/theme/dark_mode",
      main_space: "/layout/0",
      stable_space: "/layout/1",
      main_display: "/display/0",
      stable_display: "/display/1",
    };
    m.setComponent(c);
    m.setReference(m.endpoint, "/style", c.id);
  }

  static compile(m, h) {
    const state = m.accessComponent(m.endpoint, "/style");
    /* COLLECT DISPLAY VALUES */
    const display = {};
    const prototype = m.accessComponent(state.main_display, "/archetype/entity");
    const properties = m.accessComponentIds(prototype.archetype, "/archetype/property");
    for (const id of properties) {
      const p = m.getComponent(id);
      Object.assign(display, m.accessComponent(state.main_display, p.property));
    }
    for (const styleId of [state.main_theme, state.main_space]) {
      const style = m.getEntity(styleId);
      /* COMPILE  */
      const definitionIds = m.accessComponentIds(styleId, "/style/definition");
      for (const definitionId of definitionIds) {
        const definition = m.getComponent(definitionId);
        const s = {};

        for (const [k, v] of Object.entries(definition)) {
          if (!display[v]) continue;
          s[k] = display[v];
        }
        style[definition.key] = s;
      }
    }
  }

  static stablize(m) {
    const state = m.accessComponent(m.endpoint, "/style");
    state.stable_theme = state.main_theme;
    state.stable_space = state.main_space;
  }
}
