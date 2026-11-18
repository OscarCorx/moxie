COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/user/input",
    action: "/detail/navigation",
    routine: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/component",
    routine: (model, header, resultId) => { },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/create_state",
    routine: (model, header, resultId) => {
      Render.background(model);
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/change_entry",
    routine: (model, header, resultId) => {
      Render.background(model);
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/previous",
    action: "/detail",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/next",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/forward",
    action: "/detail",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/back",
    action: "/detail",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/flip",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/draw",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/draw",
    action: "/detail/navigation",
    routine: (model, header, resultId) => {
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/drag",
    action: "/position/panel",
    routine: (model, header, resultId) => {
      const c = Query.getAbsolute(model, header.element_id);
      Detail.element(model, c);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/update",
    action: "/detail",
    routine: (model, header, resultId) => {
      Render.background(model);
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/new",
    action: "/outline/detail",
    routine: (model, header, resultId) => {
      Render.background(model);
      const contents = Query.fullRender(model);
      for (const c of contents) {
        Render.outline(model, c);
        Render.detail(model, c);
      }
    },
  },
);
