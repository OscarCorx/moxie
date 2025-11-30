class Actor {
  action = "/action";
  reaction = "/reaction";

  COMMANDS = {};

  constructor(registry, publisher) {
    this.registry = registry;
    this.publisher = publisher;
  }

  command(m) {
    const metadata = m[0];
    const contents = [];
    for (const c of m.slice(1)) {
      const action = this.COMMANDS[c.source] || this.COMMANDS.default;
      if (!action) {
        console.log("MISSING", this.action, c.source);
        continue;
      }
      const content = action(c);
      if (!content) continue;
      content.reaction_id = c.id;
      contents.push(content);
    }
    this.publisher.publish(this.reaction, contents, metadata.id, metadata.init_id);
  }
}
