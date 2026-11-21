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
/* MOUSE ACTION */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/message/entry/select",
    action: "/entry/select",
    routine: (model, message, resultId) => {
      MouseActions.entrySelect(model);
      model.setComponent({
        id: model.ID(),
        source: "/message/header",
        event: "/event/entry/select",
        result: resultId,
        component: message.component,
        field: message.field,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/down",
    action: "/mouse/down",
    routine: (model, message, resultId) => {
      MouseActions.down(model, message.element_id, message.x, message.y, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/up",
    action: "/mouse/up",
    routine: (model, message, resultId) => {
      MouseActions.up(model, message.x, message.y, resultId);
    },
  },
);
/* PAGE LOAD */
COMPONENTS.push(

);
