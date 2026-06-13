function outline() {}

function detail() {}

const HTML = {
  outline: (message, model, resultId) => {
    const element = model.getElement("outline", "/card");

    element.textContent = message[0].event;
  },
  detail: (message, model, resultId) => {
    const element = model.getElement("detail", "outline");
    element.textContent = message[0].event;
  },
  transition: () => {},
  load: (message, model, resultId) => {
    const navigation = model.getElement("/navigation", "/app");
    STYLE.add(navigation, STYLE.element);
    navigation.textContent = "NAVIGATION";

    const card = model.getElement("/card", "/app");
    STYLE.add(card, STYLE.element);
    model.getElement("outline", "/card");

    const control = model.getElement("control", "/app");
    STYLE.add(control, STYLE.element);
    control.textContent = "CONTROL";

    const head = model.get("/head", "/navigation/stack");
    const cardTemplate = model.get(head.template, "/html/template/card");
    cardTemplate.outline(cardTemplate, model, head);
  },
};

const STYLE = {
  add: (element, style) => {
    Object.assign(element.style, style);
  },
  element: {
    border: "1px solid black",
  },
};
