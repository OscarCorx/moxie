class Publisher {
  constructor(writer) {
    this.writer = writer;
  }

  publish(m) {
    const metadata = m[0];
    const subscriptions = this.writer.getSubscriptions(
      metadata.verb,
      metadata.entity_id,
    );
    for (const [command, commandId] of subscriptions) {
      const contents = this.publishContent({
        event: metadata.verb,
        event_id: metadata.entity_id,
        command,
        command_id: commandId,
      });
      this.writer.emit("/command", command, commandId, metadata, contents);
    }
  }

  publishContent(c) {
    const entity = this.writer.data[c.command_id];
    const feature = `${entity.application}${c.verb}${entity.source}`;
    let query = this.QUERIES[feature];
    if (!query) {
      console.log("MISSING QUERY", feature);
      return [];
    }
    return query(c) || [];
  }

  QUERIES = {
    "/virgil/load/app": (_) => {
      return [
        ...MISENPLACE_SCHEMA,
        {
          application: "/virgil",
          verb: "/load",
          source: "/content",
        },
      ];
    },
    "/misenplace/outline/app": (c) => {
      const app = this.writer.data["/app"];

      const contents = [{}];
      contents.push(
        ...this.publishContent({ ...c, command_id: app.navigation_id }),
      );
      contents.push(
        ...this.publishContent({ ...c, command_id: app.screen_id }),
      );
      contents.push(
        ...this.publishContent({ ...c, command_id: app.control_id }),
      );
      return contents;
    },
    "/misenplace/outline/panel": (c) => {
      const app = this.writer.data["/app"];

      const contents = [{}];
      contents.push(
        ...this.publishContent({ ...c, command_id: app.navigation_id }),
      );
      contents.push(
        ...this.publishContent({ ...c, command_id: app.screen_id }),
      );
      contents.push(
        ...this.publishContent({ ...c, command_id: app.control_id }),
      );
      return contents;
    },
    "/misenplace/outline/screen": (c) => {
      const screen = this.writer.data[c.command_id];

      const contents = [{}];
      for (const id of screen.components) {
        contents.push(...this.publishContent({ ...c, command_id: id }));
      }
      return contents;
    },
    "/misenplace/outline/component": (c) => {
      const component = this.writer.data[c.command_id];

      const contents = [{}];
      for (const id of component.entries) {
        contents.push(this.publishContent({ ...c, command_id: id }));
      }
      return contents;
    },
    "/misenplace/outline/text_entry": (c) => {
      const entry = this.writer.data[c.command_id];
      return [
        {
          ...entry,
        },
      ];
    },
  };
}
