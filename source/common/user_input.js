class UserInput extends Actor {
  event = "/inputed";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  COMMANDS = {};
}
