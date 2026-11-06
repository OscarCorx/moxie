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

  static element(m, c) {
    switch (c.source) {
      case "/layout":
        this.layout(m, c);
        break;
      case "/panel":
        this.panel(m, c);
        break;
      case "/entry":
        this.infoEntry(m, c);
        break;
      case "/chip":
        this.chip(m, c);
        break;
      case "/button":
        this.button(m, c);
        break;
      case "/link":
        this.link(m, c);
        break;
      case "/toggle":
        this.link(m, c);
        break;
      case "/text":
        this.text(m, c);
        break;
      case "/textarea":
        this.text(m, c);
        break;
    }
  }

  static layout(m, c) {

  }

  static panel(m, c) {

  }

  static pane(m, c) {

  }

  static entry(m, c) {

  }
  /* ATOMS */
  static chip(m, c) {

  }

  static button(m, c) {

  }

  static link(m, c) {

  }

  static input(m, c) {

  }
}
