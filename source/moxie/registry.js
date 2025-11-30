const DEFAULT_REACTION_ID = "/reaction";

class Registry {
  channels = {};
  index = {};
  subscriptions = {};
  data = {};
  delta = {};

  isActive(id) {
    return !!(this.data[id] || {}).active;
  }

  loadData(c) {
    this.data[c.id] = c;
  }

  setIndex(indexContent, c) {
    if (!c[indexContent.field]) return;
    let key;
    if (indexContent.index_source) {
      key = `${indexContent.index_source}${indexContent.key || indexContent.field}${c[indexContent.field]}`;
    } else {
      key = `${indexContent.key || indexContent.field}${c[indexContent.field]}`;
    }

    if (!this.index[key]) this.index[key] = [];
    this.index[key].push(c.id);
  }

  getIndex(indexContent, value) {
    let key;
    if (indexContent.index_source) {
      key = `${indexContent.index_source}${indexContent.key || indexContent.field}/${value}`;
    } else {
      key = `${indexContent.key || indexContent.field}/${value}`;
    }
    return this.index[key] || [];
  }

  toggleIndex(indexContent) {
    if (indexContent.index_source) {
      key = `${indexContent.index_source}${indexContent.key || indexContent.field}/${value}`;
    } else {
      key = `${indexContent.key || indexContent.field}/${value}`;
    }
    let firstId;
    let nextId;
    let breakNext = false;
    for (const id of this.index[key] || []) {
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
    if (!this.subscriptions[c.event][c.event_source]) this.subscriptions[c.event] = [];
    this.subscriptions[c.event][c.event_source].push(c.id);
  }

  getSubscription(event, entityId) {
    const entity = this.data[entityId];
    const events = this.subscriptions[event] || {};
    const subscriptions = events[entity.source] || [];

    const output = [];
    for (const subscription of subscriptions) {
      if (subscription.unique_key) {
        const commandEntity = this.data[entity[subscription.unique_key]];
        output.push([subscription.action, commandEntity]);
        continue;
      }
      for (const id of this.index[subscription.index_key]) {
        const commandEntity = this.data[id];
        if (subscription.filter_key && commandEntity[subscription.filter_key] !== subscription.filter_value) continue;
        output.push([subscription.action, commandEntity]);
      }
    }
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

  setCategory(c) {
    const key = `/category${c.category_id}`;
    if (!this.index[key]) this.index[key] = [];
    this.index[key].push(c.id);
  }

  getCategory(categoryId) {
    console.log(categoryId)
    const key = `/source${categoryId}`;
    return this.index[key] || [];
  }

  getCategoryValue(source, id, key) {
    let categoryId;
    if (id) {
      categoryId = this.getDatum(id, key);
    } else {
      categoryId = this.getChannelDatum("primary", source, key);
    }
    if (!categoryId) {
      categoryId = this.index[`/source${source}`][0];
    }
    return this.getData(id);
  }

  getNextCategory(source, currentId) {
    const key = `/source${source}`;
    let firstId;
    let nextId;
    let breakNext = false;
    for (const id of this.index[key] || []) {
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
}
