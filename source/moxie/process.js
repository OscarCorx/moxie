class Process {
  t = Date.now();
  data = {};
  change = {};

  emit(reaction, m, contents) {
    const metadata = Object.assign(
      {},
      {
        ...m,
        id: getId(),
        prior_id: m.id,
        reaction,
        timestamp: Date.now(),
      },
    );
    const message = [metadata, ...contents];
    console.log(reaction, message);
    document.dispatchEvent(new CustomEvent(reaction, { detail: message }));
  }

  on(reaction, action) {
    document.addEventListener(reaction, (event) => {
      setTimeout(() => {
        action(event.detail);
      }, event.detail.timeout);
    });
  }

  setData(c) {
    this.data[c.id] = { ...c };
  }

  getData(id) {
    return this.data[id] || {};
  }

  changeData(id, key, value) {
    if (!this.data[id]) {
      this.data[id] = { [key]: value };
    } else {
      this.data[id][key] = value;
    }
  }
}
