[
  {
    parent: "/misenplace/template/relation",
    source: "/schema/field",
    kind: "/entity",
    key: "parent",
  },
  {
    parent: "/misenplace/template/relation",
    source: "/schema/field",
    kind: "/entity",
    key: "child",
  },
  {
    parent: "/misenplace/template/card",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/misenplace/template/card",
    source: "/schema/field",
    kind: "/function",
    key: "outline_query",
  },
  {
    parent: "/misenplace/template/panel",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/misenplace/template/entry",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
].forEach((c) => PROCESS.model.set(c));
