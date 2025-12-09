class Load extends Actor {
  event = "/loaded";

  COMMANDS = {
    "default": (c) => {
      this.registry.loadData(c);
      for (const indexId of this.registry.getIndex("source", "/index")) {
        const content = this.registry.getData(indexId);
        this.registry.setIndex(content.key, c, content.index_source);
      }
      return {};
    },
    "/index": (c) => {
      this.registry.loadData(c);
      this.registry.setIndex("source", c);
      return {};
    },
    "/subscription": (c) => {
      this.registry.loadData(c);
      this.registry.setSubscription(c);
      return {};
    },
    "/initialize": (c) => {
      this.registry.initialize(c);
    }
  };
}
