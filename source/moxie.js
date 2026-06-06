const ENDPOINT = "/target";
const PROCEDURE = "/procedure/subscription";
const METHOD = "/method/definition";

class Model {
  constructor() {
    this._currentId = 0;
    this._model = {
      "/schema/field": {
        "/fields": [
          {
            parent: "/schema/field",
            schema: "/schema/field",
            kind: "/entity",
            key: "parent",
            as: "/fields",
            collection: true,
          },
        ],
      },
    };
    this._document = document;
    this._window = window;
  }

  setComponent(c) {
    if (!c.id) c.id = this.getId();
    const schema = this._model[c.source];
    for (const f of schema["/fields"]) {
      if (!c[f.key]) continue;
      switch (f.kind) {
        case "/function":
          c[f.key] = this._model[c[f.key]][METHOD].code;
          break;
        case "/entity":
          if (!this._model[c[f.key]]) this._model[c[f.key]] = { id: c[f.key] };
          const key = f.as || c.source;
          if (f.collection) {
            if (!this._model[c[f.key]][key]) this._model[c[f.key]][key] = [];
            this._model[c[f.key]][key].push(c);
          } else {
            this._model[c[f.key]][key] = c;
          }
          break;
      }
    }
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
  }
  emit(message) {
    document.dispatchEvent(new CustomEvent(ENDPOINT, { detail: message }));
  }
  /* PROCESS ROUTINE */
  processMessage(message) {
    const resultIds = [];

    if (!this.model._model[message[0].event]) return;
    for (const procedure of this.model._model[message[0].event][PROCEDURE]) {
      const resultId = this.model.getId();
      resultIds.push(resultId);
      if (!procedure.action || !procedure.reaction) continue;

      procedure.action(message, this.model, resultId);
      procedure.reaction(message, this.model, resultId);
    }
    for (const resultId of resultIds) {
      if (!this.model._model[resultId]) continue;
      for (const m of this.model._model[resultId]["/message/header"]) {
        m.prior_id = message[0].id;
        m.timestamp = Date.now();
        this.emit([m]);
      }
    }
  }

  queryResults(resultId) {}

  constructor() {
    this.model = new Model();
  }
}

const PROCESS = new Process();
PROCESS.start();

window.addEventListener("load", () => {
  window.addEventListener("keydown", (event) => {
    PROCESS.emit([
      {
        id: "keydown",
        event: "/event/key_down",
        value: event.key,
      },
    ]);
  });
  window.addEventListener("keyup", (event) => {
    PROCESS.emit([
      {
        id: "keyup",
        event: "/event/key_up",
        value: event.key,
      },
    ]);
  });
});

// PROCESS.emit("kind", { foo: "bar" }, [1, 2, 3]);
