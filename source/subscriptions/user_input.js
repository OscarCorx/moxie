COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/message/key_down",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        let event;
        switch (value) {
          case "Control":
            state.control = true;
            return;
          case "Shift":
            state.shift = true;
            return;
          case "j":
          case "J":
            event = "/message/next";
            break;
          case "u":
          case "U":
            event = "/message/previous";
            break;
          case "f":
          case "F":
            event = "/message/forward";
            break;
          case "r":
          case "R":
            event = "/message/back";
            break;
          case "k":
          case "K":
            event = "/message/flip";
            break;
          case "i":
          case "I":
            event = "/message/reverse";
            break;
          case "d":
          case "D":
            event = "/message/draw";
            break;
          case "e":
          case "E":
            event = "/message/replace";
            break;
          case "h":
          case "H":
            event = "/message/select";
            break;
          case "y":
          case "Y":
            event = "/message/unselect";
            break;
          case "g":
          case "G":
            event = "/message/enter";
            break;
          case "t":
          case "T":
            event = "/message/exit";
            break;
          case "Enter":
            break;
          default:
        }
        model.setComponent({
          id: `/keydown/${model.ID()}`,
          source: "/message/header",
          event: event,
          result: resultId,
        });
        model.setComponent({
          id: `/keydown/${model.ID()}`,
          source: "/message/header",
          event: "/event/navigation",
          value: event,
          mode: state.mode,
          control: state.control,
          shift: state.shift,
          result: resultId,
        });
      },
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/message/key_up",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        switch (value) {
          case "Control":
            state.control = false;
            return;
          case "Shift":
            state.shift = false;
            return;
        }
      },
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/load",
      routine: (model, message, resultId) => {
        window.addEventListener("keydown", (event) => {
          PROCESS.model.emit({
            id: "keydown",
            event: "/message/key_down",
            value: event.key,
          });
        });
        window.addEventListener("keyup", (event) => {
          PROCESS.model.emit({
            id: `/keyup/${model.ID()}`,
            event: "/message/key_up",
            value: event.key,
          });
        });
      },
      transition: (model, message, resultId) => {},
    },
  ],
);
