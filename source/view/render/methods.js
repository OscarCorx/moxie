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
    const hud = model.accessComponent("/current", "/view/hud");
    const navigation = model.accessComponent("/current", "/view/navigation");
    const archetype_property = model.getComponent(navigation.archetype_property);
    /* USE ARCHETYPE TO GET GENERAL VERSIONS OF THESE */
    const contents = [];
    contents.push(...this.getLayout(model, hud));
    if (hud.workspace) contents.push(...this.getWorkspace(model, navigation));
    if (hud.primary) contents.push(...this.getPrimary(model, navigation));
    if (hud.secondary) contents.push(...this.getSecondary(model, navigation));
    if (hud.alternate) contents.push(...this.getAlternate(model, navigation));
    for (const c of contents) {
      this.outlineElement(model, c);
    }
  }

  static outlineElement(model, c) {
    switch (c.source) {
      case "/panel/navigation":
        this.outlineNavigation(model, c);
        break;
      case "/panel/setting":
        this.outlineSetting(model, c);
        break;
      case "/panel/action":
        this.outlineAction(model, c);
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
    const hud = model.accessComponent("/current", "/view/hud");
    const navigation = model.accessComponent("/current", "/view/navigation");
    /* USE ARCHETYPE TO GET GENERAL VERSIONS OF THESE */
    const contents = [];
    contents.push(...this.getLayout(model, hud));
    if (hud.primary) contents.push(...this.getPrimary(model, navigation));
    if (hud.secondary) contents.push(...this.getSecondary(model, navigation));
    if (hud.alternate) contents.push(...this.getAlternate(model, navigation));
    if (hud.workspace) contents.push(...this.getWorkspace(model, navigation));
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
      case "/panel/setting":
        this.detailSetting(model, c);
        break;
      case "/panel/action":
        this.detailAction(model, c);
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

  static detailUserInput(model) {
    const state = View.getUserInput(model);

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
    // contents.push({
    //   id: "/setting/panel",
    //   source: "/panel/setting",
    //   top: `100px`,
    //   left: `10px`,
    //   width: "10px",
    //   height: "10px",
    // });
    // contents.push({
    //   id: "/action/panel",
    //   source: "/panel/action",
    //   top: `100px`,
    //   left: `10px`,
    //   width: "10px",
    //   height: "10px",
    // });
    if (local.primary) {
      contents.push({
        id: "/primary/panel",
        source: "/panel/primary",
        top: (local.primary_y) ? `${local.primary_y}px` : `200px`,
        left: (local.primary_x) ? `${local.primary_x}px` : `10px`,
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
        top: `10px`,
        left: `10px`,
        width: "1000px",
        height: "600px",
      });
    }
    return contents;
  }

  static getNavigation(model, local) { return []; }

  static getSetting(model, local) { return []; }

  static getAction(model, local) { return []; }

  static getPrimary(model, local) {
    const component = model.getComponent(local.component);
    const pane = {
      source: "/info/pane",
      parent: "/primary/panel",
      entry: `/primary/info/pane`,
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
        focus: local.schema_field === id,
      });
      pane.grid = component[field.key];
    }
    return contents;
  }

  static getSecondary(model, local) {
    const entity = model.getComponent(local.archetype_entity).entity;
    const property = model.getComponent(local.archetype_property).property;
    const components = model.accessComponentIds(entity, property);

    const component = model.getComponent(local.component);
    const pane = {
      source: "/info/pane",
      parent: "/secondary/panel",
      entry: `/secondary/info/pane`,
      label: local.archetype_property,
      description: "This is a description",
      grid: "NEW RECORD"
    };
    const contents = [pane];
    for (let i = 0; i < components.length; i++) {
      const id = components[i];
      const label = (component.id === id) ? "SELECTED" : id;
      contents.push({
        source: "/info/entry",
        parent: "/secondary/panel",
        label: label,
        entry: `/secondary${id}`,
        action: "/message/navigation/component",
        component: id,
      });
    }
    return contents;
  }

  static getAlternate(model, local) { return []; }

  static getWorkspace(model, local) {
    return [];
  }

  static outlineNavigation(model, c) {
    let e = this.getElement("/navigation/panel", "/app");
    this.addStyle(e, {
      position: "absolute",
      top: c.top,
      left: c.left,
      border: "1px solid black",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center"
    });
    this.getElement("/navigation/panel/mode", "/navigation/panel");
    this.getElement("/navigation/panel/bind", "/navigation/panel");
    this.getElement("/navigation/panel/big", "/navigation/panel");
    this.getElement("/navigation/panel/action", "/navigation/panel");
  }

  static detailNavigation(model, c) {
    const user_input = model.accessComponent("/current", "/view/user_input");
    let e = this.getElement("/navigation/panel/mode", "/navigation/panel");
    e.textContent = `MODE: ${user_input.mode}`
    e = this.getElement("/navigation/panel/bind", "/navigation/panel");
    e.textContent = `BIND: ${user_input.bind}`
    e = this.getElement("/navigation/panel/big", "/navigation/panel");
    e.textContent = `BIG: ${user_input.big}`;
    if (c.action) {
      e = this.getElement("/navigation/panel/action", "/navigation/panel");
      e.textContent = `ACTION: ${c.action}`
    }
  }

  static outlineSetting(model, c) {
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
    entry.textContent = "setting";
  }

  static detailSetting(model, c) {

  }

  static outlineAction(model, c) {

  }

  static detailAction(model, c) {

  }

  static outlinePrimary(model, c) {
    let e = this.getElement(c.id, "/app");
    this.addStyle(e, {
      position: "absolute",
      top: c.top,
      left: c.left,
      border: "1px solid black",
      display: "flex",
      "flex-direction": "column",
    });
    e = this.getElement("/primary/row", c.id);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
    });
    e = this.getElement("/primary/handle", "/primary/row");
    this.addStyle(e, {
      "cursor": "grab",
    });
    e.addEventListener("mousedown", (event) => {
      event.preventDefault();
      model.emit({
        event: "/event/mouse/down",
        panel: c.id,
        x: event.clientX,
        y: event.clientY,
      });
    })
    e.textContent = "HANDLE";
  }

  static detailPrimary(model, c) {

  }

  static outlineSecondary(model, c) {
    let e = this.getElement(c.id, "/app");
    this.addStyle(e, {
      position: "absolute",
      top: c.top,
      left: c.left,
      height: c.height,
      width: c.width,
      cursor: "pointer",
      border: "1px solid black",
    });
    e = this.getElement("/secondary/row", c.id);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
    });
    e = this.getElement("/secondary/handle", "/secondary/row");
    this.addStyle(e, {
      "cursor": "grab",
    });
    e.addEventListener("mousedown", (event) => {
      event.preventDefault();
      model.emit({
        event: "/event/mouse/down",
        panel: c.id,
        x: event.clientX,
        y: event.clientY,
      });
    })
    e.textContent = "HANDLE";
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
      border: "1px solid black",
      display: "flex",
      "flex-direction": "column"
    });
  }

  static detailWorkspace(model, c) {

  }

  static positionPanel(model, panel_id) {
    const hud = model.accessComponent("/current", "/view/hud");
    const e = this.getElement("/primary/panel");
    this.addStyle(e, {
      top: `${hud.primary_y}px`,
      left: `${hud.primary_x}px`,
    })

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
    e = this.getElement(`${c.entry}/buttons`, `${c.entry}/title`);
    this.addStyle(e, {
      flex: "auto",
    });
    e = this.getElement(`${c.entry}/description`, `${c.entry}/info/pane`);
    this.addStyle(e, {
      flex: "auto",
    });
    e = this.getElement(`${c.entry}/grid`, `${c.entry}/info/pane`);
    this.addStyle(e, {
      flex: "auto",
    });
    e.textContent = "NEW";
    e.addEventListener("click", (event) => {
      model.emit({
        event: "/message/new",
      });
    });

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
    if (c.action) {
      e.addEventListener("click", (e) => {
        model.emit({
          event: c.action,
          component: c.component,
          field: c.field,
          value: e.target.value,
        });
      });
    }
    e = this.getElement(`${c.entry}/title`, `${c.entry}/text/entry`);
  }

  static detailInfoEntry(model, c) {
    let e = this.getElement(`${c.entry}/title`, `${c.entry}/text/entry`);
    e.textContent = c.label;
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
    if (c.focus) {
      this.addStyle(e, {
        color: "red",
      })
    }
    e = this.getElement(`${c.entry}/action`, `${c.entry}/title`);
    e.textContent = "ACTION";
    e = this.getElement(`${c.entry}/value`, `${c.entry}/entry`);
    e.value = c.value;
  }

  static outlineInfoTable(model, c) {
    let e = this.getElement(`/workspace/table/${c.row}/${c.column}`, `/workspace/table`, "input");
    e.value = c.value;
    e.addEventListener("input", (event) => {
      console.log("TABLE INPUT", c.row, c.column, event.value);
    });


  }

  static detailInfoTable(model, c) {

  }

  static outlineTextTable(model, c) {

  }

  static detailTextTable(model, c) {

  }
}
