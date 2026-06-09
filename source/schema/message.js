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
].forEach((c) => PROCESS.model.set(c));
