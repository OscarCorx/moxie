const registry = new Registry();
const publisher = new Publisher(registry);

const style = new Style(registry, publisher);
const navigate = new Navigate(registry, publisher);

const userInput = new UserInput(registry, publisher);

const load = new Load(registry, publisher);
const outline = new Outline(registry, publisher, style);
const detail = new Detail(registry, publisher, style);

registry.on("/enter", (m) => { navigate.enter(m) });
registry.on("/exit", (m) => { navigate.exit(m) });
registry.on("/next", (m) => { navigate.next(m) });
registry.on("/previous", (m) => { navigate.previous(m) });
registry.on("/forward", (m) => { navigate.forward(m) });
registry.on("/back", (m) => { navigate.back(m) });
registry.on("/flip", (m) => { navigate.flip(m) });
registry.on("/reverse", (m) => { navigate.reverse(m) });
registry.on("/draw", (m) => { navigate.draw(m) });
registry.on("/replace", (m) => { navigate.replace(m) });

registry.on(COMMANDS.OUTLINE, (m) => { outline.command(m); });
registry.on(COMMANDS.DETAIL, (m) => { detail.command(m); });
