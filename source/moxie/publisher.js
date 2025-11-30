function getId() {
  return Math.floor(Math.random() * 1000000000);
}

class Publisher {
  constructor(registry) {
    this.registry = registry;
  }

  emit(action, contents, priorId, initId) {
    const metadata = {
      id: getId(),
      source: "/metadata",
      prior_id: priorId,
      init_id: initId,
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

  publish(reaction, contents, priorId, initId) {
    console.log("PUBLISH", reaction, contents);

    const outputMap = {};
    for (const content of contents) {
      const reactionEntity = this.registry.getData(content.reaction_id);
      const subscriptions = this.registry.getSubscriptions(
        reaction,
        content.reaction_id,
      );
      for (const [action, actionId] of subscriptions) {
        const actionEntity = this.registry.getData(actionId);
        const outputs = this.publishContent(
          reaction,
          reactionEntity,
          action,
          actionEntity,
          {
            reaction,
            action,
            ...content,
          },
        );
        for (const output of outputs) {
          if (!outputMap[action]) outputMap[action] = [];
          outputMap[action].push(output);
        }
      }
    }
    for (const [action, outputs] of Object.entries(outputMap)) {
      this.emit(action, outputs, priorId, initId);
    }
  }

  publishContent(reaction, reactionEntity, action, actionEntity, content) {
    const actionKind = `${action}${actionEntity.source}`;
    let actionQuery = this.QUERIES[actionKind];
    if (!actionQuery) {
      console.log("MISSING ACTION", "/publish", actionKind);
      return [];
    }
    return actionQuery(reactionEntity, actionEntity, content) || [];
  }

  QUERIES = {};
}
