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
          break;
      }
    }
  }

  static detail(model) {
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
    let c;
    c = model.accessComponent(local.navigation, "/panel/flavor");
    contents.push({
      id: local.navigation,
      source: "/panel/flavor",
      top: `${c.y}px`,
      left: `${c.x}px`,
      width: "10px",
      height: "10px",
    });
    c = model.accessComponent(local.control, "/panel/flavor");
    contents.push({
      id: local.control,
      source: "/panel/flavor",
      top: `${c.y}px`,
      left: `${c.x}px`,
      width: "10px",
      height: "10px",
    });
    if (local.primary) {
      c = model.accessComponent(local.primary, "/panel/flavor");
      contents.push({
        id: local.primary,
        source: "/panel/flavor",
        top: `${c.y}px`,
        left: `${c.x}px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.secondary) {
      c = model.accessComponent(local.secondary, "/panel/flavor");
      contents.push({
        id: local.secondary,
        source: "/panel/flavor",
        top: `${c.y}px`,
        left: `${c.x}px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.alternate) {
      c = model.accessComponent(local.alternate, "/panel/flavor");
      contents.push({
        id: local.alternate,
        source: "/panel/flavor",
        top: `${c.y}px`,
        left: `${c.x}px`,
        width: "10px",
        height: "10px",
      });
    }
    if (local.workspace) {
      c = model.accessComponent(local.workspace, "/panel/flavor");
      contents.push({
        id: local.workspace,
        source: "/panel/flavor",
        top: `${c.y}px`,
        left: `${c.x}px`,
        width: "10px",
        height: "10px",
      });
    }
    return contents;
  }

  static getNavigation(model, local) { return []; }

  static getControl(model, local) { return []; }

  static getPrimary(model, local) { return []; }

  static getSecondary(model, local) { return []; }

  static getSecondary(model, local) { return []; }

  static getAlternate(model, local) { return []; }

  static getWorkspace(model, local) { return []; }
}
