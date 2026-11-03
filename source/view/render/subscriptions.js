COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user/input",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {});
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/component",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/load",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/next",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/forward",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/flip",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/draw",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/drag",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/update",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
    transition: (model, header, resultId) => { },
  },
);
