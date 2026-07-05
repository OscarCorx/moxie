COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/next",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/forward",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/flip",
      routine: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/draw",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/previous",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/back",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/reverse",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/replace",
      routine: (model, header, resultId) => {},
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/create",
      routine: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/update",
      routine: (model, header, resultId) => {
        Misenplace.detailView(model, header, resultId);
      },
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/retrieve",
      routine: (model, header, resultId) => {
        Misenplace.detailSelect(model, header, resultId);
      },
      transition: (model, header, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/misenplace/render",
      event: "/event/load",
      routine: (model, header, resultId) => {
        Misenplace.renderMisenplace(model, header, resultId);
      },
      transition: (model, header, resultId) => {},
    },
  ],
);
