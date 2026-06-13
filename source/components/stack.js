[
  {
    source: "/navigation/stack",
    push: "/head",
    template: "/entity_viewer",
    entity: "/html/template/card",
    component_source: "/schema/field",
  },
].forEach((c) => PROCESS.model.set(c));
