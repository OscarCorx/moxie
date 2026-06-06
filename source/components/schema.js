/* Method */
[
  {
    parent: "/method/definition",
    source: "/schema/field",
    kind: "/entity",
    key: "method",
  },
  {
    parent: "/method/definition",
    source: "/schema/field",
    kind: "/string",
    key: "name",
  },
  {
    parent: "/method/definition",
    source: "/schema/field",
    kind: "/string",
    key: "description",
  },
  {
    parent: "/method/definition",
    source: "/schema/field",
    kind: "/code",
    key: "code",
  },
].forEach((c) => PROCESS.model.setComponent(c));
/* Procedure */
[
  {
    parent: "/procedure/state",
    source: "/schema/field",
    kind: "/entity",
    key: "procedure",
  },
  {
    parent: "/procedure/state",
    source: "/schema/field",
    kind: "/entity",
    key: "state",
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
    collection: true,
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/function",
    key: "action",
  },
  {
    parent: "/procedure/subscription",
    source: "/schema/field",
    kind: "/function",
    key: "reaction",
  },
].forEach((c) => PROCESS.model.setComponent(c));
/* Message */
[
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/entity",
    key: "result",
    collection: true,
  },
  {
    parent: "/message/header",
    source: "/schema/field",
    kind: "/string",
    key: "event",
  },
].forEach((c) => PROCESS.model.setComponent(c));

[].forEach((c) => PROCESS.model.setComponent(c));
