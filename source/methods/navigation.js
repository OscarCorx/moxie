const NAVIGATION = {
  next: (message, model, resultId) => {
    const head = model.getComponent("/head", "/navigation/stack");
    const components = model.getComponent(head.entity, head.component_source);
    if (!head.component) head.component = components[0];
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/next",
    });
  },
  previous: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/previous",
    });
  },
  forward: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/forward",
    });
  },
  back: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/back",
    });
  },
  flip: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/flip",
    });
  },
  reverse: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/reverse",
    });
  },
  draw: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/draw",
    });
  },
  replace: (message, model, resultId) => {
    model.set({
      source: "/message/header",
      result: resultId,
      event: "/navigate/replace",
    });
  },
  transition: () => {},
};
