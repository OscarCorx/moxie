function userInputTransition(model, message, resultId) {
  const state = model.accessComponent("/user_input", "/procedure/state");
  state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
}
/* BINDINGS */
const navigation = {
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
const binding = {
  "1": "/"
}

COMPONENTS.push(
  ...[
    /* MOVE */
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/key_down",
      state: "/user_input/move",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        let event = navigation[value];
        switch (event) {
          case "/event/bind":
            state.bind = true;
            break;
          case "/event/big":
            state.bind = true;
            break;
          case "/event/mode":
            state.mode = "/entry";
            break;
        }
        model.setComponent({
          id: `/keydown/${model.ID()}`,
          source: "/message/header",
          event: event,
          result: resultId,
        });
      },
      transition: (model, message, resultId) => {
        userInputTransition(model, message, resultId);
      },
    },
    /* ENTRY */
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/key_down",
      state: "/user_input/entry",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        let event = navigation[value];
        switch (event) {
          case "/event/bind":
            state.bind = true;
            return;
          default:
        }
      },
      transition: (model, message, resultId) => {
        userInputTransition(model, message, resultId);
      },
    },
    /* ENTRY - BIND */
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/key_down",
      state: "/user_input/entry/bind",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        let event = navigation[value];
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
      },
      transition: (model, message, resultId) => {
        userInputTransition(model, message, resultId);
      },
    },
    /* KEY UP */
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/key_up",
      routine: (model, message, resultId) => {
        const state = model.accessComponent("/user_input", "/procedure/state");
        const value = message[0].value;
        let event = navigation[value];
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
            return;
          default:

        }
      },
      transition: (model, message, resultId) => {
        userInputTransition(model, message, resultId);
      },
    },
    /* PAGE LOAD */
    {
      source: "/procedure/subscription",
      procedure: "/user_input",
      event: "/event/load",
      routine: (model, message, resultId) => {
        window.addEventListener("keydown", (event) => {
          PROCESS.model.emit({
            id: "keydown",
            event: "/event/key_down",
            value: event.key,
          });
        });
        window.addEventListener("keyup", (event) => {
          PROCESS.model.emit({
            id: `/keyup/${model.ID()}`,
            event: "/event/key_up",
            value: event.key,
          });
        });
      },
      transition: (model, message, resultId) => { },
    },
  ],
);
