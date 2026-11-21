COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/message/entry/select",
    message: "/message/entry/select",
    routine: (model, header, resultId) => {
      MouseActions.entrySelect(model);
      model.setComponent({
        id: model.ID(),
        source: "/message/header",
        event: "/event/entry/select",
        result: resultId,
        component: message.component,
        field: message.field,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/down",
    message: "/message/mouse/down",
    routine: (model, header, resultId) => {
      MouseActions.down(model, header.element_id, message.x, message.y, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/up",
    message: "/message/mouse/up",
    routine: (model, header, resultId) => {
      MouseActions.up(model, header.x, header.y, resultId);
    },
  },
);
