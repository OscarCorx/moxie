const HTML = {
  outline: (message, model, resultId) => {
    const element = model.getElement("outline", "/app");
    element.textContent = message[0].event;
  },
  detail: (message, model, resultId) => {
    const element = model.getElement("detail", "outline");
    element.textContent = message[0].event;
  },
  transition: () => {},
};
