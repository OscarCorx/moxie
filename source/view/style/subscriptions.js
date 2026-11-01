COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/load",
    routine: (model, header, resultId) => {
      Style.compile(model);
    },
    transition: (model, header, resultId) => { },
  },
);
