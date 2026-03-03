class Actor {
  constructor(process) {
    this.process = process;
  }

  event(m) {
    const event = ACTIONS[`/event${metadata.module}${metadata.procedure_id}${metadata.state}`];
    const [metadata, contents] = event(m, this.process) || [];

    this.process.emit(
      "/query",
      metadata,
      contents,
    );
  }

  query(m) {
    const contents = [];
    for (const c of m.slice(1)) {
      const query = ACTIONS[`/query${c.module}${c.system}${c.source}${c.state || ''}`];
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
    for (const c of m.slice(1)) {
      const command = ACTIONS[`/command${c.module}${c.system}${c.source}${c.state || ''}`];
      command(c, this.process);
    }
    this.process.emit(
      "/reaction",
      m[0],
      [],
    );
  }

  reaction(m) {
    const metadata = m[0];
    const reaction = ACTIONS[`/reaction${metadata.module}${metadata.procedure_id}${metadata.state}`];
    const contents = reaction(metadata, this.process) || [];

    this.process.emit(
      "/transition",
      metadata,
      contents,
    );
  }

  transition(m) {
    const transition = ACTIONS[`/transition${metadata.module}${metadata.procedure_id}${metadata.state}`];
    const [metadata, contents] = transition(m, this.process) || [];

    this.process.emit(
      "/event",
      metadata,
      contents,
    );
  }
}
