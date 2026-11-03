function userInputTransition(model, message, resultId) {
  const state = model.accessComponent("/user_input", "/procedure/state");
  state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
}

/* KEYBOARD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    state: "/move",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/move",
    action: "/keyboard/move",
    routine: (model, message, resultId) => {
      return KeyboardActions.move(model, message.value, resultId);
    },
    transition: (model, message, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/entry",
    action: "/keyboard/entry",
    routine: (model, message, resultId) => {
      KeyboardActions.entry(model, message.value, resultId);
      return true;
    },
    transition: (model, message, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/entry/bind",
    action: "/keyboard/bind",
    routine: (model, message, resultId) => {
      KeyboardActions.bind(model, message.value, resultId);
      return true;
    },
    transition: (model, message, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_up",
    action: "/keyboard/keyup",
    routine: (model, message, resultId) => {
      KeyboardActions.keyUp(model, message.value, resultId);
    },
    transition: (model, message, resultId) => { },
  },
);
/* MOSE ACTION */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/up",
    action: "/mouse/up",
    routine: (model, message, resultId) => {
      MouseActions.up(model, message.x, message.y, resultId);
    },
    transition: (model, message, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/move",
    action: "/mouse/move",
    routine: (model, message, resultId) => {
      MouseActions.move(model, message.x, message.y);
    },
    transition: (model, message, resultId) => { },
  }
);
/* PAGE LOAD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/load",
    action: "/add/event/listener",
    routine: (model, message, resultId) => {
      window.addEventListener("keydown", (event) => {
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/key_down",
          value: event.key,
        });
      });
      window.addEventListener("keyup", (event) => {
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/key_up",
          value: event.key,
        });
      });
      window.addEventListener("mousemove", (event) => {
        const state = model.accessComponent("/current", "/view/user_input");
        if (!state.mouse_target) return;
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/mouse/move",
          x: event.clientX,
          y: event.clientY,
        });
      });
      window.addEventListener("mouseup", (event) => {
        const state = model.accessComponent("/current", "/view/user_input");
        if (!state.mouse_target) return;
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/mouse/up",
          x: event.clientX,
          y: event.clientY,
        });
      });
    },
    transition: (model, message, resultId) => { },

  }
);
