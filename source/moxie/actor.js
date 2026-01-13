class Actor {
  constructor(process) {
    this.process = process;
  }

  transition(m) {
    const metadata = m[0];
    const transition =
      TRANSITIONS[`${metadata.module}${metadata.protocol}${metadata.state}`] ||
      TRANSITIONS[`${metadata.module}${metadata.protocol}/default`];
    const contents = transition(m, this.process) || [];
    setState(metadata);

    this.process.emit(
      "/query",
      metadata,
      contents,
    );
  }

  event(m) {
    const metadata = m[0];
    const event =
      EVENTS[`${metadata.module}${metadata.protocol}${metadata.state}`] ||
      EVENTS[`${metadata.module}${metadata.protocol}/default`];
    const contents = event(m, this.process) || [];
    setState(metadata);

    this.process.emit(
      "/query",
      metadata,
      contents,
    );
  }

  query(m) {
    const contents = [];
    for (const c of m.slice(1)) {
      const query =
        QUERIES[`${c.module}${c.system}${c.source}`] ||
        QUERIES[`${c.module}${c.system}/default`];
      const result = query(c, this.process) || [];
      contents.push(...result);
    }
    this.process.emit(
      "/command",
      m[0],
      contents,
    );
  }

  command(m) {
    const contents = [];
    for (const c of m.slice(1)) {
      const command =
        COMMANDS[`${c.module}${c.system}${c.source}`] ||
        COMMANDS[`${c.module}${c.system}/default`];
      command(c, this.process);
    }
    this.process.emit(
      "/event",
      m[0],
      contents,
    );
  }

  reaction(m) {
    const metadata = m[0];
    const reaction =
      REACTIONS[`${metadata.module}${metadata.protocol}${metadata.state}`] ||
      REACTIONS[`${metadata.module}${metadata.protocol}/default`];
    const contents = reaction(metadata, this.process) || [];

    this.process.emit(
      "/query",
      metadata,
      contents,
    );
  }
}
