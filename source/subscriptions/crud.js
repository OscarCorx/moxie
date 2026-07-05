COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/create",
      routine: (model, message, resultId) => {
        // console.log("create");
        const head = model.accessComponent("/head", "/navigation/state");
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
      transition: (model, message, resultId) => {
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
      routine: (model, message, resultId) => {
        const head = model.accessComponent("/head", "/navigation/state");
        head.property_index = message[0].index;
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/retrieve",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/update",
      routine: (model, message, resultId) => {
        const component = model.getComponent(message[0].component);
        component[message[0].field] = message[0].value;
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/update",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/crud",
      event: "/message/destroy",
      routine: (model, message, resultId) => {},
      transition: (model, message, resultId) => {},
    },
  ],
);
