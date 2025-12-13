const CONTENTS = [...SCHEMA, ...MISENPLACE_COMPONENTS];

window.addEventListener("load", () => {
  writer.emit(
    "/command",
    "/load",
    "/app",
    { id: "/initialize", source: "/intialize" },
    CONTENTS,
  );
});
