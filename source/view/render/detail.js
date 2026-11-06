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
      case "/layout":
        this.layout(model, c);
        break;
      case "/panel":
        this.panel(model, c);
        break;
      case "/table":
        this.panel(model, c);
        break;
      case "/info/pane":
        this.infoPane(model, c);
        break;
      case "/info/entry":
        this.infoEntry(model, c);
        break;
      case "/text/entry":
        this.textEntry(model, c);
        break;
      case "/chip":
        this.chip(model, c);
        break;
      case "/button":
        this.button(model, c);
        break;
      case "/link":
        this.link(model, c);
        break;
    }
  }
}
