class Process {
  start() {
    document.addEventListener(this.endpoint, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail.timeout || 0);
    });
    window.addEventListener("load", () => {
      this.model.emit({ event: "/event/load", entity: "/current" });
    });
  }

  /* PROCESS ROUTINE */
  processMessage(header) {
    const state_component = {...this.model.accessComponent(header.entity, "/state")};

    const resultIds = [];
    const subscriptionIds = this.model.accessComponentIds(
      header.event,
      "/procedure/subscription",
    );
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.model.getComponent(subscriptionId);
      if (subscription.state) {
        if (state_component && subscription.state && subscription.state !== state_component[subscription.procedure]) continue;
      }
      if (!subscription.routine) continue;
      console.log(subscription.event, subscription.procedure, subscription.state, subscription.action);
      const resultId = this.model.ID();
      resultIds.push(resultId);
      subscription.routine(this.model, header, resultId);
    }

    for (const id of resultIds) {
      const headerIds = this.model.accessComponentIds(id, "/message/header");
      for (const headerId of headerIds) {
        const h = this.model.getComponent(headerId);
        if (!h) continue;
        h.prior_id = header.id;
        h.entity = header.id;
        h.timestamp = Date.now();
        this.model.emit(h);
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
