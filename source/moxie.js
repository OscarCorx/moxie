const ENDPOINT = "/target";
const PROCEDURE = "/procedure/subscription";
const METHOD = "/method/definition";

class Model {
  constructor() {
    this._currentId = 0;
    this._model = {
      "/schema/field": {
        "/schema/field": [
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/entity",
            key: "parent",
            collection: true,
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/string",
            key: "kind",
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/string",
            key: "key",
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/boolean",
            key: "collection",
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/sting",
            key: "name",
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/sting",
            key: "icon",
          },
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/sting",
            key: "description",
          },
        ],
      },
    };
    this._document = document;
    this._window = window;
  }

  set(c) {
    if (!c.id) c.id = this.getId();
    const schema = this._model[c.source];
    for (const f of schema["/schema/field"]) {
      if (!c[f.key]) continue;
      switch (f.kind) {
        case "/entity":
          if (!this._model[c[f.key]]) this._model[c[f.key]] = { id: c[f.key] };
          if (f.collection) {
            if (!this._model[c[f.key]][c.source])
              this._model[c[f.key]][c.source] = [];
            this._model[c[f.key]][c.source].push(c);
          } else {
            this._model[c[f.key]][c.source] = c;
          }
          break;
      }
    }
  }

  getComponent(entityId, property) {
    return this._model[entityId][property];
  }

  getEntity(entityId) {
    return this._model[entityId];
  }

  getElement(id, parentId, tagName) {
    let element = this._document.getElementById(id);
    if (!element) {
      const parent = this._document.getElementById(parentId);
      element = this._document.createElement("div");
      element.setAttribute("id", id);
      parent.appendChild(element);
    }
    return element;
  }

  getId() {
    return this._currentId++;
  }
}

class Process {
  start() {
    this.model._document.addEventListener(ENDPOINT, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail[0].timeout || 0);
    });
    this.model._window.addEventListener("load", () => {
      this.emit([
        {
          id: "/load",
          event: "/moxie/load",
        },
      ]);
    });
  }
  emit(message) {
    document.dispatchEvent(new CustomEvent(ENDPOINT, { detail: message }));
  }
  /* PROCESS ROUTINE */
  processMessage(message) {
    if (!this.model._model[message[0].event]) return;

    const resultIds = [];
    for (const procedure of this.model._model[message[0].event][PROCEDURE]) {
      const resultId = this.model.getId();
      resultIds.push(resultId);
      if (!procedure.action || !procedure.reaction) continue;

      procedure.action(message, this.model, resultId);
      procedure.reaction(message, this.model, resultId);
    }
    for (const resultId of resultIds) {
      if (!this.model._model[resultId]) continue;
      for (const m of this.model.getComponent(resultId, "/message/header")) {
        m.prior_id = message[0].id;
        m.timestamp = Date.now();
        this.emit([m]);
      }
    }
  }

  constructor() {
    this.model = new Model();
  }
}

const PROCESS = new Process();
PROCESS.start();

window.addEventListener("load", () => {
  PROCESS.emit([
    {
      id: "/load",
      event: "/moxie/load",
    },
  ]);
});

// PROCESS.emit("kind", { foo: "bar" }, [1, 2, 3]);
