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
