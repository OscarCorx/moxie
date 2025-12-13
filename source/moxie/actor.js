class Actor {
  constructor(writer) {
    this.writer = writer;
  }

  enact(m) {
    const metadata = m[0];
    const contents = [];
    for (const c of m.slice(1)) {
      const feature = `${metadata.verb}${c.source}`
      const command = this.COMMANDS[feature];
      if (!command) {
        console.log("MISSING COMMAND", feature);
        continue;
      }
      command(c, this.writer);
    }
    this.writer.emit(
      "/event",
      metadata.verb,
      metadata.entity_id,
      metadata,
      contents,
    );
  }

  COMMANDS = {
    "/virgil/load/subscription": (c) => {
      w.setData(c);
      w.setSubscription(c);
    },
    "/virgil/load/content": (_) => {
      for (const c of CONTENTS) {
        w.setData(c);
        for (const key of Object.keys(c)) {
          if (!key.endsWith("_id")) continue;
          if (!w.data[c.key]) w.data[c.key] = {};
          if (!w.data[c.key][c.source]) w.data[c.key][c.source] = [];
          w.data[c.key][c.source].push(c.id);
        }
      }
    },
    "/misenplace/outline/app": (c) => {

    },
    "/misenplace/outline/hud": (c) => {

    },
    "/misenplace/outline/panel": (c) => {

    },
    "/misenplace/outline/screen": (c) => {

    },
    "/misenplace/outline/component": (c) => {

    },
    "/misenplace/outline/text_entry": (c) => {

    },
    "/misenplace/outline/markdown_entry": (c) => {

    },
  };
}
