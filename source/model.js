class Model {
  ID() {
    return this._currentId++;
  }

  emit(header) {
    document.dispatchEvent(new CustomEvent("/target", { detail: header }));
  }

  setMessage(resultId, action, contents) {
    this.setComponent({
      source: "/message/header",
      action: action,
      result: resultId,
    });
    /* SET CONTENTS TO RESULT*/
  }
  /* MODEL */
  accessComponentIds(entity, source) {
    if (!this._entities[entity]) return [];
    return this._entities[entity][source] || [];
  }

  getComponent(id) {
    return this._components[id];
  }

  getEntity(id) {
    if (!this._entities[id]) this._entities[id] = {
      id: id,
    };
    return this._entities[id];
  }

  accessComponent(entity, source, index) {
    const componentIds = this._entities[entity][source] || [];
    return this._components[componentIds[index || 0]];
  }

  setComponent(c) {
    if (!c.id) c.id = this.ID();
    this._components[c.id] = c;
    const schema = this._entities[c.source];
    if (!schema) {
      console.log("MISSING SCHEMA", c.source);
      return;
    }
    if (c.source == "/procedure/subscription") {
      // console.log(c.source);
    }
    for (const fieldId of schema["/schema/field"]) {
      const f = this.getComponent(fieldId);
      if (!c[f.key]) continue;
      switch (f.kind) {
        case "/entity":
          this.setReference(c[f.key], c.source, c.id);
          break;
        default:
          break;
      }
    }
    return c;
  }

  deleteComponent(id) {
    const c = this._components[id];
    const schema = this._entities[c.source];
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
    const components = this._entities[entity][source];
    let i = components.indexOf(id);
    i++;
    i %= components.length;
    return components[i];
  }

  previousId(entity, source, id) {
    const components = this._entities[entity][source];
    let i = components.indexOf(id);
    i = i + components.length - 1;
    i %= components.length;
    return components[i];
  }

  setReference(e, k, c, replace) {
    /* ENSURE ENTITY */
    if (!this._entities[e]) this._entities[e] = {};
    /* ENSURE PROPERTY */
    if (!this._entities[e][k]) {
      this._entities[e][k] = [];
    }
    if (replace) {
      this._entities[e][k] = [c];
      return;
    }
    if (this._entities[e][k].indexOf(c) !== -1) return;
    this._entities[e][k].push(c);
  }

  removeReference(e, source, id) {
    if (!this._entities[e]) return;
    if (!this._entities[e][source]) return;
    const index = this._entities[e][source].indexOf(id);
    if (this._entities[e][source].indexOf(id) === -1) return;
    this._entities[e][source].splice(index);
  }

  constructor() {
    /* COMPUTE CURRENT WITH TIMESTAMP */
    this._currentId = 0;
    /* CREATE _components and _entities */
    this._entities = {
      "/schema/field": {
        "/schema/field": ["/origin"],
      },
    };
    this._components = {
      "/origin": {
        id: this.ID(),
        parent: "/schema/field",
        source: "/schema/field",
        kind: "/entity",
        key: "parent",
        access: "/collection",
      },
    };
  }
}
