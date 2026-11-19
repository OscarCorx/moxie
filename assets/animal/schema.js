ASSETS.push(
  {
    source: "/archetype/property",
    property: "/identification",
    archetype: "/archetype/animal",
  },
);

ASSETS.push(
  {
    source: "/present",
    entity: "/identification",
    title: "Identification",
    key: "identification",
    icon: "[I]",
    description: "This is identification information for the animal",
  },
  {
    parent: "/identification",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/identification",
    source: "/schema/field",
    kind: "/string",
    key: "serial_number",
  },
);
