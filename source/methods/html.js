function outline() {}

function detail() {}

const HTML = {
  outline: (message, model, resultId) => {},
  detail: (message, model, resultId) => {},
  transition: () => {},
  load: (message, model, resultId) => {
    const navigation = model.getElement("/navigation", "/app");
    STYLE.add(navigation, STYLE.element);
    navigation.textContent = "NAVIGATION";

    const card = model.getElement("/card", "/app");
    STYLE.add(card, STYLE.element);
    while (card.firstChild) {
      card.firstChild.remove();
    }
    const control = model.getElement("control", "/app");
    STYLE.add(control, STYLE.element);
    control.textContent = "CONTROL";

    const head = model.getComponent("/head", "/navigation/stack");
    const template = model.getComponent(head.template, "/html/template/card");

    template.render(template, head, model);
  },
};

const STYLE = {
  add: (element, style) => {
    Object.assign(element.style, style);
  },
  element: {
    border: "1px solid black",
  },
  card: {
    display: "flex",
    "flex-direction": "row",
  },
  panel: {
    flex: "auto",
    width: "45vw",
  },
  entry_column: {
    display: "flex",
    "flex-direction": "column",
  },
  entry: {
    display: "flex",
    "flex-direction": "row",
    flex: "auto",
  },
  entry_part: {
    flex: "auto",
  },
};
