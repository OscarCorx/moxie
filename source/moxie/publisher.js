function getId() {
  return Math.floor(Math.random() * 1000000000);
}

class Publisher {
  constructor(registry) {
    this.registry = registry;
  }

  publish(event, entityId, priorId, initId) {
    console.log("PUBLISH", event, entityId);
    const eventEntity = this.registry.getData(entityId);
    const subscriptions = this.registry.getSubscriptions(event, eventEntity);
    for (const [command, commandEntity] of subscriptions) {
      console.log("PUBLISH", command, commandEntity.id)
      const outputs = this.publishContent(eventEntity, commandEntity, {
        event,
        command,
      });
      this.registry.emit(command, commandEntity.id, outputs, priorId, initId);
    }
  }

  publishContent(eventEntity, commandEntity, content) {
    const commandKind = `${content.command}${commandEntity.source}`;
    let commandQuery = this.QUERIES[commandKind];
    if (!commandQuery) {
      console.log("MISSING COMMAND", "/publish", commandKind);
      return [];
    }
    return commandQuery(eventEntity, commandEntity, content) || [];
  }

  childQuery(eventEntity, parentId, content) {
    const contents = [];
    for (const childId of this.registry.getIndex("parent_id", parentId)) {
      const childEntity = this.registry.data[childId];
      contents.push(...this.publishContent(eventEntity, childEntity, content));
    }
    return contents;
  }

  QUERIES = {
    "/outline/app": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      contents.push(...this.childQuery(e, a.id, c));
      return contents;
    },
    "/outline/hud": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/outline/deck": (e, a, c) => {
      const card = this.registry.card;
      if (card.screen_index === card.screens.length) card.screen_index = 0;
      if (card.screen_index < 0) card.screen_index = card.screens.length - 1;
      const contents = [
        {
          id: this.registry.card.navigation_id,
          source: "/panel",
          parent_id: "/navigation",
        },
        {
          id: card.screens[card.screen_index],
          source: "/screen",
          parent_id: "/screen",
        },
        {
          id: this.registry.card.control_id,
          source: "/panel",
          parent_id: "/control",
        },
      ];
      contents.push(...this.childQuery(e, card.navigation_id, c));
      // contents.push(...this.childQuery(e, this.card.screens[card.screen_], c));
      contents.push(...this.childQuery(e, card.control_id, c));
      return contents;
    },
    "/outline/card": (e, a, c) => {
      const card = this.registry.card;
      if (card.screen_index === card.screens.length) card.screen_index = 0;
      if (card.screen_index < 0) card.screen_index = card.screens.length - 1;
      const contents = [
        {
          id: this.registry.card.navigation_id,
          source: "/panel",
          parent_id: "/navigation",
        },
        {
          id: card.screens[card.screen_index],
          source: "/screen",
          parent_id: "/screen",
        },
        {
          id: this.registry.card.control_id,
          source: "/panel",
          parent_id: "/control",
        },
      ];
      contents.push(...this.childQuery(e, card.navigation_id, c));
      contents.push(...this.childQuery(e, this.registry.screen.id, c));
      contents.push(...this.childQuery(e, card.control_id, c));
      return contents;
    },
    "/outline/screen": (e, a, c) => {
      const card = this.registry.card;
      const contents = [
        {
          id: card.screens[card.screen_index],
          source: "/screen",
          parent_id: "/screen",
        },
      ];
      return contents;
    },
    "/outline/panel": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      contents.push(...this.childQuery(e, a.configuration_id, c));
      return contents;
    },
    "/outline/text_entry": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/outline/slide_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/outline/swipe_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/outline/button_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/detail/deck": (e, a, c) => {
      const contents = [];
      contents.push(...this.childQuery(e, this.registry.card.navigation_id, c));
      contents.push(...this.childQuery(e, this.registry.card.screen_id, c));
      contents.push(...this.childQuery(e, this.registry.card.control_id, c));
      return contents;
    },
    "/detail/card": (e, a, c) => {
      const contents = [];
      contents.push(...this.childQuery(e, this.registry.card.navigation_id, c));
      contents.push(...this.childQuery(e, this.registry.card.screen_id, c));
      contents.push(...this.childQuery(e, this.registry.card.control_id, c));
      return contents;
    },
    "/detail/panel": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      contents.push(...this.childQuery(e, a.configuration_id, c));
      return contents;
    },
    "/detail/text_entry": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/detail/slide_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/detail/swipe_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
    "/detail/button_input": (e, a, c) => {
      const contents = [
        {
          ...a,
        },
      ];
      return contents;
    },
  };
}
