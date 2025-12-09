class Registry {
  channels = {};
  index = {};
  subscriptions = {};
  data = {};
  delta = {};
  original = {};

  emit(action, entityId, contents, priorId, initId) {
    const metadata = {
      id: getId(),
      source: "/metadata",
      prior_id: priorId,
      init_id: initId,
      entity_id: entityId,
      timestamp: Date.now(),
      timeout: 0,
    };
    if (!initId) {
      const id = getId();
      metadata.prior_id = id;
      metadata.init_id = id;
    }
    const message = [metadata, ...contents];
    console.log("EMIT", action, message);
    document.dispatchEvent(new CustomEvent(action, { detail: message }));
  }

  on(action, command) {
    document.addEventListener(action, (event) => {
      setTimeout(() => {
        command(event.detail);
      }, event.detail.timeout);
    });
  }

  initialize(c) {
    this.deck = this.data[c.deck_id];
    const cardId = this.getIndex("deck_id", c.deck_id)[this.deck.card_index];
    this.card = this.data[cardId];
    const screenId = this.card.screens[this.card.screen_index];
    this.screen = this.data[screenId];
  }

  incrementCard(increment) {
    this.deck.card_index += increment;
    const cardList = this.getIndex("deck_id", this.deck.id);
    if (this.deck.card_index === cardList.length) this.deck.card_index = 0;
    if (this.deck.card_index < 0) this.deck.card_index = cardList.length - 1;
    const cardId = cardList[this.deck.card_index];
    this.card = this.data[cardId];
  }

  isActive(id) {
    return !!(this.data[id] || {}).active;
  }

  loadData(c) {
    this.data[c.id] = c;
  }

  getData(id) {
    return this.data[id] || {};
  }

  setIndex(key, c, source) {
    if (!c[key]) return;
    let _key;
    if (source) {
      _key = `/${source}/${key}/${c[key]}`;
    } else {
      _key = `/${key}/${c[key]}`;
    }

    if (!this.index[_key]) this.index[_key] = [];
    this.index[_key].push(c.id);
  }

  getIndex(key, value, source) {
    let _key;
    if (source) {
      _key = `${source}${key}/${value}`;
    } else {
      _key = `/${key}/${value}`;
    }
    return this.index[_key] || [];
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
    if (!this.subscriptions[c.event][c.event_source]) this.subscriptions[c.event][c.event_source] = [];
    this.subscriptions[c.event][c.event_source].push(c.id);
  }

  getSubscriptions(event, entity) {
    const events = this.subscriptions[event] || {};
    const subscriptionIds = events[entity.source] || [];

    const output = [];
    for (const subscriptionId of subscriptionIds) {
      const subscription = this.data[subscriptionId];
      if (subscription.unique_key) {
        const commandEntity = this.data[entity[subscription.unique_key]];
        output.push([subscription.command, commandEntity]);
        continue;
      }
      for (const id of this.index[subscription.index_key]) {
        const commandEntity = this.data[id];
        if (subscription.filter_key && commandEntity[subscription.filter_key] !== subscription.filter_value) continue;
        output.push([subscription.command, commandEntity]);
      }
    }
    return output || [];
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
