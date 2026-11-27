class Process {
  start(thread) {
    document.addEventListener(this.endpoint, (event) => {
      setTimeout(() => {
        this.processMessage(event.detail);
      }, event.detail.timeout || 0);
    });
    window.addEventListener("load", () => {
      this.model.setComponent({
        source: "/procedure/run",
        procedure: "/user_interface",
        run: "/initial_load",
      });
      this.model.emit({ event: "/event/initial/load", run: "/initial_load" });
    });
    requestAnimationFrame(() => { this.animate(); });
  }

  /* PROCESS ROUTINE */
  processMessage(header) {
    const resultIds = [];
    const procedureRun = this.model.accessComponent(header.run, "/procedure/run");
    const subscriptionIds = this.model.accessComponentIds(header.event, "/procedure/subscription");
    // console.log("EVENT", header.run, header.event, subscriptionIds.length);
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.model.getComponent(subscriptionId);
      if (!procedureRun) {
        console.log("HERE WE GO")
      }
      if (subscription.procedure !== procedureRun.procedure) continue;

      const resultId = this.model.ID();
      console.log(subscription.message);
      subscription.routine(this.model, header, resultId);
      const headerIds = this.model.accessComponentIds(resultId, "/message/header");
      for (const headerId of headerIds) {
        const h = this.model.getComponent(headerId);
        if (!h) continue;
        h.run = h.run || header.run;
        h.result = resultId;
        h.timestamp = Date.now();
        this.model.emit(h);
      }
    }
  }

  animate() {
    const events = {};

    const timestamp = Date.now();
    for (const id of this.model.accessComponentIds("/animate", "/animation")) {
      const c = this.model.getComponent(id);
      const a = this.model.accessComponent(c.procedure, "/procedure/animation");
      if (!a.routine) return;
      const event = a.routine(this.model, c, timestamp);
      if (event) events[event] = c.run;
      if (c.complete) this.model.stopAnimation(c);
    }
    for (const event of Object.keys(events)) {
      this.model.emit({
        source: "/message/header",
        event: event,
        run: events[event],
        timestamp: Date.now(),
      })
    }
    requestAnimationFrame(() => { this.animate(); });
  }

  constructor(endpoint) {
    this.model = new Model(endpoint);
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
PROCESS.start("/current");
