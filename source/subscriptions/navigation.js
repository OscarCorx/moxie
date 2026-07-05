COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/next",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/previous",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/forward",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/back",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/flip",
      routine: (model, message, resultId) => {
        const head = model.accessComponent("/head", "/navigation/state", 0);
        head.property = model.nextId(
          head.archetype,
          "/archetype/property",
          head.property,
        );
        const property = model.getComponent(head.property);
        head.component = model.nextId(head.entity, property.property);
      },
      transition: (model, message, resultId) => {
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
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/draw",
      result: "/message/draw",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/replace",
      result: "/message/replace",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/event/load",
      routine: (model, header, resultId) => {
        const head = model.accessComponent("/head", "/navigation/state", 0);
        head.property = model.nextId(
          head.archetype,
          "/archetype/property",
          head.property,
        );
        const property = model.getComponent(head.property);
        head.component = model.nextId(head.entity, property.property);
      },
      transition: (model, header, resultId) => {},
    },
  ],
);
