/* KEYBOARD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/keyboard/down",
    message: "/message/user_input/key_down",
    routine: (m, h, r) => {
      UserInput.keyDown(m, h, r);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/keyboard/up",
    message: "/message/user_input/key_up",
    routine: (m, h, r) => {
      UserInput.keyUp(m, h, r);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/user_input/bind",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h, r);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/user_input/unbind",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/user_input/mode",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* MOUSE */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/mouse/drag",
    message: "/message/user_input/mouse_drag",
    routine: (m, h, r) => {
      UserInput.mouseDrag(m, h, r);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/mouse/move",
    message: "/message/user_input/mouse_move",
    routine: (m, h, r) => {
      UserInput.mouseMove(m, h, r);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/mouse/up",
    message: "/message/user_input/mouse_up",
    routine: (m, h, r) => {
      UserInput.mouseUp(m, h, r);
    },
  },
);
