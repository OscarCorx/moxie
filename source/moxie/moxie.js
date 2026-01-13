function getId() {
  return Math.floor(Math.random() * 1000000000);
}

const process = new Process();
const actor = new Actor(process);

process.on("/transition", (m) => actor.transition(m));
process.on("/event", (m) => actor.event(m));
process.on("/query", (m) => actor.query(m));
process.on("/command", (m) => actor.command(m));
process.on("/reaction", (m) => actor.reaction(m));

window.addEventListener("load", () => {
  process.emit("/event",
    {
      id: "/initialize",
      source: "/metadata",
      procedure_id: "/initialize_app",
      module: "/misenplace",
      entity_id: "/app",
      state: "/load"
    }, [
    {
      module: "/virgil",
      action: "/load",
      source: "/app",
    },
  ]);
});
