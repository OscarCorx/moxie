class Actor {
  event = "/event";

  COMMANDS = {};

  constructor(registry, publisher) {
    this.registry = registry;
    this.publisher = publisher;
  }

  command(m) {
    const metadata = m[0];
    for (const c of m.slice(1)) {
      const action = this.COMMANDS[c.source] || this.COMMANDS.default;
      if (!action) {
        console.log("MISSING", this.event, c.source);
        continue;
      }
      action(c);
    }
    this.publisher.publish(this.event, metadata.entity_id, metadata.id, metadata.init_id);
  }
}
