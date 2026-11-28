class Standard {
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

  static moveAbsolute(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      position: "absolute",
      left: `${c.x}px`,
      top: `${c.y}px`,
    });
  }

  static outlineHud(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);

    let e = this.getElement("/hud/container", "/app");
    while (e.firstChild) {
      e.firstChild.remove();
    }
    e = this.getElement("/hud/container", "/app");
    this.addStyle(e, {
      height: "98vh",
      display: "flex",
      "flex-direction": "column",
    });
    e = this.getElement("/hud/top", "/hud/container");
    this.addStyle(e, {
      height: "10vh",
      display: "flex",
      "flex-direction": "row",
      "border-bottom": "1px solid black",
    });
    e = this.getElement("/hud/icon", "/hud/top");
    this.addStyle(e, {
      width: "10vw"
    });
    e.textContent = "ICON";
    e = this.getElement("/hud/navigation", "/hud/top");
    this.addStyle(e, {
      width: "40vw"
    });
    e.textContent = "NAVIGATION";
    e = this.getElement("/hud/search", "/hud/top");
    this.addStyle(e, {
      flex: 1
    });
    e.textContent = "SEARCH";
    e = this.getElement("/hud/user", "/hud/top");
    this.addStyle(e, {
      width: "10vw"
    });
    e.textContent = "USER";
    e = this.getElement("/hud/space", "/hud/container");
    this.addStyle(e, {
      flex: 1,
      display: "flex",
      "flex-direction": "row",
    });
    // e = this.getElement("/hud/gutter", "/hud/space");
    // this.addStyle(e, {
    //   width: "10vw",
    //   padding: "10px",
    //   display: "flex",
    //   "flex-direction": "column",
    //   "border-right": "1px solid black",
    // });
    // e = this.getElement("/hud/gutter_group", "/hud/gutter");
    // this.addStyle(e, {
    //   flex: 1,
    // });
    // e.textContent = "NAVIGATION"
    // e = this.getElement("/hud/action", "/hud/gutter");
    // this.addStyle(e, {
    //   height: "10vh",
    //   "border-top": "1px solid black",
    // });
    // e.textContent = "ACTION"
    e = this.getElement("/hud/workspace", "/hud/space");
    this.addStyle(e, {
      padding: "10px",
      flex: 1,
      display: "flex",
      "flex-direction": "column",
    });
    e = this.getElement("/hud/card", "/hud/workspace");
    this.addStyle(e, {
      padding: "10px",
      position: "relative",
      left: "0px",
      top: "0px",
      flex: 1,
    });
    this.addStyle(e, style["background"]);
    // e = this.getElement("/hud/auxiliary", "/hud/workspace");
    // this.addStyle(e, {
    //   height: "10vh",
    //   padding: "5px",
    //   "border-top": "1px solid black",
    // });
    // e.textContent = "AUXILIARY";
  }

  static outlineAbsolute(m, c) {
    let e = this.getElement(c.id, c.parent);
    while (e.firstChild) {
      e.firstChild.remove();
    }
    this.addStyle(e, {
      position: "absolute",
      left: `${c.x}px`,
      top: `${c.y}px`,
      height: "100%"
    });
    if (!c.active) return;
    if (c.handle) {
      e = this.getElement(`${c.id}/handle`, c.id);
      e = this.getElement(`${c.id}/grab`, `${c.id}/handle`);
      this.addStyle(e, {
        cursor: "grab",
      });
      e.textContent = "HANDLE";
      e.addEventListener("mousedown", (event) => {
        event.preventDefault();
        const p = {
          source: "/procedure/run",
          procedure: "/user_interace",
          run: m.ID(),
        };
        m.setComponent(p);
        m.emit({
          event: "/event/mouse/down",
          run: m.createRun(),
          element: c.id,
          x: event.clientX,
          y: event.clientY,
        });
      })
    }
  }

  static detailAbsolute(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
  }

  static outlineBoard(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailBoard(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static outlineBoardTile(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailBoardTile(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static outlineTable(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column",
      height: "100%"
    });
    e = this.getElement(c.header, c.id);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
    e = this.getElement(c.body, c.id);
    this.addStyle(e, {
      height: "100%",
    });
    e = this.getElement(c.table, c.body, "table");
    this.addStyle(e, {
      "border-collapse": "collapse",
      width: "100%",
    });
    e = this.getElement(c.fields, c.table, "tr");
  }

  static detailTable(m, c) {
    let e = this.getElement(c.id, c.parent, "table");
    e = this.getElement(c.table_header, c.id, "tr");
  }

  static outlineTableRow(m, c) {
    let e = this.getElement(c.id, c.parent, "tr");
  }

  static detailTableRow(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id);
    if (c.row % 2) {
      this.addStyle(e, style["foreground_0"]);
    } else {
      this.addStyle(e, style["foreground_1"]);
    }
  }

  static outlineTableField(m, c) {
    let e = this.getElement(c.id, c.parent, "td");
    this.addStyle(e, { width: "100px" })
  }

  static detailTableField(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
    const display = style["background"];
    this.addStyle(e, display);

  }

  static outlineTableCell(m, c) {
    let e = this.getElement(c.id, c.parent, "td");
    this.addStyle(e, { height: "20px" });
    e.addEventListener("click", (e) => {
      m.emit({
        event: "/event/view/entry_select",
        run: m.createRun(),
        component: c.component,
        field: c.field,
      });
    });
  }

  static detailTableCell(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    if (c.focus) {
      this.addStyle(e, style["focus"]);
    }
    e.textContent = c.content;
  }

  static outlineEntry(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column",
    });
    e = this.getElement(`${c.id}/title`, c.id);
    e = this.getElement(`${c.id}/description`, c.id);
    if (c.subtitle) {
      e = this.getElement(`${c.id}/subtitle`, c.id);
      e = this.getElement(`${c.id}/subdescription`, c.id);
    }
    if (c.action) {
      e = this.getElement(`${c.id}/action`, c.id);
      e.addEventListener("click", () => {
        console.log("ACTION", c.action);
        m.emit({
          event: c.action,
          run: m.createRun(),
          component: c.component,
          field: c.field,
        });
      });
    }
  }

  static detailEntry(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, style["field_inactive"]);
    e = this.getElement(`${c.id}/title`, c.id);
    e.textContent = c.title;
    e = this.getElement(`${c.id}/description`, c.id);
    e.textContent = c.description;
    if (c.subtitle) {
      e = this.getElement(`${c.id}/subtitle`, c.id);
      e.textContent = c.subtitle;
      e = this.getElement(`${c.id}/subdescription`, c.id);
      e.textContent = c.subdescription;
    }
    if (c.action) {
      e = this.getElement(`${c.id}/action`, c.id);
      e.textContent = c.action_text;
    }
  }

  static outlineChip(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailChip(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineText(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailText(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineToggle(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailToggle(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineButton(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailButton(m, c) {

  }

  static outlineLink(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailLink(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineField(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailField(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineTab(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, style["space_tab"]);
  }

  static detailTab(m, c) {
    const state = m.accessComponent(m.endpoint, "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    if (c.active === "inactive") {
      this.addStyle(e, style["tab_inactive"]);
    } else if (c.active === "passive") {
      this.addStyle(e, style["tab_passive"]);
    } else {
      this.addStyle(e, style["tab_focus"]);
    }
    e.addEventListener("click", () => {
      const p = {
        source: "/procedure/run",
        procedure: "/user_interace",
        run: m.ID(),
      };
      m.setComponent(p);
      m.emit({
        event: c.action,
        run: m.createRun(),
        value: c.action_value,
      });
    });
    e.textContent = c.content;
  }
}
