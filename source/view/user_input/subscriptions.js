function userInputTransition(model, message, resultId) {
  const state = model.accessComponent("/user_input", "/procedure/state");
  state.state = (state.bind) ? `/user_input${state.mode}/bind` : `/user_input${state.mode}`;
}

/* KEYBOARD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/move",
    routine: (model, message, resultId) => {
      KeyboardActions.move(model, message[0].value);
      return true;
    },
    transition: (model, message, resultId) => {
      userInputTransition(model, message, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/entry",
    routine: (model, message, resultId) => {
      KeyboardActions.entry(model, message[0].value);
      return true;
    },
    transition: (model, message, resultId) => {
      userInputTransition(model, message, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    state: "/user_input/entry/bind",
    routine: (model, message, resultId) => {
      KeyboardActions.bind(model, message[0].value);
      return true;
    },
    transition: (model, message, resultId) => {
      userInputTransition(model, message, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_up",
    routine: (model, message, resultId) => {
      KeyboardActions.keyUp(model, message[0].value);
      return true;
    },
    transition: (model, message, resultId) => {
      userInputTransition(model, message, resultId);
    },
  },
);
/* PAGE LOAD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/load",
    routine: (model, message, resultId) => {
      /* SET MOUSE AND KEYBOARD EVENT HANDLERS */
      return false;
    },
  }
);
