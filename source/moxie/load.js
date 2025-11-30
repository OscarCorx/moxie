class Load extends Actor {
  action = "/load";
  reaction = "/loaded";

  COMMANDS = {
    "default": (c) => {
      this.registry.loadData(c);
      for (const indexContent of this.getIndex({
        field: "/source",
      })) {
        this.registry.setIndex(indexContent, c);
      }
      return {};
    },
    "/index": (c) => {
      this.registry.setData(c);
      this.registry.setIndex({
        field: "/source",
      }, c);
      return {};
    },
    "/subscription": (c) => {
      this.registry.setData(c);
      this.registry.setSubscription(c);
      return {};
    },
  };
}
