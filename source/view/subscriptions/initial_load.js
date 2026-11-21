COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/initial/load",
    message: "/message/user_input/event_listener",
    routine: (model, header, resultId) => {
      window.addEventListener("keydown", (event) => {
        model.emit({
          id: model.ID(),
          event: "/event/keyboard/down",
          value: event.key,
          thread: header.thread,
        });
      });
      window.addEventListener("keyup", (event) => {
        model.emit({
          id: model.ID(),
          event: "/event/keyboard/up",
          value: event.key,
          thread: header.thread,
        });
      });
      window.addEventListener("mousemove", (event) => {
        event.preventDefault();
        const state = model.accessComponent(header.thread, "/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/move",
          x: event.clientX,
          y: event.clientY,
          thread: header.thread,
        });
      });
      window.addEventListener("mouseup", (event) => {
        const state = model.accessComponent(header.thread, "/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/up",
          x: event.clientX,
          y: event.clientY,
          thread: header.thread,
        });
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/view",
    event: "/event/initial/load",
    message: "/message/all/create_state",
    routine: (model, header, resultId) => {
      UserInput.createState(model, header);
      Navigation.createState(model, header, "/person/0");
      Style.createState(model, header);
      Render.createState(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/style",
    event: "/event/initial/load",
    message: "/message/style/compile",
    routine: (model, header, resultId) => {
      Style.compile(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        thread: header.thread,
        entity: header.entity,
        event: "/event/style/compile",
        thread: header.thread,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/style/compile",
    message: "/message/navigation/create_state",
    routine: (model, header, resultId) => {
      Navigation.createState(model, header.thread, header.entity);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/create_state",
        thread: header.thread,
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/create_state",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.background(model, header);
      Render.full(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/render/full",
        thread: header.thread,
      });
    },
  },
);
