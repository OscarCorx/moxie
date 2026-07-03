COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/create",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/retrieve",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      kind: "/message/update",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      kind: "/message/destroy",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
  ],
);
