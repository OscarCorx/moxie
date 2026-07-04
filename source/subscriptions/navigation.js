COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/next",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/previous",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/forward",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/back",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/flip",
      action: (model, message, resultId) => {
        const head = model.accessComponent("/head", "/navigation/state", 0);
        head.archetype_index = model.nextIndex(
          head.archetype,
          "/archetype/property",
          head.archetype_index,
        );
        head.property_index = 0;
      },
      reaction: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/flip",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/reverse",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/draw",
      result: "/message/draw",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/replace",
      result: "/message/replace",
      action: (model, message, resultId) => {},
      reaction: (model, message, resultId) => {},
    },
  ],
);
