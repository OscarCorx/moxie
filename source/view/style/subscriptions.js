COMPONENTS.push(
  {
    source: "/procedure/state",
    procedure: "/style",
    state: "/view/style",
  },
  {
    source: "/procedure/subscription",
    procedure: "/style",
    event: "/event/load",
    action: "/style/compile",
    routine: (model, header, resultId) => {
      Style.compile(model);
    },
    transition: (model, header, resultId) => { },
  },
);
