/* User Input */
[
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_down",
    action: "/user_input/key_down",
    reaction: "/user_input/transition",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/key_up",
    action: "/user_input/key_up",
    reaction: "/user_input/transition",
  },
].forEach((c) => PROCESS.model.setComponent(c));
/* Navigation */
[
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/next",
    action: "/navigation/next",
    reaction: "/navigation/next",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/previous",
    action: "/navigation/previous",
    reaction: "/navigation/previous",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/forward",
    action: "/navigation/forward",
    reaction: "/navigation/forward",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/back",
    action: "/navigation/back",
    reaction: "/navigation/back",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/flip",
    action: "/navigation/flip",
    reaction: "/navigation/flip",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/reverse",
    action: "/navigation/reverse",
    reaction: "/navigation/reverse",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/draw",
    action: "/navigation/draw",
    reaction: "/navigation/draw",
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/navigation/replace",
    action: "/navigation/replace",
    reaction: "/navigation/replace",
  },
].forEach((c) => PROCESS.model.setComponent(c));
/* Trivial Output */
[
  // {
  //   source: "/procedure/subscription",
  //   procedure: "/trivial_output",
  //   event: "/event/navigate",
  //   action: "/action/navigate",
  //   reaction: "/transition",
  // },
  // {
  //   source: "/procedure/subscription",
  //   procedure: "/trivial_output",
  //   event: "/event/update",
  //   action: "/action/update",
  //   reaction: "/transition",
  // },
].forEach((c) => PROCESS.model.setComponent(c));
