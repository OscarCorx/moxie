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
      let entry;
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
      }
    }
  }

  static detail(model) {
    return;
    const local = model.accessComponent("/navigation", "/state/current");
    const contents = [];
    contents.push(...this.getLayout(model, local));
    contents.push(...this.getNavigation(model, local));
    contents.push(...this.getControl(model, local));
    contents.push(...this.getPrimary(model, local));
    contents.push(...this.getSecondary(model, local));
    contents.push(...this.getAlternate(model, local));
    contents.push(...this.getWorkspace(model, local));
    for (const c of contents) {
      let entry;
      switch (c.source) {
        case "/panel/flavor":
          entry = this.getElement(c.id, "/app");
          entry.textContent = c.id;
          this.addStyle(entry, {
            position: "absolute",
            top: c.top,
            left: c.left,
            height: c.height,
            width: c.width,
            cursor: "pointer",
            border: "1px solid black",
          });
          entry.addEventListener("mousedown", (e) => {
            model.emit({
              source: "/message/header",
              event: "/message/drag/start",
              id: c.id,
            });
          });
          break;
      }
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
    for (const id of properties) {
      console.log("PROPERTIES", model.getComponent(id));
    }
    const components = model.accessComponentIds(local.entity, local.property);
    for (const id of components) {
      console.log("COMPONENTS", model.getComponent(id));
    }
    const component = model.getComponent(local.component);
    console.log("COMPONENT", component);
    const fields = model.accessComponentIds(component.source, "/schema/field");
    for (const id of fields) {
      console.log("FIELDS", model.getComponent(id));
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
}
