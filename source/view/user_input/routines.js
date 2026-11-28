class UserInput {
  static addEventListeners(m, h, r) {
    window.addEventListener("keydown", (e) => {
      m.emit({
        event: "/event/keyboard/down",
        run: m.createRun(),
        value: e.key,
      });
    });
    window.addEventListener("keyup", (e) => {
      m.emit({
        event: "/event/keyboard/up",
        run: m.createRun(),
        value: e.key,
      });
    });
    window.addEventListener("mousemove", (event) => {
      event.preventDefault();
      const state = m.accessComponent(m.endpoint, "/user_input");
      if (!state.mouse_target) return;
      m.emit({
        event: "/event/mouse/move",
        run: m.createRun(),
        x: event.clientX,
        y: event.clientY,
      });
    });
    window.addEventListener("mouseup", (event) => {
      const state = m.accessComponent(m.endpoint, "/user_input");
      if (!state.mouse_target) return;
      m.emit({
        event: "/event/mouse/up",
        run: m.createRun(),
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
    const a = {
      source: "/action_mapping",
    };
    const b = {
      source: "/bind_mapping",
    };
    const c = {
      source: "/move_mapping",
    };
    const d = {
      source: "/modifier_mapping",
    }

    const bindingIds = m.accessComponentIds("/user_input", "/user_input/binding");
    for (const bindingId of bindingIds) {
      const binding = m.getComponent(bindingId);
      a[binding.action] = binding.key;
      if (binding.mode === "/move") {
        c[binding.key] = binding.action;
      } else if (binding.mode === "/bind") {
        b[binding.key] = binding.action;
      } else if (binding.mode === "/modifier") {
        d[binding.key] = binding.action;
      }
    }
    m.setComponent(a);
    m.setReference(m.endpoint, "/action_mapping", a.id);
    m.setComponent(b);
    m.setReference(m.endpoint, "/bind_mapping", b.id);
    m.setComponent(c);
    m.setReference(m.endpoint, "/move_mapping", c.id);
    m.setComponent(d);
    m.setReference(m.endpoint, "/modifier_mapping", d.id);
  }

  static keyDown(m, h, r) {
    let event;

    const state = m.accessComponent(m.endpoint, "/user_input");
    if (state.bind) {
      event = this.bind(m, h.value);
    } else if (state.move) {
      event = this.move(m, h.value);
    } else if (state.edit) {
      event = this.edit(m, h.value);
    }
    console.log("KEY DOWN", event, state);
    if (!event) return;
    m.setComponent({
      source: "/message/header",
      event: event,
      value: h.value,
      result: r,
    });
  }

  static move(m, v) {
    const state = m.accessComponent(m.endpoint, "/user_input");
    const modifiers = m.accessComponent(m.endpoint, "/modifier_mapping");
    const modifier = modifiers[v];
    switch (modifier) {
      case "/event/user_input/bind":
        state.bind = true;
        return modifier;
      case "/event/user_input/return":
      case "/event/user_input/mode":
        state.move = false;
        state.edit = true;
        return modifier;
      case "/event/user_input/big":
        state.big = true;
        return modifier;
    }
    const event = m.accessComponent(m.endpoint, "/move_mapping")[v];
    return event;
  }

  static edit(m, v) {
    const state = m.accessComponent(m.endpoint, "/user_input");
    const modifiers = m.accessComponent(m.endpoint, "/modifier_mapping");
    const event = modifiers[v];
    if (event === "/event/user_input/bind") {
      state.bind = true;
      return event;
    }
    if (event === "/event/user_input/mode") {
      state.move = true;
      state.edit = false;
      return event;
    }
    if (event === "/event/user_input/return") {
      return event;
    }
    if (v.length === 1 || v === "Backspace") {
      return "/event/user_input/keyboard_input";
    }
  }

  static bind(m, v) {
    const bindings = m.accessComponent(m.endpoint, "/bind_mapping");
    return bindings[v];
  }

  static keyUp(m, h, r) {
    const state = m.accessComponent(m.endpoint, "/user_input");
    const modifiers = m.accessComponent(m.endpoint, "/modifier_mapping");
    const event = modifiers[h.value];
    console.log("KEY_UP", event);
    if (event === "/event/user_input/big") {
      state.big = false;
      m.setComponent({
        source: "/message/header",
        event: "/event/user_input/unbig",
        result: r,
      });
    } else if (event === "/event/user_input/bind") {
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

  static clickEntry(m, h, r) {
    const state = m.accessComponent(m.endpoint, "/user_input");
    state.move = false;
    state.edit = true;
  }
}
