Object.assign(QUERIES, {
  "/misenplace/navigate/app": (c, s) => {
    console.log("/navigate/app");
  },
  "/misenplace/navigate/component": (c, s) => {
    console.log("/navigate/component");
  },
  "/misenplace/navigate/text_entry": (c, s) => {
    console.log("/navigate/text_entry");
  },
  "/misenplace/navigate/markdown_entry": (c, s) => {
    console.log("/navigate/markdown_entry");
  },
});

Object.assign(COMMANDS, {
  "/misenplace/navigate/app": (c, s) => {
    console.log("/navigate/component");
  },
  "/misenplace/navigate/component": (c, s) => {
    console.log("/navigate/component");
  },
  "/misenplace/navigate/text_entry": (c, s) => {
    console.log("/navigate/text_entry");
  },
  "/misenplace/navigate/markdown_entry": (c, s) => {
    console.log("/navigate/markdown_entry");
  },
});
