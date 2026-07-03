COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/message/key_down",
      action: (model, message, resultId) => {
        const state = model.getComponent("/user_input", "/procedure/state", 0);
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
            if (state.control) event = "/message/next";
            if (state.shift) event = "/message/previous";
            break;
          case "j":
          case "J":
            if (state.control) event = "/message/forward";
            if (state.shift) event = "/message/back";
            break;
          case "v":
          case "V":
            if (state.control) event = "/message/flip";
            if (state.shift) event = "/message/reverse";
            break;
          case "n":
          case "N":
            if (state.control) event = "/message/draw";
            if (state.shift) event = "/message/replace";
            break;
          case "e":
          case "E":
            if (state.control) event = "/message/enter";
            if (state.shift) event = "/message/exit";
            break;
          case "i":
          case "I":
            if (state.control) event = "/message/select";
            if (state.shift) event = "/message/select";
            break;
          default:
        }
        if (event) {
          model.setComponent({
            id: `/keydown/${model.getId()}`,
            source: "/message/header",
            event: event,
            result: resultId,
          });
        }
      },
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/message/key_up",
      action: (model, message, resultId) => {
        const state = model.getComponent("/user_input", "/procedure/state", 0);
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
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/load",
      action: (model, message, resultId) => {
        window.addEventListener("keydown", (event) => {
          PROCESS.model.emit({
            id: "keydown",
            event: "/message/key_down",
            value: event.key,
          });
        });
        window.addEventListener("keyup", (event) => {
          PROCESS.model.emit({
            id: `/keyup/${model.getId()}`,
            event: "/message/key_up",
            value: event.key,
          });
        });
      },
      reaction: (model, message, resultId) => {},
    },
  ],
);
