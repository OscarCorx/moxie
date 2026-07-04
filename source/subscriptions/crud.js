COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/create",
      action: (model, message, resultId) => {
        // console.log("create");
        const head = model.accessComponent("/head", "/navigation/state", 0);
        const source = model.accessComponent(
          head.archetype,
          "/archetype/property",
          head.archetype_index,
        ).property;
        model.setComponent({
          entity: head.entity,
          source: source,
        });
      },
      reaction: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/create",
        });
      },
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
