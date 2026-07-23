COMPONENTS.push(
  ...[
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
      access: "/collection",
    },
  ],
);
