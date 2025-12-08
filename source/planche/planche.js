const CONTENTS = [...SCHEMA, ...HUD_COMPONENTS];

window.addEventListener("load", () => {
  console.log(screen.orientation.lock)
  if (screen.orientation.lock) screen.orientation.lock("landscape-primary")

  document.getElementById("/fullscreen").addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  });
  // document.getElementById("/orientation").textContent = screen.orientation.lock + "  |  " + screen.orientation.type;
  load.command([{
    id: ":start",
    source: "/metadata",
    timestamp: Date.now(),
    entity_id: "/app",
    timeout: 0,
  }, ...CONTENTS]);
});
