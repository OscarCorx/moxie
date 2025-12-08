class Load extends Actor {
  event = "/loaded";

  COMMANDS = {
    "default": (c) => {
      this.registry.loadData(c);
      for (const indexId of this.registry.getIndex({
        key: "source",
      }, "/index")) {
        const indexContent = this.registry.getData(indexId);
        this.registry.setIndex(indexContent, c);
      }
      return {};
    },
    "/index": (c) => {
      this.registry.loadData(c);
      this.registry.setIndex({
        key: "source",
      }, c);
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
