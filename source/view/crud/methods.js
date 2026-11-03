class Crud {
  static update(model, header) {
    const component = model.getComponent(header.component);
    component[header.field] = header.value;
  }
}
