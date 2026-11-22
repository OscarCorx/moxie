COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/keyboard/down",
    state: "/move",
    message: "/message/keyboard/move",
    routine: (model, header, resultId) => {
      return KeyboardActions.move(model, header, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/keyboard/down",
    state: "/edit",
    message: "/message/keyboard/edit",
    routine: (model, header, resultId) => {
      KeyboardActions.edit(model, header, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/keyboard/down",
    state: "/bind",
    message: "/message/keyboard/bind",
    routine: (model, header, resultId) => {
      KeyboardActions.bind(model, header, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/keyboard/up",
    message: "/message/keyboard/key_up",
    routine: (model, header, resultId) => {
      KeyboardActions.keyUp(model, header, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user_input/bind",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user_input/unbind",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user_input/mode",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/absolute/toggle",
    message: "/message/render/toggle_state",
    routine: (model, header, resultId) => {
      Render.toggleState(model, header);
      Render.full(model, header);
    },
  },
);
