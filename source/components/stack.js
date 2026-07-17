COMPONENTS.push(
  ...[
    {
      source: "/navigation/state",
      exit: "/4",
      template: "/entity_viewer",
      entity: "/schema/field",
      archetype: "/archetype/schema",
    },
    {
      source: "/navigation/state",
      exit: "/3",
      template: "/entity_viewer",
      entity: "/archetype/person",
      archetype: "/archetype",
    },
    {
      source: "/navigation/state",
      exit: "/2",
      template: "/entity_viewer",
      entity: "/dog",
      archetype: "/archetype/animal",
    },
    {
      source: "/navigation/state",
      enter: "/head",
      exit: "/1",
      template: "/entity_viewer",
      entity: "/person",
      archetype: "/archetype/person",
    },
  ],
);
