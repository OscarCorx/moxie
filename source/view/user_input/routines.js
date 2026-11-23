class UserInput {
  static addEventListeners(m, h, r) {
    window.addEventListener("keydown", (e) => {
      m.emit({
        id: m.ID(),
        event: "/event/keyboard/down",
        value: e.key,
      });
    });
    window.addEventListener("keyup", (e) => {
      m.emit({
        id: m.ID(),
        event: "/event/keyboard/up",
        value: e.key,
      });
    });
    window.addEventListener("mousemove", (event) => {
      event.preventDefault();
      const state = m.accessComponent(m.endpoint, "/user_input");
      if (!state.mouse_target) return;
      m.emit({
        event: "/event/mouse/move",
        x: event.clientX,
        y: event.clientY,
      });
    });
    window.addEventListener("mouseup", (event) => {
      const state = m.accessComponent(model.endpoint, "/user_input");
      if (!state.mouse_target) return;
      m.emit({
        event: "/event/mouse/up",
        x: event.clientX,
        y: event.clientY,
      });
    });
  }

  static build(m, h, r) {
    const c = {
      source: "/user_input/state",
      move: true,
      edit: false,
      bind: false,
      big: false,
      buffer: "",
    };
    m.setComponent(c);
    m.setReference(m.endpoint, "/user_input", c.id);
  }

  static compile(m, h, r) {
    const c = {
      source: "/binding",
    };

    const bindingIds = m.accessComponentIds("/user_input", "/user_input/binding");
    for (const bindingId of bindingIds) {
      const binding = this.getComponent(bindingId);
      c[binding.key] = binding.event;
    }
    m.setComponent(c);
    m.setReference(m.endpoint, "/binding", c.id);
  }

  static keyDown(m, h, r) {
    let event;

    const state = m.accessComponent(h.run, "/user_input/state");
    if (state.bind) {
      event = this.bind(state, h.value);
    } else if (state.move) {
      event = this.move(state, h.value);
    } else if (state.edit) {
      event = this.edit(state, h.value);
    }
    m.setComponent({
      source: "/message/header",
      event: event,
      result: r,
    });
  }

  static keyUp(m, h, r) {
    const state = m.accessComponent(h.run, "/user_input/state");

    const binding = m.accessComponent(h.run, "/binding");
    const event = binding[h.value];
    if (event === "/user_input/bind") {
      state.bind = false;
      m.setComponent({
        source: "/message/header",
        event: "/event/user_input/unbind",
        result: r,
      });
    }
  }

  static mousseDrag(m, h, r) {

  }

  static mouseMove(m, h, r) {

  }

  static mouseUp(m, h, r) {

  }
}
