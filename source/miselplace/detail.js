class Detail extends Actor {
  action = "/detail";
  reaction = "/detailed";
  updated = "/updated";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  COMMANDS = {};
}
