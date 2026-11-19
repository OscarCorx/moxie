const ASSETS = [];
const COMPONENTS = [];
/* SCHEMA */
COMPONENTS.push(
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
);
/* DISPLAY */
COMPONENTS.push(
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/string",
    key: "key",
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "name",
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "icon",
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "description",
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "name",
  },
);
/* ARCHETYPE */
COMPONENTS.push(
  {
    parent: "/archetype/property",
    source: "/schema/field",
    kind: "/entity",
    key: "archetype",
  },
  {
    parent: "/archetype/property",
    source: "/schema/field",
    kind: "/string",
    key: "property",
  },
  {
    parent: "/archetype/entity",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/archetype/entity",
    source: "/schema/field",
    kind: "/entity",
    key: "archetype",
  },
);
/* ARCHETYPE */
COMPONENTS.push(
  {
    source: "/archetype/property",
    property: "/archetype/property",
    archetype: "/archetype",
  },
  {
    source: "/archetype/property",
    property: "/archetype/entity",
    archetype: "/archetype",
  },
  {
    source: "/archetype/property",
    property: "/schema/field",
    archetype: "/archetype/schema",
  },
);
/* PROCEDURE SUBSCRIPTION */
COMPONENTS.push(
  {
    parent: "/state",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/entity",
    key: "state",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/entity",
    key: "event",
  },
);
/* MESSAGE HEADER */
COMPONENTS.push(
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/entity",
    key: "result",
  },
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/string",
    key: "event",
  },
);
