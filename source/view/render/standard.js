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
    if (c.handle) {
      e = this.getElement(`${c.id}/handle`, c.id);
      e = this.getElement(`${c.id}/grab`, `${c.id}/handle`);
      this.addStyle(e, {
        cursor: "grab",
      });
      e.textContent = "HANDLE";
      e.addEventListener("mousedown", (event) => {
        event.preventDefault();
        m.emit({
          event: "/event/mouse/down",
          thread: "/current",
          element_id: c.id,
          x: event.clientX,
          y: event.clientY,
        });
      })
    }
  }

  static detailAbsolute(m, c) {
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
  }

  static outlinePanel(m, c) {
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
    e = this.getElement(c.footer, c.id);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
    e = this.getElement(c.tabs, c.footer);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
    e = this.getElement(c.tab, c.footer);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
  }

  static detailPanel(m, c) { }

  static outlinePanelRow(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailPanelRow(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static outlinePanelEntry(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailPanelEntry(m, c) {
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
    let e = this.getElement(c.id, c.parent, "table");
    this.addStyle(e, {
      "border-collapse": "collapse",
    });
    e = this.getElement(c.table_header, c.id, "tr");
  }

  static detailTable(m, c) {
    let e = this.getElement(c.id, c.parent, "table");
    e = this.getElement(c.table_header, c.id, "tr");
  }

  static outlineTableRow(m, c) {
    let e = this.getElement(c.id, c.parent, "tr");
  }

  static detailTableRow(m, c) {
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id);
    if (c.focus) {
      this.addStyle(e, style["row_focus"]);
    } else if (c.row % 2) {
      this.addStyle(e, style["row_passive_0"]);
    } else {
      this.addStyle(e, style["row_passive_1"]);
    }
  }

  static outlineTableField(m, c) {
    let e = this.getElement(c.id, c.parent, "td");
    this.addStyle(e, { width: "100px" })
  }

  static detailTableField(m, c) {
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
    const display = (c.focus) ? style["field_focus"] : style["field_inactive"];
    this.addStyle(e, display);

  }

  static outlineTableCell(m, c) {
    let e = this.getElement(c.id, c.parent, "td");
    this.addStyle(e, { height: "20px" });
    e.addEventListener("click", (e) => {
      m.emit({
        event: "/event/entry/select",
        thread: "/current",
        component: c.component,
        field: c.field,
      });
    });
  }

  static detailTableCell(m, c) {
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    if (c.focus) {
      this.addStyle(e, style["field_focus"]);
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
        m.emit({
          event: c.action,
          component: c.component,
          field: c.field,
          thread: "/current",
        });
      });
    }
  }

  static detailEntry(m, c) {
    const state = m.accessComponent("/current", "/style");
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
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    if (c.focus === "inactive") {
      this.addStyle(e, style["button_inactive"]);
    } else if (c.active === "passive") {
      this.addStyle(e, style["button_passive"]);
    } else {
      this.addStyle(e, style["button_focus"]);
    }
    e.textContent = c.content;
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
    const state = m.accessComponent("/current", "/style");
    const style = m.getEntity(state.main_theme);
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, style["space_tab"]);
  }

  static detailTab(m, c) {
    const state = m.accessComponent("/current", "/style");
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
      m.emit({
        event: c.action,
        value: c.action_value,
        thread: "/current",
      });
    });
    e.textContent = c.content;
  }
}
