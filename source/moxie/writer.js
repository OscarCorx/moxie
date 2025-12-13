function getId() {
  return Math.floor(Math.random() * 1000000000);
}

class Writer {
  channels = {};
  index = {};
  subscriptions = {};
  data = {};
  delta = {};
  original = {};

  emit(reaction, verb, entityId, m, contents) {
    const metadata = Object.assign({}, {
      id: getId(),
      init_id: m.init_id || m.id || "/unknown",
      prior_id: m.id || "/unknown",
      source: "/metadata",
      reaction,
      verb,
      entity_id: entityId,
      timestamp: Date.now(),
    });
    const message = [metadata, ...contents];
    // console.log("EMIT", message);
    document.dispatchEvent(new CustomEvent(reaction, { detail: message }));
  }

  on(action, command) {
    document.addEventListener(action, (event) => {
      setTimeout(() => {
        console.log("REACTION", `${action}${event.detail[0].verb}`);
        command(event.detail);
      }, event.detail.timeout);
    });
  }

  setData(c) {
    this.data[c.id] = c;
  }

  getData(id) {
    return this.data[id] || {};
  }

  setDatum(args) {
    let id;
    if (args.id) {
      id = args.id;
    } else {
      id = this.channels[args.channel][args.source];
    }
    if (args.key) {
      return this.data[id][args.key];
    } else {
      return this.data[id];
    }
  }

  getDatum(args) {
    let id;
    if (args.id) {
      id = args.id;
    } else {
      id = this.channels[args.channel][args.source];
    }
    if (args.key) {
      return this.data[id][args.key];
    } else {
      return this.data[id];
    }
  }

  setIndex(key, c) {
    const value = c[key];
    if (value) {
      if (!this.index[c.source]) this.index[c.source] = {};
      if (!this.index[c.source][key]) this.index[c.source][key] = {};
      if (!this.index[c.source][key][value]) this.index[c.source][key][value] = [];
      this.index[c.source][key][value].push(c.id);
    }
  }

  getIndex(source, key, id) {
    if (!this.index[source]) return [];
    if (!this.index[source][key]) return [];
    if (!this.index[source][key][value]) return [];
    return this.index[source][key][value];
  }

  toggleIdList(idList) {
    let firstId;
    let nextId;
    let breakNext = false;
    for (const id of idList) {
      if (!currentId) return id;
      if (!firstId) firstId = id;
      if (breakNext) {
        nextId = id;
        break;
      }
      if (currentId === id) breakNext = true;
    }
    if (!nextId) nextId = firstId;
    return this.data[nextId];
  }

  setSubscription(c) {
    if (!this.subscriptions[c.event]) this.subscriptions[c.event] = {};
    if (!this.subscriptions[c.event][c.event_source]) this.subscriptions[c.event][c.event_source] = [];
    this.subscriptions[c.event][c.event_source].push(c.id);
  }

  getSubscriptions(event, entityId) {
    const entity = this.data[entityId];
    const events = this.subscriptions[event] || {};
    const subscriptionIds = events[entity.source] || [];

    const output = [];
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.data[subscriptionId];
      if (subscription.unique_key) {
        output.push([subscription.command, entity[subscription.unique_key]]);
        continue;
      }
      for (const id of this.index[subscription.index_key]) {
        const commandEntity = this.data[id];
        if (subscription.filter_key && commandEntity[subscription.filter_key] !== subscription.filter_value) continue;
        output.push([subscription.command, id]);
      }
    }
    return output || [];
  }
}
