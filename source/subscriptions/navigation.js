COMPONENTS.push(
  ...[
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/next",
      routine: (model, message, resultId) => {
        Navigation.incrementValue(model);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/next",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/previous",
      routine: (model, message, resultId) => {
        Navigation.incrementValue(model, false);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/previous",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/forward",
      routine: (model, message, resultId) => {
        Navigation.incrementContent(model);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/forward",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/back",
      routine: (model, message, resultId) => {
        Navigation.incrementContent(model, false);

      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/back",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/flip",
      routine: (model, message, resultId) => {
        Navigation.incrementProperty(model);
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
      routine: (model, message, resultId) => {
        Navigation.incrementProperty(model, false);
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
      event: "/message/draw",
      result: "/message/draw",
      routine: (model, message, resultId) => {
        Navigation.incrementEntity(model);
      },
      transition: (model, message, resultId) => { },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/replace",
      result: "/message/replace",
      routine: (model, message, resultId) => {
        Navigation.incrementEntity(model, false);
      },
      transition: (model, message, resultId) => { },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/exit",
      routine: (model, message, resultId) => {
        Navigation.incrementBlueprint(model, false);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/exit",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/message/drag/start",
      routine: (model, message, resultId) => {
        Navigation.dragStart(model, message[0]);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/drag",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/event/drag/move",
      routine: (model, message, resultId) => {
        Navigation.dragMove(model, message[0]);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/drag",
        });
      },
    },
    {
      source: "/procedure/subscription",
      procedure: "/navigation",
      event: "/event/drag/stop",
      routine: (model, message, resultId) => {
        Navigation.dragStop(model, message[0]);
      },
      transition: (model, message, resultId) => {
        model.setComponent({
          source: "/message/header",
          result: resultId,
          event: "/event/drag",
        });
      },
    },
  ],
);
