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
    title: "Entity"
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/string",
    key: "key",
    title: "Key"
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "title",
    title: "Title"
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "icon",
    title: "Icon"
  },
  {
    parent: "/present",
    source: "/schema/field",
    kind: "/sting",
    key: "description",
    title: "Description"
  },
  {
    source: "/present",
    entity: "/present",
    title: "Presentation",
    key: "present",
    icon: "[L]",
    description: "This is a presentation",
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
/* PROCEDURE SUBSCRIPTION */
COMPONENTS.push(
  {
    parent: "/procedure/run",
    source: "/schema/field",
    kind: "/entity",
    key: "run",
  },
  {
    parent: "/procedure/run",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
);
/* PROCEDURE RUN */
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
/* ANIMATION */
COMPONENTS.push(
  {
    parent: "/animation",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/animation",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
  {
    parent: "/procedure/animation",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
);
