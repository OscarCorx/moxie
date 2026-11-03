class View {
  static getCurrent(model) {
    const hud = model.accessComponent("/current", "/view/hud");
    const user_input = model.accessComponent("/current", "/view/user_input");
    const state = model.accessComponent("/current", "/view/state");
    return [current, hud, user_input, state];
  }

  static getState(model) {
    const current = model.accessComponent("/current", "/current/view/state");
    const state = model.accessComponent(current.view_state, "/view/state/version");
    return [current, state];
  }

  static getUserInput(model) {
    const current = model.accessComponent("/current", "/current/view/state");
    const state = model.accessComponent(current.user_input, "/view/user_input");
    return [current, state];
  }
}
