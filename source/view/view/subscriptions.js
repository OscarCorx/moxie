COMPONENTS.push(
  {
    source: "/procedure/state",
    procedure: "/view",
    state: "/view",
  },
  {
    source: "/procedure/subscription",
    procedure: "/view",
    event: "/event/load",
    action: "/set/current",
    routine: (model, message, resultId) => {
      model.setReference("/current", "/view/hud", "/current/hud");
      model.setReference("/current", "/view/navigation", "/current/navigation");
      model.setReference("/current", "/view/style", "/current/style");
      model.setReference("/current", "/view/user_input", "/current/user_input");
    },
    transition: (model, message, resultId) => { },
  },
);
