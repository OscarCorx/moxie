COMPONENTS.push(
  {
    source: "/procedure/animation",
    procedure: "/slide/card",
    speed: 90,
    routine: (m, c, t) => {
      const a = m.accessComponent(c.procedure, "/procedure/animation");
      c.count++;
      const e = document.getElementById("/hud/card");
      switch (c.direction) {
        case "/up":
          Object.assign(e.style, {
            top: `${a.speed * c.top--}px`,
          });
          break;
        case "/down":
          Object.assign(e.style, {
            top: `${a.speed * c.top++}px`,
          });
        break;
        case "/left":
          Object.assign(e.style, {
            left: `${a.speed * c.top--}px`,
          });
        break;
        case "/right":
          Object.assign(e.style, {
            left: `${a.speed * c.top++}px`,
          });
          break;
      }
      if (c.count < 20) {
        return "/event/render/card_slide";
      }
      c.complete = true;
      return "/event/render/card_slide_complete"
    },
  },
);
