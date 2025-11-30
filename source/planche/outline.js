class Outline extends Actor {
  action = "/outline";
  reaction = "/outlined";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  COMMANDS = {};
}
