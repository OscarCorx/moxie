const writer = new Writer();
const publisher = new Publisher(writer);
const actor = new Actor(writer);

writer.on("/command", (m) => actor.enact(m));
writer.on("/event", (m) => publisher.publish(m));
