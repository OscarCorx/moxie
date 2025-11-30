const registry = new Registry();
const publisher = new Publisher(registry);

const style = new Style(registry, publisher);
const navigate = new Navigate(registry, publisher);

const update = new Update(registry, publisher);
const load = new Load(registry, publisher);
const outline = new Outline(registry, publisher, primaryStyle, secondaryStyle);
const detail = new Detail(registry, publisher, primaryStyle, secondaryStyle);

publisher.on(update.action, (m) => { update.command(m); });
publisher.on(detail.action, (m) => { detail.command(m); });
publisher.on(outline.action, (m) => { outline.command(m); });
