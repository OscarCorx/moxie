COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user/input",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {});
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/component",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
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
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/next",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/next",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {
        action: "/event/next",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/forward",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/forward",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {
        action: "/event/forward",
      });    },
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
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/flip",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {
        action: "/event/flip",
      });    },
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
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/draw",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      Render.detailNavigation(model, {
        action: "/event/draw",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/drag",
    action: "/position/panel",
    routine: (model, header, resultId) => {
      Render.positionPanel(model, header.panel_id);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/update",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.detail(model);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/new",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      Render.outline(model);
      Render.detail(model);
    },
  },
);
