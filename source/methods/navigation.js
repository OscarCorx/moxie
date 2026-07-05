const NAVIGATION = {
  next: (message, model, resultId) => {
    // const head = model.getComponent("/head", "/navigation/stack");
    // const components = model._model[head.entity].components;
    // const components = model.getComponent(
    //   head.entity,
    //   components[head.card_index || 0],
    // );
    // model.setComponent({
    //   source: "/message/header",
    //   result: resultId,
    //   event: "/navigate/next",
    // });
  },
  previous: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/previous",
    });
  },
  forward: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/forward",
    });
  },
  back: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/back",
    });
  },
  flip: (message, model, resultId) => {
    const head = model.getComponent("/head", "/navigation/stack");
    head.card_index = head.card_index || 0;
    const components = model._model[head.entity].components;
    if (components.length === head.card_index) {
      head.card_index = 0;
    } else {
      head.card_index += 1;
    }
  },
  reverse: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/reverse",
    });
  },
  draw: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/draw",
    });
  },
  replace: (message, model, resultId) => {
    model.setComponent({
      source: "/message/header",
      result: resultId,
      event: "/navigate/replace",
    });
  },
  transition: () => {},
};
