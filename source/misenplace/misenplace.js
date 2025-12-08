const CONTENTS = [...SCHEMA, ...HUD, ...NAVIGATION, ...SCREENS, ...COMPONENTS];

window.addEventListener("load", () => {
  load.command([
    {
      id: ":start",
      source: "/metadata",
      timestamp: Date.now(),
      entity_id: "/app",
      timeout: 0,
    },
    ...CONTENTS,
    {
      id: "/unnecceary",
      source: "/initialize",
      deck_id: "/expectations_deck",
    }
  ]);
  publisher.publish("/entered", registry.card.id, "/initialize", "/initialize");
});
