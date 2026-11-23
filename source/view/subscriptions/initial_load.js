COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/user_input",
    event: "/event/initial/load",
    message: "/message/initial/build",
    routine: (m, h, r) => {
      DeckNavigation.build(m, "/person/0");
      Render.build(m);
      Style.build(m);
      UserInput.build(m);
      UserInput.addEventListeners(m);
      m.setComponent({
        source: "/message/header",
        event: "/event/initial/build",
        result: r,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/view",
    event: "/event/initial/build",
    message: "/message/initial/compile",
    routine: (m, h, r) => {
      UserInput.compile(m);
      Style.compile(m);
      m.setComponent({
        source: "/message/header",
        event: "/event/initial/compile",
        result: r,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/initial/compile",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.background(m, h);
      Render.full(m, h);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/render/full",
      });
    },
  },
);
