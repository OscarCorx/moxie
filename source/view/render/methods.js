class Render {
  static getElement(id, parentId, tagName) {
    let element = document.getElementById(id);
    if (!element) {
      const parent = document.getElementById(parentId);
      element = document.createElement(tagName || "div");
      element.setAttribute("id", id);
      parent.appendChild(element);
    }
    return element;
  }

  static addStyle(element, style) {
    Object.assign(element.style, style);
  }

  static outline(model) {
    const app = document.getElementById("/app");
    while (app.firstChild) {
      app.firstChild.remove();
    }
    const current = model.accessComponent("/current", "/current/view/state");
    const hud = model.accessComponent(current.hud, "/view/hud/version");
    const version = model.accessComponent(current.view_state, "/view/state/version");
    /* USE ARCHETYPE TO GET GENERAL VERSIONS OF THESE */
    const contents = [];
    contents.push(...this.getLayout(model, hud));
    contents.push(...this.getPrimary(model, version));
    contents.push(...this.getSecondary(model, version));
    contents.push(...this.getAlternate(model, version));
    contents.push(...this.getWorkspace(model, version));
    for (const c of contents) {
      this.outlineElement(model, c);
    }
  }

  static outlineElement(model, c) {
    switch (c.source) {
      case "/panel/navigation":
        this.outlineNavigation(model, c);
        break;
      case "/panel/control":
        this.outlineControl(model, c);
        break;
      case "/panel/primary":
        this.outlinePrimary(model, c);
        break;
      case "/panel/secondary":
        this.outlineSecondary(model, c);
        break;
      case "/panel/alternate":
        this.outlineAlternate(model, c);
        break;
      case "/panel/workspace":
        this.outlineWorkspace(model, c);
        break;
      case "/info/pane":
        this.outlineInfoPane(model, c);
        break;
      case "/text/pane":
        break;
      case "/info/entry":
        this.outlineInfoEntry(model, c);
        break;
      case "/text/entry":
        this.outlineTextEntry(model, c);
        break;
    }
  }

  static detail(model) {
    return;

  }

  static detailElement(model, c) {
    switch (c.source) {
      case "/panel/navigation":
        this.detailNavigation(model, c);
        break;
      case "/panel/control":
        this.detailControl(model, c);
        break;
      case "/panel/primary":
        this.detailPrimary(model, c);
        break;
      case "/panel/secondary":
        this.detailSecondary(model, c);
        break;
      case "/panel/alternate":
        this.detailAlternate(model, c);
        break;
      case "/panel/workspace":
        this.detailWorkspace(model, c);
        break;
      case "/info/pane":
        this.detailInfoPane(model, c);
        break;
      case "/info/entry":
        this.detailTextEntry(model, c);
        break;
      case "/text/entry":
        this.detailTextEntry(model, c);
        break;
    }
  }


  static getLayout(model, local) {
    const contents = [];
    contents.push({
      id: "/navigation/panel",
      source: "/panel/navigation",
      top: `10px`,
      left: `10px`,
      width: "10px",
      height: "10px",
    });
    contents.push({
      id: "/control/panel",
      source: "/panel/control",
      top: `100px`,
      left: `10px`,
      width: "10px",
      height: "10px",
    });
    if (local.primary) {
      contents.push({
        id: "/primary/panel",
        source: "/panel/primary",
        top: `200px`,
        left: `10px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.secondary) {
      contents.push({
        id: "/secondary/panel",
        source: "/panel/secondary",
        top: `300px`,
        left: `10px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.alternate) {
      contents.push({
        id: "/alternate/panel",
        source: "/panel/alternate",
        top: `400px`,
        left: `10px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.workspace) {
      contents.push({
        id: "/workspace/panel",
        source: "/panel/workspace",
        top: `500px`,
        left: `10px`,
        width: "10px",
        height: "10px",
      });
    }
    return contents;
  }

  static getNavigation(model, local) { return []; }

  static getControl(model, local) { return []; }

  static getPrimary(model, local) {
    const contents = [];
    const properties = model.accessComponentIds(local.archetype, "/archetype/property");
    const components = model.accessComponentIds(local.entity, local.property);
    const component = model.getComponent(local.component);
    const schema = model.accessComponentIds(component.source, "/schema/field");
    for (let i = 0; i < schema.length; i++) {
      const id = schema[i];
      const field = model.getComponent(id);
      contents.push({
        source: "/text/entry",
        panel: "/primary/panel",
        entry: `/primary/panel/${id}`,
        entry_icon: `/view/entry/${id}/icon`,
        entry_field: `/view/entry/${id}/key`,
        entry_value: `/view/entry/${id}/value`,
        icon: "I",
        component: component.id,
        field: field.key,
        value: component[field.key],
      });
      if (local.field === id) {
        const state = model.accessComponent("/user_input", "/procedure/state");
        contents.push({
          source: "/entity/panel/entry",
          panel: "/entity/panel",
          entry: "/component/panel/entry",
          component: component.id,
          value: component[field.key],
        }, {
          source: "/view/entry/focus",
          entry: `/view/entry/${id}`,
          edit: state.mode === "/entry",
          entry_value: `/view/entry/${id}/value`,
        });
      }
    }
    return contents;
  }

  static getSecondary(model, local) { return []; }

  static getSecondary(model, local) { return []; }

  static getAlternate(model, local) { return []; }

  static getWorkspace(model, local) { return []; }

  static outlineNavigation(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "navigation";
    return entry;
  }

  static detailNavigation(model, c) {

  }

  static outlineControl(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "control";
  }

  static detailControl(model, c) {

  }

  static outlinePrimary(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "primary";
  }

  static detailPrimary(model, c) {

  }


  static outlineSecondary(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "secondary";
  }

  static detailSecondary(model, c) {

  }

  static outlineAlternate(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "alternate";
  }

  static detailAlternate(model, c) {

  }

  static outlineWorkspace(model, c) {
    let entry = this.getElement(c.id, "/app");
    this.addStyle(entry, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    entry.textContent = "workspace";
  }

  static detailWorkspace(model, c) {

  }

  static outlineInfoPane(model, c) {

  }

  static detailInfoPane(model, c) {

  }


  static outlineInfoEntry(model, c) {

  }

  static detailInfoEntry(model, c) {

  }

  static outlineTextEntry(model, c) {
    const e = this.getElement(c.entry, c.panel);
    e.textContent = c.field;
    // style(e, L.view_entry);
    // e = this.getElement(c.entry_icon, c.entry);
    // style(e, L.view_part);
    // e = this.getElement(c.entry_field, c.entry);
    // style(e, L.view_part);
    // e = this.getElement(c.entry_value, c.entry, "input");
    // e.addEventListener("input", (e) => {
    //   console.log("INPUT", e.target.value);
    //   this.emit({
    //     event: "/message/update",
    //     component: c.component,
    //     field: c.field,
    //     value: e.target.value,
    //   })
    // });
    // style(e, L.view_part);
  }

  static detailTextEntry(model, c) { }
}
