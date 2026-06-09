/* Template */
[
  // {
  //   source: "/html/template/relation",
  //   parent: "/card",
  //   child: "/select_panel",
  // },
  // {
  //   source: "/html/template/relation",
  //   parent: "/card",
  //   child: "/viewer_panel",
  // },
  // {
  //   source: "/html/template/relation",
  //   parent: "/select_panel",
  //   child: "/select_entry",
  // },
  // {
  //   source: "/html/template/relation",
  //   parent: "/viewer_panel",
  //   child: "/viewer_entry",
  // },
  // {
  //   source: "/html/template/card",
  //   entity: "/card/template",
  //   outline_query: "/query/outline/card",
  //   detail_query: "/query/detail/card",
  // },
  // {
  //   source: "/html/template/panel",
  //   entity: "/select_panel",
  // },
  // {
  //   source: "/html/template/panel",
  //   entity: "/select_entry",
  // },
  // {
  //   source: "/html/template/entry",
  //   entity: "/select_entry",
  // },
  // {
  //   source: "/html/template/entry",
  //   entity: "/viewer_entry",
  // },
].forEach((c) => PROCESS.model.setComponent(c));
