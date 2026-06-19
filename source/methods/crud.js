const CRUD = {
  create: (message, model, resultId) => {
    console.log(message);
    model.set({
      source: message[0].component_source,
      entity: message[0].entity,
    });
  },
  select: (message, model, resultId) => {
    console.log(message);
    const head = model.getComponent("/head", "/navigation/stack");
    head.component_id = message[0].component_id;
  },
  update: (message, model, resultId) => {
    console.log(message);
    const component = model._model[message[0].component_id];
    component[message[0].key] = message[0].value;
  },
  transition: () => {},
};
