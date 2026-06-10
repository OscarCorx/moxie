[
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    action: USER_INPUT.key_down,
    reaction: USER_INPUT.transition,
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_up",
    action: USER_INPUT.key_up,
    reaction: USER_INPUT.transition,
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/moxie/load",
    action: USER_INPUT.load,
    reaction: USER_INPUT.transition,
  },
].forEach((c) => PROCESS.model.set(c));
