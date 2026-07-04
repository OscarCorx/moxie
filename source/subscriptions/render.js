COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/next",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/forward",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/flip",
      action: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/draw",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/previous",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/back",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/reverse",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/replace",
      action: (model, header, resultId) => {},
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/create",
      action: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/update",
      action: (model, header, resultId) => {
        Misenplace.detailView(model, header, resultId);
      },
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/retrieve",
      action: (model, header, resultId) => {
        Misenplace.detailSelect(model, header, resultId);
      },
      reaction: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/load",
      action: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      reaction: (model, header, resultId) => {},
    },
  ],
);
