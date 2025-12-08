class Detail extends Actor {
  event = "/detailed";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  COMMANDS = {
    "/app": (c) => {
      console.log("DETAIL APP", c.id);
    },
    "/panel": (c) => {
    },
    "/card": (c) => {
      document.getElementById(c.id).textContent = c.id;
    },
    "/slide_input": (c) => {
      document.getElementById(c.id).textContent = c.id;
    },
    "/swipe_input": (c) => {
      document.getElementById(c.id).textContent = c.id;
    },
    "/button_input": (c) => {
      document.getElementById(c.id).textContent = c.title;
    },
  };
}
