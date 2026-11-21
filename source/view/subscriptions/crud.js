/* KEYBOARD INPUT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/event/user_input/keyboard_input",
    message: "/message/crud/input",
    routine: (model, header, resultId) => {
      Crud.input(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/crud/update",
        thread: header.thread,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/crud/update",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* CREATE ENTITY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/event/entity/new",
    message: "/message/crud/create_entity",
    routine: (model, header, resultId) => {
      Crud.create_entity(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/crud/create_entity",
        thread: header.thread,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/crud/create_entity",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* CREATE COMPONENT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/event/component/new",
    message: "/message/crud/create_component",
    routine: (model, header, resultId) => {
      Crud.create_component(model, header, resultId);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/crud/create_component",
        thread: header.thread,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/crud/create_component",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
