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
    if (hud.primary) contents.push(...this.getPrimary(model, version));
    if (hud.secondary) contents.push(...this.getSecondary(model, version));
    if (hud.alternate) contents.push(...this.getAlternate(model, version));
    if (hud.workspace) contents.push(...this.getWorkspace(model, version));
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
    const current = model.accessComponent("/current", "/current/view/state");
    const hud = model.accessComponent(current.hud, "/view/hud/version");
    const version = model.accessComponent(current.view_state, "/view/state/version");
    /* USE ARCHETYPE TO GET GENERAL VERSIONS OF THESE */
    const contents = [];
    contents.push(...this.getLayout(model, hud));
    if (hud.primary) contents.push(...this.getPrimary(model, version));
    if (hud.secondary) contents.push(...this.getSecondary(model, version));
    if (hud.alternate) contents.push(...this.getAlternate(model, version));
    if (hud.workspace) contents.push(...this.getWorkspace(model, version));
    for (const c of contents) {
      // this.outlineElement(model, c);
      this.detailElement(model, c)
    }
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
        this.detailInfoEntry(model, c);
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
        display: "flex",
        "flex-direction": "column",
      });
    }
    if (local.secondary) {
      contents.push({
        id: "/secondary/panel",
        source: "/panel/secondary",
        top: `300px`,
        left: `200px`,
        display: "flex",
        "flex-direction": "column",
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
        display: "flex",
        "flex-direction": "column",
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
    const properties = model.accessComponentIds(local.archetype, "/archetype/property");
    const components = model.accessComponentIds(local.entity, local.property);
    const component = model.getComponent(local.component);
    const pane = {
      source: "/info/pane",
      parent: "/primary/panel",
      entry: `/primary${component.id}`,
      label: local.property,
      description: "This is a description",
      grid: "This is a grid"
    };
    const contents = [pane];
    const schema = model.accessComponentIds(component.source, "/schema/field");
    for (let i = 0; i < schema.length; i++) {
      const id = schema[i];
      const field = model.getComponent(id);
      contents.push({
        source: "/text/entry",
        parent: "/primary/panel",
        label: field.key,
        entry: `/primary${id}`,
        icon: "I",
        component: component.id,
        field: field.key,
        value: component[field.key],
      });
      pane.grid = component[field.key];
    }
    return contents;
  }

  static getSecondary(model, local) {
    const properties = model.accessComponentIds(local.archetype, "/archetype/property");
    const components = model.accessComponentIds(local.entity, local.property);
    const component = model.getComponent(local.component);
    const pane = {
      source: "/info/pane",
      parent: "/secondary/panel",
      entry: `/secondary${local.property}`,
      label: local.property,
      description: "This is a description",
      grid: "This is a grid"
    };
    const contents = [pane];
    for (let i = 0; i < components.length; i++) {
      const id = components[i];
      const component = model.getComponent(id);
      contents.push({
        source: "/info/entry",
        parent: "/secondary/panel",
        label: id,
        entry: `/secondary${id}`,
      });
    }
    return contents;
  }

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
      border: "1px solid black",
      display: "flex",
      "flex-direction": "column",
    });
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
  }

  static detailWorkspace(model, c) {

  }

  static outlineInfoPane(model, c) {
    let e = this.getElement(`${c.entry}/info/pane`, c.parent);
    e = this.getElement(`${c.entry}/title`, `${c.entry}/info/pane`);
    this.addStyle(e, {
      display: "flex",
      "justify-content": "space-between",
    });
    e = this.getElement(`${c.entry}/label`, `${c.entry}/title`);
    this.addStyle(e, {
      flex: "auto",
    });
    // e.textContent = c.label;
    e = this.getElement(`${c.entry}/buttons`, `${c.entry}/title`);
    this.addStyle(e, {
      flex: "auto",
    });
    // e.textContent = "BUTTONS"
    e = this.getElement(`${c.entry}/description`, `${c.entry}/info/pane`);
    this.addStyle(e, {
      flex: "auto",
    });
    // e.textContent = c.description;
    e = this.getElement(`${c.entry}/grid`, `${c.entry}/info/pane`);
    this.addStyle(e, {
      flex: "auto",
    });
    // e.textContent = c.grid;

  }

  static detailInfoPane(model, c) {
    let e = this.getElement(`${c.entry}/label`, `${c.entry}/title`);
    e.textContent = c.label;
    e = this.getElement(`${c.entry}/buttons`, `${c.entry}/title`);
    e.textContent = "BUTTONS"
    e = this.getElement(`${c.entry}/description`, `${c.entry}/info/pane`);
    e.textContent = c.description;
    e = this.getElement(`${c.entry}/grid`, `${c.entry}/info/pane`);
    e.textContent = c.grid;
  }


  static outlineInfoEntry(model, c) {
    let e = this.getElement(`${c.entry}/text/entry`, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column"
    });
    e = this.getElement(`${c.entry}/title`, `${c.entry}/text/entry`);
    e.textContent = c.label;
  }

  static detailInfoEntry(model, c) {

  }

  static outlineTextEntry(model, c) {
    let e = this.getElement(`${c.entry}/text/entry`, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column"
    });
    e = this.getElement(`${c.entry}/title`, `${c.entry}/text/entry`);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
    });
    e = this.getElement(`/title${c.entry}/label`, `${c.entry}/title`);
    this.addStyle(e, {

    });
    e = this.getElement(`${c.entry}/action`, `${c.entry}/title`);
    this.addStyle(e, {

    });
    e = this.getElement(`${c.entry}/entry`, `${c.entry}/text/entry`);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
    });
    // e = this.getElement(`${c.entry}/tex`, `${c.entry}/entry`);
    // this.addStyle(e, {
    //   display: "flex",
    //   "flex-direction": "row",
    // });
    e = this.getElement(`${c.entry}/value`, `${c.entry}/entry`, "input");
    this.addStyle(e, {
      display: "flex",
      "justify-content": "center",
      flex: "1",
    });
    e.addEventListener("input", (e) => {
      console.log("HERE WE ARE", e.target.value)
      model.emit({
        event: "/message/update",
        component: c.component,
        field: c.field,
        value: e.target.value,
      });
    })
  }

  static detailTextEntry(model, c) {
    let e = this.getElement(`/title${c.entry}/label`, `${c.entry}/title`);
    e.textContent = c.label;
    e = this.getElement(`${c.entry}/action`, `${c.entry}/title`);
    e.textContent = "ACTION";
    e = this.getElement(`${c.entry}/value`, `${c.entry}/entry`, "input");
    e.value = c.value;
  }
}
