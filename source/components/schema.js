/* SCHEMA FIELD */
COMPONENTS.push(
  {
    entity: "/schema/field",
    schema: "/schema/field",
    kind: "/string",
    key: "kind",
  },
  {
    entity: "/schema/field",
    schema: "/schema/field",
    kind: "/string",
    key: "key",
  },
);
/* ARCHETYPE PROPERTY */
COMPONENTS.push(
  ...[
    {
      parent: "/archetype/property",
      schema: "/schema/field",
      kind: "/entity",
      key: "archetype",
    },
    {
      entity: "/archetype/property",
      schema: "/schema/field",
      kind: "/string",
      key: "property",
    },

  ],
);
/* ARCHETYPE ENTITY */
COMPONENTS.push(
  {
    entity: "/archetype/entity",
    shema: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    entity: "/archetype/entity",
    schema: "/schema/field",
    kind: "/entity",
    key: "archetype",
  },
);
/* DISPLAY */
COMPONENTS.push(
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/string",
    key: "key",
  },
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/sting",
    key: "name",
  },
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/sting",
    key: "icon",
  },
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/sting",
    key: "description",
  },
  {
    entity: "/display",
    schema: "/schema/field",
    kind: "/sting",
    key: "name",
  },
);
/* MESSAGE HEADER */
COMPONENTS.push(
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/entity",
    key: "result",
    access: "/collection",
  },
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/string",
    key: "event",
  },
);
/* PROCEDURE SUBSCRIPTION */
COMPONENTS.push(
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/string",
    key: "state",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/entity",
    key: "event",
  },
);
