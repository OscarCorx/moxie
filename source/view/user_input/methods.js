/* BINDINGS */
const BINDINGS = {
  "j": "/message/forward",
  "u": "/message/back",
  "f": "/message/next",
  "t": "/message/previous",
  "k": "/message/flip",
  "i": "/message/reverse",
  "d": "/message/draw",
  "r": "/message/replace",
  "h": "/message/enter",
  "y": "/message/exit",
  "g": "/message/select",
  "n": "/event/mode",
  "Shift": "/event/big",
  "Control": "/event/bind",
}
class KeyboardActions {
  static move(model, message) {

  }

  static entry(model, message) {

  }

  static bind(model, message) {

  }

  static keyUp(model, message) {

  }

  static updateState(model) {
    const state = model.accessComponent("/user_input", "/procedure/state");
    state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
  }
}

class MouseActions { }
