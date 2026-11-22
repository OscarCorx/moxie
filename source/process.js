class Process {
  start(thread) {
    document.addEventListener(this._endpoint, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail.timeout || 0);
    });
    window.addEventListener("load", () => {
      this.model.emit({ event: "/event/initial/load", thread: thread, entity: "/person/0" });
    });
  }

  /* PROCESS ROUTINE */
  processMessage(header) {
    const resultIds = [];
    const subscriptionIds = this.model.accessComponentIds(
      header.event,
      "/procedure/subscription",
    );
    console.log("PROCESS MESSAGE", header.event, subscriptionIds.length);
    const subscriptions = [];
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.model.getComponent(subscriptionId);
      if (subscription.state) {
        const state = this.model.accessComponent(header.thread, subscription.procedure);
        if (state && subscription.state && subscription.state !== state.state) continue;
      }
      if (!subscription.routine) continue;
      subscriptions.push(subscription);
    }
    for (const subscription of subscriptions) {
      const resultId = this.model.ID();
      resultIds.push(resultId);
      console.log("SUBSCRIPTION", subscription.event, subscription.message, subscription.procedure, subscription.state);
      subscription.routine(this.model, header, resultId);
    }

    for (const id of resultIds) {
      const headerIds = this.model.accessComponentIds(id, "/message/header");
      for (const headerId of headerIds) {
        const h = this.model.getComponent(headerId);
        if (!h) continue;
        h.prior_id = header.id;
        h.thread = h.thread || header.id;
        h.timestamp = Date.now();
        this.model.emit(h);
      }
    }
  }
  constructor(endpoint) {
    this.model = new Model(endpoint);
    this._endpoint = endpoint;
  }
}

const PROCESS = new Process("/target");

COMPONENTS.forEach((i) => {
  PROCESS.model.setComponent(i);
});
ASSETS.forEach((i) => {
  PROCESS.model.setComponent(i);
});
PROCESS.start("/current");
