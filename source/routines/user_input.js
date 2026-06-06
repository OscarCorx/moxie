[
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/user_input/key_down",
    code: (message, model, resultId) => {
      const state = model._model["/user_input"]["/procedure/state"];
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
          if (state.control) event = "/navigation/next";
          if (state.shift) event = "/navigation/previous";
          break;
        case "j":
        case "J":
          if (state.control) event = "/navigation/forward";
          if (state.shift) event = "/navigation/back";
          break;
        case "v":
        case "V":
          if (state.control) event = "/navigation/flip";
          if (state.shift) event = "/navigation/reverse";
          break;
        case "n":
        case "N":
          if (state.control) event = "/navigation/draw";
          if (state.shift) event = "/navigation/replace";
          break;
        case "e":
        case "E":
          if (state.control) event = "/navigation/enter";
          if (state.shift) event = "/navigation/exit";
          break;
        case "i":
        case "I":
          if (state.control) event = "/navigation/select";
          if (state.shift) event = "/navigation/select";
          break;
        default:
      }
      if (event) {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: event,
        });
      }
    },
  },
  {
    source: "/method/definition",
    name: "Write Event",
    name: "",
    method: "/user_input/key_up",
    description: "",
    code: (message, model, resultId) => {
      const state = model._model["/user_input"]["/procedure/state"];
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
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/user_input/transition",
    code: (message, model, resultId) => {},
  },
].forEach((c) => PROCESS.model.setComponent(c));
