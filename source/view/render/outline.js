class Outline {
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

  static element(model, c) {
    switch (c.source) {
      case "/hud":
        Standard.outlineHud(model, c);
        break;
      case "/absolute":
        Standard.outlineAbsolute(model, c);
        break;
      case "/panel":
        Standard.outlinePanel(model, c);
        break;
      case "/panel/row":
        Standard.outlinePanelRow(model, c);
        break;
      case "/board":
        Standard.outlineBoard(model, c);
        break;
      case "/board/tile":
        Standard.outlineAbsolute(model, c);
        break;
      case "/table":
        Standard.outlineTable(model, c);
        break;
      case "/table/row":
        Standard.outlineTableRow(model, c);
        break;
      case "/table/cell":
        Standard.outlineTableCell(model, c);
        break;
      case "/entry":
        Standard.outlineEntry(model, c);
        break;
      case "/chip":
        Standard.outlineChip(model, c);
        break;
      case "/toggle":
        Standard.outlineToggle(model, c);
        break;
      case "/text":
        Standard.outlineText(model, c);
        break;
      case "/button":
        Standard.outlineButton(model, c);
        break;
      case "/link":
        Standard.outlineLink(model, c);
        break;
      case "/field":
        Standard.outlineField(model, c);
        break;
      case "/tab":
        Standard.outlineTab(model, c);
        break;
    }
  }

  static absolute(m, c) {
    let e = this.getElement(c.id, "/app");
    this.addStyle(e, {
      position: "absolute",
      top: c.top,
      left: c.left,
      border: "1px solid black",
    });
    if (c.width) {
      this.addStyle(e, {
        width: `${c.width}vw`,
        height: `${c.height}vh`,
      });
    }
    if (c.handle) {
      e = this.getElement(`${c.id}/handle`, c.id);
      this.addStyle(e, {
        display: "flex",
        padding: "10px",
        "align-items": "center",
        "justify-content": "center",
      });
      e = this.getElement(`${c.id}/bar`, `${c.id}/handle`);
      this.addStyle(e, {
        height: "6px",
        width: "50px",
        border: "1px solid black",
        "border-radius": "3px",
      });
      e.addEventListener("mousedown", (event) => {
        event.preventDefault();
        m.emit({
          event: "/event/mouse/down",
          element: c.id,
          x: event.clientX,
          y: event.clientY,
        });
      })
    }
  }
  /* FLEX ROWS / COLUMNS */
  static panel(m, c) {
    let e = this.getElement(`${c.parent}/panel`, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column",
      flex: 1,
    });
  }
  /* GRID ROWS COLUMNS */
  static board(m, c) {

  }
  /* COMPOSITE OF PRIMITIVES */
  static entry(m, c) {
    let e = this.getElement(`${c.parent}/row/${c.row}`, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
    e = this.getElement(c.id, `${c.parent}/row/${c.row}`);
    this.addStyle(e, {
      flex: "auto",
      display: "flex",
      width: "14vw",
      height: "7vh",
    });
    e.textContent = c.content;
  }

  static table(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "column",
      flex: 1,
    });
    e = this.getElement(c.header_id, c.id);
    this.addStyle(e, {
      flex: 1,
    });
    e = this.getElement(c.body_id, c.id);
    e = this.getElement(c.fields_id, c.body_id);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
    e = this.getElement(c.footer_id, c.id);
  }

  static tableTitle(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = "Title | INFO PANEL";
  }

  static tableField(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      flex: "auto",
      display: "flex",
      width: "7vw",
      height: "3vh",
    });
    e.textContent = "FIELDS";
  }

  static tableProperty(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = "PROPERTIES";
  }

  static tableRow(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      display: "flex",
      "flex-direction": "row",
    });
  }
  static tableCell(m, c) {
    let e = this.getElement(c.id, c.parent);
    this.addStyle(e, {
      flex: "auto",
      display: "flex",
      width: "7vw",
      height: "3vh",
    });
    e.textContent = `${c.row} / ${c.column}`;
  }
  /* PRIMITIVES */
  static chip(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = `${c.row} / ${c.column}`;
  }

  static text(m, c) {

  }

  static button(m, c) {

  }

  static link(m, c) {

  }

  static tab(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static field(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }
}
