[
  {
    source: "/navigation/stack",
    push: "/head",
    template: "/entity_viewer",
    entity: "/person",
    component_source: "/demographics",
  },
].forEach((c) => PROCESS.model.set(c));
