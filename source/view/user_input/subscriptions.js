function userInputTransition(model, message, resultId) {
  const state = model.accessComponent("/user_input", "/procedure/state");
  state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
}

/* KEYBOARD */
COMPONENTS.push(
  {
    source: "/procedure/state",
    procedure: "/user_input",
    state: "/view/user_input",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/move",
    action: "/keyboard/move",
    routine: (model, message, resultId) => {
      return KeyboardActions.move(model, message.value, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/entry",
    action: "/keyboard/entry",
    routine: (model, message, resultId) => {
      KeyboardActions.entry(model, message.value, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/entry/bind",
    action: "/keyboard/bind",
    routine: (model, message, resultId) => {
      KeyboardActions.bind(model, message.value, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_up",
    action: "/keyboard/keyup",
    routine: (model, message, resultId) => {
      KeyboardActions.keyUp(model, message.value, resultId);
    },
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
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/move",
    action: "/mouse/move",
    routine: (model, message, resultId) => {
      MouseActions.move(model, message.x, message.y);
    },
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
          entity: message.entity,
        });
      });
      window.addEventListener("keyup", (event) => {
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/key_up",
          value: event.key,
          entity: message.entity,
        });
      });
      window.addEventListener("mousemove", (event) => {
        const state = model.accessComponent(message.entity, "/view/user_input");
        if (!state.mouse_target) return;
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/mouse/move",
          x: event.clientX,
          y: event.clientY,
          entity: message.entity,
        });
      });
      window.addEventListener("mouseup", (event) => {
        const state = model.accessComponent(message.entity, "/view/user_input");
        if (!state.mouse_target) return;
        PROCESS.model.emit({
          id: model.ID(),
          event: "/event/mouse/up",
          x: event.clientX,
          y: event.clientY,
          entity: message.entity,
        });
      });
    },
  }
);
