function outline() {}

function detail() {}

const HTML = {
  outline: (message, model, resultId) => {
    const head = model.getComponent("/head", "/navigation/stack");
    const cardTemplate = model.getComponent(
      head.template,
      "/html/template/card",
    );
    cardTemplate.outline(cardTemplate, model, head);
    cardTemplate.detail(cardTemplate, model, head);
  },
  detail: (message, model, resultId) => {
    const head = model.getComponent("/head", "/navigation/stack");
    const cardTemplate = model.getComponent(
      head.template,
      "/html/template/card",
    );
    cardTemplate.detail(cardTemplate, model, head);
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

    const head = model.getComponent("/head", "/navigation/stack");
    const cardTemplate = model.getComponent(
      head.template,
      "/html/template/card",
    );
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
