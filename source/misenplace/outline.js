class Outline extends Actor {
  event = "/outlined";

  constructor(registry, publisher) {
    super(registry, publisher);
  }

  outlineComponent(componentId, parentId, tag) {
    let component = document.getElementById(componentId);
    if (!component) {
      component = document.createElement(tag || "div");
      component.setAttribute("id", componentId);
      return document.getElementById(parentId).appendChild(component);
    } else {
      while (component.firstChild) {
        component.firstChild.remove();
      }
      return component;
    }
  }

  outlineGroup(parentId, groupIndex) {
    const parent = document.getElementById(parentId);
    let group;
    for (let i = 0; i <= groupIndex;  i++) {
      const id = `${parentId}/${i}`;
      group = document.getElementById(id);
      if (!group) {
        group = document.createElement("div");
        group.setAttribute("id", id);
        Object.assign(group.style, {
          "display": "flex",
          "flex-direction": "row",
        });
        if (i == 0) {
          Object.assign(group.style, {
            "flex": "auto",
          });
        }
        parent.appendChild(group);
      }
    }
    return group;
  }

  COMMANDS = {
    "/app": (c) => {
      const app = document.getElementById(c.id);
      while (app.firstChild) {
        app.firstChild.remove();
      }
      console.log("OUTLINE APP", c.id);
    },
    "/hud": (c) => {
      const panel = this.outlineComponent(c.id, c.parent_id);
      Object.assign(panel.style, {
        position: "absolute",
        top: c.top,
        left: c.left,
        width: c.width,
        height: c.height,
        display: "flex",
      });
    },
    "/panel": (c) => {
      const panel = this.outlineComponent(c.id, c.parent_id);
      Object.assign(panel.style, {
        top: c.top,
        left: c.left,
        width: c.width,
        height: c.height,
        display: "flex",
        flex: "auto",
      });
      Object.assign(panel.style, {
        border: "2px solid black",
      });
    },
    "/screen": (c) => {
      const screen = this.outlineComponent(c.id, c.parent_id);
      Object.assign(screen.style, {
        position: "absolute",
        top: "12vh",
        left: "1vw",
        width: "98vw",
        height: "75vh",
      });
      Object.assign(screen.style, {
        border: "2px solid black",
      });
      screen.textContent = c.id;
    },
    "/slide_input": (c) => {
      const group = this.outlineGroup(c.parent_id, c.group_index);
      const input = document.createElement("div");
      input.setAttribute("id", c.id);
      const manager = new Hammer.Manager(input);
      manager.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL }));
      manager.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL }));
      manager.add(new Hammer.Pan());
      manager.on('panleft panright', function(e) {
        console.log(e.additionalEvent);
      });
      manager.on('panup pandown', function(e) {
        console.log(e.additionalEvent);
      });
      Object.assign(input.style, {
        flex: "auto",
        border: "2px solid black",
      });

      group.appendChild(input);
    },
    "/swipe_input": (c) => {
      const group = this.outlineGroup(c.parent_id, c.group_index);
      const input = document.createElement("div");
      input.setAttribute("id", c.id);
      group.appendChild(input);
    },
    "/button_input": (c) => {
      const group = this.outlineGroup(c.parent_id, c.group_index);
      const input = document.createElement("div");
      input.setAttribute("id", c.id);
      Object.assign(input.style, {
        "flex": "auto",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "border": "1px solid black",
        "border-radius": "5px",
      });
      input.addEventListener("click", () => {
        this.registry.emit(c.event, c.id, []);
      });
      group.appendChild(input);
    },
  };
}
