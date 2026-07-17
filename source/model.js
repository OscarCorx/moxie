class Model {
  ID() {
    return this._currentId++;
  }

  emit(header) {
    document.dispatchEvent(new CustomEvent("/target", { detail: header }));
  }
  /* MODEL */
  accessComponentIds(entity, source) {
    if (!this._model[entity]) return [];
    return this._model[entity][source] || [];
  }

  getComponent(id) {
    return this._model[id];
  }

  accessComponent(entity, source, index) {
    const componentIds = this._model[entity][source] || [];
    return this._model[componentIds[index || 0]];
  }

  setComponent(c) {
    if (!c.id) c.id = this.ID();
    this._model[c.id] = c;
    const schema = this._model[c.source];
    for (const fieldId of schema["/schema/field"]) {
      const f = this.getComponent(fieldId);
      if (!c[f.key]) continue;
      switch (f.kind) {
        case "/entity":
          this.setReference(f.key, c);
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
  nextId(entity, source, id) {
    const components = this._model[entity][source];
    let i = components.indexOf(id);
    i++;
    i %= components.length;
    return components[i];
  }

  previousId(entity, source, id) {
    const components = this._model[entity][source];
    let i = components.indexOf(id);
    i = i + components.length - 1;
    i %= components.length;
    return components[i];
  }
  /* REFERENCE */
  setReference(k, c) {
    const e = c[k];
    /* ENSURE ENTITY */
    if (!this._model[e]) this._model[e] = {};
    /* ENSURE PROPERTY */
    if (!this._model[e][c.source]) {
      this._model[e][`${c.source}/reference`] = k;
      this._model[e][c.source] = [];
    }
    if (this._model[e][c.source].indexOf(c.id) !== -1) return;
    this._model[e][c.source].push(c.id);
  }

  removeReference(e, source, id) {
    if (!this._model[e]) return;
    if (!this._model[e][source]) return;
    const index = this._model[e][source].indexOf(id);
    if (this._model[e][source].indexOf(id) === -1) return;
    this._model[e][source].splice(index);
  }

  constructor() {
    this._currentId = 0;
    this._model = {
      "/origin": {
        id: this.ID(),
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
