class Model {
  getId() {
    return this._currentId++;
  }

  emit(header) {
    document.dispatchEvent(new CustomEvent("/target", { detail: header }));
  }
  /* MODEL */
  getComponentIds(entity, source) {
    if (!this._model[entity]) return [];
    return this._model[entity][source] || [];
  }

  getComponent(id) {
    return this._model[id];
  }

  accessComponent(entity, source, index) {
    const componentIds = this._model[entity][source];
    return this._model[componentIds[index]];
  }

  setComponent(c) {
    if (!c.id) c.id = this.getId();
    this._model[c.id] = c;
    const schema = this._model[c.source];
    for (const fieldId of schema["/schema/field"]) {
      const f = this.getComponent(fieldId);
      if (!c[f.key]) continue;
      switch (f.kind) {
        case "/entity":
          this.setReference(c[f.key], c);
          break;
        default:
          break;
      }
    }
  }

  deleteComponent(id) {
    const c = this._model[id];
    const schema = this._model[c.source];
    for (const f of schema["/schema/field"]) {
      if (!c[f.key]) return;
      switch (f.kind) {
        case "/entity":
          this.removeReference(c[f.key], c.source, c.id);
          break;
        default:
          break;
      }
    }
  }
  /* INDEX */
  nextIndex(entity, source, index) {
    const components = this._model[entity][source];
    index++;
    index %= components.length;
    return index;
  }

  previousIndex(entity, source, index) {
    const components = this._model[entity][source];
    index = index - 1 + components.length;
    index %= components.length;
    return index;
  }
  /* REFERENCE */
  setReference(e, c) {
    if (!this._model[e]) this._model[e] = {};
    if (!this._model[e][c.source]) this._model[e][c.source] = [];
    if (this._model[e][c.source].indexOf(c.id) !== -1) return;
    this._model[e][c.source].push(c.id);
  }

  removeReference(e, source, id) {
    if (!this._model[e]) this._model[e] = {};
    if (!this._model[e][source]) this._model[e][source] = [];
    const index = this._model[e][source].indexOf(id);
    if (this._model[e][source].indexOf(id) === -1) return;
    this._model[e][source].splice(index);
  }
  /* DOCUMENT */
  getElement(id, parentId, tagName, clear) {
    if (clear) element.remove();
    let element = document.getElementById(id);
    if (!element) {
      const parent = document.getElementById(parentId);
      element = document.createElement(tagName || "div");
      element.setAttribute("id", id);
      parent.appendChild(element);
    }
    return element;
  }

  constructor() {
    this._currentId = 0;
    this._model = {
      "/origin": {
        id: this.getId(),
        parent: "/schema/field",
        source: "/schema/field",
        kind: "/entity",
        key: "parent",
        access: "/collection",
      },
      "/schema/field": {
        "/schema/field": ["/origin"],
      },
    };
  }
}
