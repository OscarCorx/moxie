const ENDPOINT = "/target";

const SCHEMA_KEY = "/schema";
const INDEX_KEY = "/index";
const EVENT_KEY = "/event";
const MAP_KEY = "/map";

const PROCEDURE_SUBSCRIPTION_ID = "/procedure_subscriptions";

class Model {
  constructor() {
    this.currentId = 0;
    this._model = {};
    this.d = document;
    this.w = window;
  }

  setComponent(c) {
    if (!c.id) {
      c.id = this.getId();
    }
    for (const k of Object.keys(c)) {
      /* Bidirectional Relation */
      if (k.endsWith("_id")) {
        const key = `${c.source}/${k}`;
        if (!this.procedure[key]) {
          this._model[key] = {};
        }
        if (this._model[key][c.id]) {
          Object.update(this._model[key][c.id], c);
        } else {
          this._model[key][c.id] = c;
        }
      }
      /* Unidirectional Relation */
      if (k.endsWith("_key")) {
      }
    }
    const schema = this._model[c.source];
    if (!schema) return c.id;
    /* Entity Level Lookup */
    const indices = this._model[INDEX_KEY] || [];
    for (const index of indices) {
    }
    /* Component Level Lookup */
    const maps = this._model[MAP_KEY] || [];
    for (const map of maps) {
    }
    return c.id;
  }

  getId() {
    return this.currentId++;
  }
}

class Process {
  emit(kind, m, contents) {
    const metadata = {
      ...m,
      id: this.model.getId(),
      prior_id: m.id,
      kind,
      timestamp: Date.now(),
    };
    const event = [metadata, ...contents];
    this.d.dispatchEvent(new CustomEvent(ENDPOINT, { detail: event }));
  }

  start() {
    this.d.addEventListener(ENDPOINT, (event) => {
      setTimeout(() => {
        this.processEvent(event);
      }, event[0].timeout || 0);
    });
  }

  /* PROCESS ROUTINE */
  processEvent(e) {
    const resultIds = [];
    const procedureIds = this.queryProcedures(e[0].kind);

    for (const procedureId of procedureIds) {
      const resultId = this.model.getId();
      resultIds.push(resultId);

      const routines = this.queryRoutines(procedureId, e[0].kind);
      if (!routines.action || !routines.reaction) continue;

      routines.action(procedureId, this.model, e, resultId);
      routines.reaction(procedureId, this.model, resultId);
    }
    for (const resultId of resultIds) {
      for (const event of this.queryResults(resultId)) {
        this.emit(event[0].kind, e[0], e.slice(1));
      }
    }
  }

  queryProcedures(eventKind) {}

  queryRoutines(procedureId, eventKind) {}

  queryResults(resultId) {}

  constructor() {
    this.model = new Model();
  }
}

const PROCESS = new Process();
PROCESS.start();

function load(source) {
  const script = document.createElement("script");
  script.setAttribute("src", source);
  script.onload = () => {
    console.log(`[${source}] LOADED.`);
  };
  script.onerror = () => {
    console.log(`[${source}] FAILED.`);
  };
  document.head.appendChild(script);
}

window.addEventListener("load", () => {
  console.log("WINDOW LOAD");
  // load("./moxie/moxie.js");
});

// PROCESS.emit("kind", { foo: "bar" }, [1, 2, 3]);
