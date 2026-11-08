/* KEYBOARD */
COMPONENTS.push(
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
    event: "/event/mouse/down",
    action: "/mouse/down",
    routine: (model, message, resultId) => {
      MouseActions.down(model, message.x, message.y, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/up",
    action: "/mouse/up",
    routine: (model, message, resultId) => {
      MouseActions.up(model, message.panel, message.x, message.y, resultId);
    },
  },
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
        model.emit({
          id: model.ID(),
          event: "/event/key_down",
          value: event.key,
          thread: message.thread,
        });
      });
      window.addEventListener("keyup", (event) => {
        model.emit({
          id: model.ID(),
          event: "/event/key_up",
          value: event.key,
          thread: message.thread,
        });
      });
      window.addEventListener("mousemove", (event) => {
        event.preventDefault();
        const state = model.accessComponent(message.thread, "/view/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/move",
          x: event.clientX,
          y: event.clientY,
          thread: message.thread,
        });
      });
      window.addEventListener("mouseup", (event) => {
        const state = model.accessComponent(message.thread, "/view/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/up",
          x: event.clientX,
          y: event.clientY,
          thread: message.thread,
        });
      });
    },
  }
);
