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

  static outlineAbsolute(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailAbsolute(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static outlinePanel(m, c) {
    let e = this.getElement(c.id, c.parent);
    e = this.getElement(c.header, c.id);
    e = this.getElement(c.body, c.id);
    e = this.getElement(c.footer, c.id);
    e = this.getElement(c.tabs, c.footer);
    e = this.getElement(c.tab, c.footer);
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
    let e = this.getElement(c.id, c.parent);
  }

  static outlineTableField(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailTableField(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static outlineTableCell(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailTableCell(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }

  static outlineEntry(m, c) {
    let e = this.getElement(c.id, c.parent);
  }

  static detailEntry(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = `ENTRY: ${c.content}`;
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
    let e = this.getElement(c.id, c.parent);
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
    let e = this.getElement(c.id, c.parent);
  }

  static detailTab(m, c) {
    let e = this.getElement(c.id, c.parent);
    e.textContent = c.content;
  }
}
