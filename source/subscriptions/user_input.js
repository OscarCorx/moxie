function userInputTransition(model, message, resultId) {
  const state = model.accessComponent("/user_input", "/procedure/state");
  state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
}
/* BINDINGS */
const B = {
  forward: "j",
  back: "u",
  next: "f",
  previous: "t",
  flip: "k",
  reverse: "i",
  draw: "d",
  replace: "r",
  enter: "h",
  exit: "y",
  select: "g",
  unselect: "t",
  mode: "n",
  big: "Shift",
  bind: "Control",
};

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
        let event;
        switch (value) {
          case B.bind:
            state.bind = true;
            event = "/event/bind";
            break;
          case B.big:
            state.big = true;
            return;
          case B.mode:
            state.mode = "/entry";
            event = "/event/mode";
            break;
          case B.next:
            event = "/message/next";
            break;
          case B.previous:
            event = "/message/previous";
            break;
          case B.forward:
            event = "/message/forward";
            break;
          case B.back:
            event = "/message/back";
            break;
          case B.flip:
            event = "/message/flip";
            break;
          case B.reverse:
            event = "/message/reverse";
            break;
          case B.draw:
            event = "/message/draw";
            break;
          case B.replace:
            event = "/message/replace";
            break;
          case B.select:
            event = "/message/select";
            break;
          case B.unselect:
            event = "/message/unselect";
            break;
          case B.enter:
            event = "/message/enter";
            break;
          case B.exit:
            event = "/message/exit";
            break;
          default:
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
        let event;
        switch (value) {
          case B.bind:
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
        let event;
        switch (value) {
          case B.mode:
            state.mode = "/move";
            model.setComponent({
              id: `/keydown/${model.ID()}`,
              source: "/message/header",
              event: "/event/mode",
              result: resultId,
            });
            break;
          case B.bind:
            state.bind = true;
            model.setComponent({
              id: `/keydown/${model.ID()}`,
              source: "/message/header",
              event: "/event/bind",
              result: resultId,
            });
            break;
          default:
        }
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
        switch (value) {
          case B.bind:
            state.bind = false;
            model.setComponent({
              id: `/keydown/${model.ID()}`,
              source: "/message/header",
              event: "/event/unbind",
              result: resultId,
            });
            break;
          case B.big:
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
