class UserInput extends Actor {
  action = "/input";
  reaction = "/inputed";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  COMMANDS = {};
}
