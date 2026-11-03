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
  static move(model, value, resultId) {
    const state = model.accessComponent("/current", "/view/user_input");
    let event = BINDINGS[value];
    switch (event) {
      case "/event/bind":
        state.bind = true;
        break;
      case "/event/big":
        state.big = true;
        break;
      case "/event/mode":
        state.mode = "/entry";
        break;
    }
    model.setComponent({
      id: model.ID(),
      source: "/message/header",
      event: event,
      result: resultId,
    });
    model.setComponent({
      id: model.ID(),
      source: "/message/header",
      event: "/event/user/input",
      result: resultId,
    });
  }

  static entry(model, value, resultId) {
    const state = model.accessComponent("/current", "/view/user_input");
    let event = BINDINGS[value];
    switch (event) {
      case "/event/bind":
        state.bind = true;
        return;
      default:
    }
  }

  static bind(model, value, resultId) {
    const state = model.accessComponent("/current", "/view/user_input");
    let event = BINDINGS[value];
    switch (event) {
      case "/event/bind":
        state.bind = true;
        event = "/event/bind";
        break;
      case "/event/big":
        state.big = true;
        return;
      case "/event/mode":
        state.mode = "/move";
        event = "/event/mode";
        break;
    }
    model.setComponent({
      id: `/keydown/${model.ID()}`,
      source: "/message/header",
      event: event,
      result: resultId,
    });
  }

  static keyUp(model, value, resultId) {
    const state = model.accessComponent("/current", "/view/user_input");
    let event = BINDINGS[value];
    switch (event) {
      case "/event/bind":
        state.bind = false;
        model.setComponent({
          id: `/keydown/${model.ID()}`,
          source: "/message/header",
          event: "/event/unbind",
          result: resultId,
        });
        break;
      case "/event/big":
        state.big = false;
        break;
    }
    model.setComponent({
      id: model.ID(),
      source: "/message/header",
      event: "/event/user/input",
      result: resultId,
    });

  }
}

class MouseActions {
  static move(model, x, y, resultId) {
    console.log("MOUSE MOVE", x, y)
  }

  static up(model, x, y, resultId) {
    console.log("MOUSE UP", x, y)
  }
}
