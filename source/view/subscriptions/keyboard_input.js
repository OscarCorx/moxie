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
    message: "/message/keyboard/keyup",
    routine: (model, header, resultId) => {
      KeyboardActions.keyUp(model, header, resultId);
    },
  },
);
