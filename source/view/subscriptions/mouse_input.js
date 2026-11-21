COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/entry/select",
    message: "/message/entry/select",
    routine: (model, header, resultId) => {
      MouseActions.entrySelect(model, header);
      model.setComponent({
        id: model.ID(),
        source: "/message/header",
        event: "/event/user_input/entry_select",
        result: resultId,
        thread: header.thread,
        component: header.component,
        field: header.field,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/down",
    message: "/message/mouse/down",
    routine: (model, header, resultId) => {
      MouseActions.down(model, header, header.element_id, header.x, header.y, resultId);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/move",
    message: "/message/navigation/drag_move",
    routine: (model, header, resultId) => {
      Navigation.dragMove(model, header, header.x, header.y, resultId);
      model.setComponent({
        id: model.ID(),
        source: "/message/header",
        event: "/event/navigation/drag_move",
        result: resultId,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/drag_move",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/mouse/up",
    message: "/message/mouse/up",
    routine: (model, header, resultId) => {
      MouseActions.up(model, header, header.x, header.y, resultId);
    },
  },
);
