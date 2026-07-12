class Process {
  start() {
    document.addEventListener(this.endpoint, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail.timeout || 0);
    });
    window.addEventListener("load", () => {
      this.model.emit({ event: "/event/load" });
      this.model.emit({ event: "/message/flip" });
    });
  }

  /* PROCESS ROUTINE */
  processMessage(h) {
    const resultIds = [];
    console.log(h);
    const subscriptionIds = this.model.accessComponentIds(
      h.event,
      "/procedure/subscription",
    );
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.model.getComponent(subscriptionId);
      if (subscription.target && subscription.target !== subscription.procedure) continue;
      const state = this.model.accessComponent(subscription.procedure, "/procedure/state");
      if (subscription.state && subscription.state !== state.state) continue;
      if (!subscription.routine || !subscription.transition) continue;

      const resultId = this.model.ID();
      resultIds.push(resultId);
      subscription.routine(this.model, [h], resultId);
      subscription.transition(this.model, [h], resultId);
    }

    for (const id of resultIds) {
      const headerIds = this.model.accessComponentIds(id, "/message/header");
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
