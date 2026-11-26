COMPONENTS.push(
  {
    source: "/animation",
    entity: "/animate",
    count: 0,
    routine: (m, a, t) => {
      a.count++;
      if (0 === a.count % 100) console.log("ANIMATE", a.count);
      if (a.count > 100) {
        console.log("STOPPING ANIMATION");
        m.stopAnimation(a);
      }
    },
  },
);
