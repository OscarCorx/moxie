const USER_INPUT = {
  key_down: (message, model, resultId) => {
    const state = model.get("/user_input", "/procedure/state");
    const value = message[0].value;
    let event;
    switch (value) {
      case "Meta":
        state.meta = true;
        return;
      case "Control":
        state.control = true;
        return;
      case "Shift":
        state.shift = true;
        return;
      case "f":
      case "F":
        if (state.control) event = "/user_input/next";
        if (state.shift) event = "/user_input/previous";
        break;
      case "j":
      case "J":
        if (state.control) event = "/user_input/forward";
        if (state.shift) event = "/user_input/back";
        break;
      case "v":
      case "V":
        if (state.control) event = "/user_input/flip";
        if (state.shift) event = "/user_input/reverse";
        break;
      case "n":
      case "N":
        if (state.control) event = "/user_input/draw";
        if (state.shift) event = "/user_input/replace";
        break;
      case "e":
      case "E":
        if (state.control) event = "/user_input/enter";
        if (state.shift) event = "/user_input/exit";
        break;
      case "i":
      case "I":
        if (state.control) event = "/user_input/select";
        if (state.shift) event = "/user_input/select";
        break;
      default:
    }
    if (event) {
      model.set({
        source: "/message/header",
        result: resultId,
        event: event,
      });
    }
  },
  key_up: (message, model, resultId) => {
    const state = model.get("/user_input", "/procedure/state");
    const value = message[0].value;
    switch (value) {
      case "Meta":
        state.meta = false;
        return;
      case "Control":
        state.control = false;
        return;
      case "Shift":
        state.shift = false;
        return;
    }
  },
  transition: () => {},
};
