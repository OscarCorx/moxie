Object.assign(QUERIES, {
  "/misenplace/data_store/app": (c, s) => {
    console.log("/data_store/app");
  },
  "/misenplace/data_store/component": (c, s) => {
    console.log("/data_store/component");
  },
  "/misenplace/data_store/text_entry": (c, s) => {
    console.log("/data_store/text_entry");
  },
  "/misenplace/data_store/markdown_entry": (c, s) => {
    console.log("/data_store/markdown_entry");
  },
});

Object.assign(COMMANDS, {
  "/misenplace/data_store/app": (c, s) => {
    console.log("/data_store/component");
  },
  "/misenplace/data_store/component": (c, s) => {
    console.log("/data_store/component");
  },
  "/misenplace/data_store/text_entry": (c, s) => {
    console.log("/data_store/text_entry");
  },
  "/misenplace/data_store/markdown_entry": (c, s) => {
    console.log("/data_store/markdown_entry");
  },
});
