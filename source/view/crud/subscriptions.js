COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/message/update",
    action: "/crud/update",
    routine: (model, header, resultId) => {
      Crud.update(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/update",
      });
    },
  }
);
