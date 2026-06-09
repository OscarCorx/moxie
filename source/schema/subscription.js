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
].forEach((c) => PROCESS.model.set(c));
