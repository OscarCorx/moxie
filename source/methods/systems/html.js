/* Trivial Output */
[
  {
    source: "/method/definition",
    name: "Write Event",
    description: "Write event as update or navigation",
    method: () => {
      console.log("Trivial Output");
      /* Update event */
      /* Update navigation */
      /* Update value */
    },
  },
].forEach((c) => PROCESS.setComponent(c));
