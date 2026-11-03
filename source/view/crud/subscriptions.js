COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/message/update",
    routine: (model, header, resultId) => {
      const component = model.getComponent(header.component);
      component[header.field] = header.value;
    },
    transition: (model, message, resultId) => {
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/update",
      });
    },
  }
);
