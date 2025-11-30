const CONTENTS = [...MISENPLACE_STATE, ...MISENPLACE_COMPONENTS, ...DATA];

window.addEventListener("load", () => {
  load.command([{
    id: ":start",
    source: "/metadata",
    timestamp: Date.now(),
    timeout: 0,
  }, ...CONTENTS]);
  outline.command([{}, {
    source: "/state",
  }]);
});
