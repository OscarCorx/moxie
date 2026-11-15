class Detail {
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
      case "/absolute":
        Standard.detailAbsolute(model, c);
        break;
      case "/panel":
        Standard.detailPanel(model, c);
        break;
      case "/panel/row":
        Standard.detailPanelRow(model, c);
        break;
      case "/board":
        Standard.detailBoard(model, c);
        break;
      case "/board/tile":
        Standard.detailAbsolute(model, c);
        break;
      case "/table":
        Standard.detailTable(model, c);
        break;
      case "/table/row":
        Standard.detailTableRow(model, c);
        break;
      case "/table/cell":
        Standard.detailTableCell(model, c);
        break;
      case "/entry":
        Standard.detailEntry(model, c);
        break;
      case "/chip":
        Standard.detailChip(model, c);
        break;
      case "/toggle":
        Standard.detailToggle(model, c);
        break;
      case "/text":
        Standard.detailText(model, c);
        break;
      case "/button":
        Standard.detailButton(model, c);
        break;
      case "/link":
        Standard.detailLink(model, c);
        break;
      case "/field":
        Standard.detailField(model, c);
        break;
      case "/tab":
        Standard.detailTab(model, c);
        break;
    }
  }
}
