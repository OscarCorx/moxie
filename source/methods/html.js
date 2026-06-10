const HTML = {
  outline: (message, model, resultId) => {
    const element = model.getElement("outline", "/app");
    STYLE.add(element, C.element);

    element.textContent = message[0].event;
  },
  detail: (message, model, resultId) => {
    const element = model.getElement("detail", "outline");
    element.textContent = message[0].event;
  },
  transition: () => {},
  load: (message, model, resultId) => {
    const element = model.getElement("outline", "/app");
    STYLE.add(element, C.element);

    element.textContent = message[0].event;
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
