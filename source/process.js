class Process {
  start() {
    document.addEventListener(this.endpoint, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail.timeout || 0);
    });
    window.addEventListener("load", () => {
      this.model.emit({ event: "/event/load" });
    });
  }

  /* PROCESS ROUTINE */
  processMessage(h) {
    const resultIds = [];
    // console.log(h);
    const procedureIds = this.model.getComponentIds(
      h.event,
      "/procedure/subscription",
    );
    for (const procedureId of procedureIds) {
      const procedure = this.model.getComponent(procedureId);
      const resultId = this.model.getId();
      resultIds.push(resultId);
      if (!procedure.action || !procedure.reaction) continue;

      procedure.action(this.model, [h], resultId);
      procedure.reaction(this.model, [h], resultId);
    }

    for (const id of resultIds) {
      const headerIds = this.model.getComponentIds(id, "/message/header");
      for (const headerId of headerIds) {
        const header = this.model.getComponent(headerId);
        if (!header) continue;
        header.prior_id = h.id;
        header.timestamp = Date.now();
        this.model.emit(header);
      }
    }
  }

  constructor(endpoint) {
    this.model = new Model();
    this.endpoint = endpoint;
  }
}

const PROCESS = new Process("/target");

COMPONENTS.forEach((i) => {
  PROCESS.model.setComponent(i);
});
ASSETS.forEach((i) => {
  PROCESS.model.setComponent(i);
});
PROCESS.start();
