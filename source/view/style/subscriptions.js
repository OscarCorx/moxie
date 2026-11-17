COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/style",
    event: "/event/load",
    action: "/style/compile",
    routine: (model, header, resultId) => {
      Style.compile(model);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        thread: header.thread,
        entity: header.entity,
        event: "/event/style/compiled",
      });
    },
  },
);
