COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/load",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/next",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/forward",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/flip",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/draw",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/drag",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/misenplace/render",
    event: "/event/update",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
);
