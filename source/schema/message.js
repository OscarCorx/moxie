[
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
].forEach((c) => PROCESS.model.set(c));
