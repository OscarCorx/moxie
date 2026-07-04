const COMPONENTS = [];
/* SCHEMA */
COMPONENTS.push(
  ...[
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/string",
      key: "kind",
    },
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/string",
      key: "key",
    },
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/string",
      key: "access",
    },
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/sting",
      key: "name",
    },
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/sting",
      key: "icon",
    },
    {
      parent: "/schema/field",
      source: "/schema/field",
      kind: "/sting",
      key: "description",
    },
  ],
);
/* DISPLAY */
COMPONENTS.push(
  ...[
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/entity",
      key: "entity",
    },
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/string",
      key: "key",
    },
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/sting",
      key: "name",
    },
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/sting",
      key: "icon",
    },
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/sting",
      key: "description",
    },
    {
      parent: "/display",
      source: "/schema/field",
      kind: "/sting",
      key: "name",
    },
  ],
);
/* ARCHETYPE */
COMPONENTS.push(
  ...[
    {
      parent: "/archetype/property",
      source: "/schema/field",
      kind: "/entity",
      key: "archetype",
      access: "/collection",
    },
    {
      parent: "/archetype/property",
      source: "/schema/field",
      kind: "/string",
      key: "property",
    },
  ],
);
