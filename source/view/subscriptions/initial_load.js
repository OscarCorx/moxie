COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_input",
    event: "/event/initial/load",
    message: "/message/add/event_listener",
    routine: (model, message, resultId) => {
      window.addEventListener("keydown", (event) => {
        model.emit({
          id: model.ID(),
          event: "/event/key_down",
          value: event.key,
          thread: message.thread,
        });
      });
      window.addEventListener("keyup", (event) => {
        model.emit({
          id: model.ID(),
          event: "/event/key_up",
          value: event.key,
          thread: message.thread,
        });
      });
      window.addEventListener("mousemove", (event) => {
        event.preventDefault();
        const state = model.accessComponent(message.thread, "/view/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/move",
          x: event.clientX,
          y: event.clientY,
          thread: message.thread,
        });
      });
      window.addEventListener("mouseup", (event) => {
        const state = model.accessComponent(message.thread, "/view/user_input");
        if (!state.mouse_target) return;
        model.emit({
          id: model.ID(),
          event: "/event/mouse/up",
          x: event.clientX,
          y: event.clientY,
          thread: message.thread,
        });
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/view",
    event: "/event/initial/load",
    message: "/message/view/create_state",
    routine: (model, message, resultId) => {
      model.setReference("/current", "/view/hud", "/current/hud");
      // model.setReference("/current", "/view/navigation", "/current/navigation");
      model.setReference("/current", "/view/style", "/current/style");
      model.setReference("/current", "/view/user_input", "/current/user_input");
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/style",
    event: "/event/initial/load",
    message: "/message/style/compile",
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
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/style/compiled",
    message: "/message/navigation/create_state",
    routine: (model, message, resultId) => {
      Navigation.createState(model, message.thread, message.entity);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/create_state",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/create_state",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.background(model);
      Render.full(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/render/full",
      });
    },
  },
);
