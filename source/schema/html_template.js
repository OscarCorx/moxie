/* CARD */
[
  {
    parent: "/html/template/card",
    source: "/schema/field",
    kind: "/entity",
    key: "card",
  },
  {
    parent: "/html/template/card",
    source: "/schema/field",
    kind: "/entity",
    key: "left_panel",
  },
  {
    parent: "/html/template/card",
    source: "/schema/field",
    kind: "/entity",
    key: "right_panel",
  },
].forEach((c) => PROCESS.model.set(c));
/* PANEL */
[
  {
    parent: "/html/template/panel",
    source: "/schema/field",
    kind: "/entity",
    key: "panel",
  },
].forEach((c) => PROCESS.model.set(c));
/* ENTRY */
[
  {
    parent: "/html/template/entry",
    source: "/schema/field",
    kind: "/entity",
    key: "panel",
  },
].forEach((c) => PROCESS.model.set(c));
