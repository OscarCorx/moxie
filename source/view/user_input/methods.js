const NAVIGATION = {
  "j": "/event/user_input/forward",
  "u": "/event/user_input/back",
  "f": "/event/user_input/next",
  "t": "/event/user_input/previous",
  "k": "/event/user_input/flip",
  "i": "/event/user_input/reverse",
  "d": "/event/user_input/draw",
  "r": "/event/user_input/replace",
  "h": "/event/user_input/enter",
  "y": "/event/user_input/exit",
  "g": "/event/user_input/select",
  "n": "/event/user_input/mode",
  "Shift": "/event/user_input/big",
  "Control": "/event/user_input/bind",
  "Enter": "/event/user_input/return",
};
const BINDING = {
  "q": "/event/binding/new_component",
  "w": "/event/binding/new_entity",
}

class UserInput {
  static createState(model, header) {
    const c = {
      source: "/user_input/state",
      state: "/move",
      move: true,
      edit: false,
      bind: false,
      big: false,
      buffer: "",
    };
    model.setComponent(c);
    model.setReference(header.thread, "/user_input", c.id);
  }
}

class KeyboardActions {
  static move(model, header, resultId) {
    const user_input = model.accessComponent(header.thread, "/user_input");
    let event = NAVIGATION[header.value];
    switch (event) {
      case "/event/user_input/bind":
        user_input.state = "/bind";
        user_input.bind = true;
        break;
      case "/event/user_input/big":
        user_input.big = true;
        break;
      case "/event/user_input/mode":
        user_input.state = "/edit";
        user_input.move = false;
        user_input.edit = true;
        break;
    }
    model.setComponent({
      id: model.ID(),
      source: "/message/header",
      event: event,
      result: resultId,
    });
  }

  static edit(model, thread, value, resultId) {
    const user_input = model.accessComponent(thread, "/user_input");
    let event = NAVIGATION[value];
    if (event === "/event/user_input/bind") {
      user_input.state = "/bind";
      user_input.bind = true;
    } else if (value.length === 1 || value === "Backspace") {
      event = "/message/crud/input";
    }
    model.setComponent({
      id: model.ID(),
      source: "/message/header",
      event: event,
      result: resultId,
      value: value,
    });
  }

  static bind(model, thread, value, resultId) {
    const user_input = model.accessComponent(thread, "/user_input");
    let event = NAVIGATION[value];
    if (event === "/event/user_input/mode") {
      user_input.state = "/move";
      user_input.move = true;
      user_input.edit = false;
      model.setComponent({
        id: `/keydown/${model.ID()}`,
        source: "/message/header",
        event: event,
        result: resultId,
      });
      return;
    }
    event = BINDING[value];
    model.setComponent({
      id: `/keydown/${model.ID()}`,
      source: "/message/header",
      event: event,
      result: resultId,
    });
  }

  static keyUp(model, value, resultId) {
    const state = model.accessComponent("/current", "/user_input");
    let event = NAVIGATION[value];
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
  }
}

class MouseActions {
  static down(model, header, element_id, x, y, resultId) {
    const state = model.accessComponent(header.thread, "/user_input");
    state.mouse_target = element_id;
    const element = model.getComponent(element_id);
    element.offset_x = x - element.x;
    element.offset_y = y - element.y;
  }

  static move(model, header, x, y, resultId) {
    const state = model.accessComponent(header.thread, "/user_input");
  }

  static up(model, header, x, y, resultId) {
    const state = model.accessComponent(header.thread, "/user_input");
    state.mouse_target = null;
  }

  static entrySelect(model, header) {
    const state = model.accessComponent(header.thread, "/user_input");
    state.state = "/entry";
  }
}
