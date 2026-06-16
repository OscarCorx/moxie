/* SCHEMA */
[
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
    kind: "/boolean",
    key: "collection",
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
].forEach((c) => PROCESS.model.set(c));
/* DESCRIPTION */
[
  {
    parent: "/description",
    source: "/schema/field",
    kind: "/string",
    key: "key",
  },
  {
    parent: "/description",
    source: "/schema/field",
    kind: "/sting",
    key: "name",
  },
  {
    parent: "/description",
    source: "/schema/field",
    kind: "/sting",
    key: "icon",
  },
  {
    parent: "/description",
    source: "/schema/field",
    kind: "/sting",
    key: "description",
  },
];
