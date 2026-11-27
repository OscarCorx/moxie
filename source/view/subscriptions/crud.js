/* KEYBOARD INPUT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    system: "/crud",
    procedure: "/user_interface",
    event: "/event/user_input/keyboard_input",
    message: "/message/crud/input",
    routine: (m, h, r) => {
      Crud.input(m, h);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/crud/update",
      });
    },
  },
  {
    source: "/procedure/subscription",
    system: "/render",
    procedure: "/user_interface",
    event: "/event/crud/update",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* CREATE ENTITY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    system: "/crud",
    procedure: "/user_interface",
    event: "/event/entity/new",
    message: "/message/crud/create_entity",
    routine: (m, h, r) => {
      Crud.create_entity(m, h);
      model.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/crud/create_entity",
      });
    },
  },
  {
    source: "/procedure/subscription",
    system: "/render",
    procedure: "/user_interface",
    event: "/event/crud/create_entity",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* CREATE COMPONENT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    system: "/crud",
    procedure: "/user_interface",
    event: "/event/component/new",
    message: "/message/crud/create_component",
    routine: (m, h, r) => {
      Crud.create_component(m, h, r);
      model.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/crud/create_component",
      });
    },
  },
  {
    source: "/procedure/subscription",
    system: "/render",
    procedure: "/user_interface",
    event: "/event/crud/create_component",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
