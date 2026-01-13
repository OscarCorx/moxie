
Object.assign(QUERIES, {
  "/misenplace/detail/app": (c, s) => {
    console.log("/detail/app");
  },
  "/misenplace/detail/component": (c, s) => {
    console.log("/detail/component");
  },
  "/misenplace/detail/text_entry": (c, s) => {
    console.log("/detail/text_entry");
  },
  "/misenplace/detail/markdown_entry": (c, s) => {
    console.log("/detail/markdown_entry");
  },
});

Object.assign(COMMANDS, {
  "/misenplace/detail/app": (c, s) => {
    console.log("/detail/component");
  },
  "/misenplace/detail/component": (c, s) => {
    console.log("/detail/component");
  },
  "/misenplace/detail/text_entry": (c, s) => {
    console.log("/detail/text_entry");
  },
  "/misenplace/detail/markdown_entry": (c, s) => {
    console.log("/detail/markdown_entry");
  },
});
