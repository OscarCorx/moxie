/* ARCHETYPE */
ASSETS.push(
  {
    source: "/present",
    entity: "/archetype/person",
    title: "Person Record",
    key: "person_record",
    icon: "[L]",
    description: "This is an entity of a person",
  },
  {
    source: "/archetype/property",
    property: "/present",
    archetype: "/archetype/person",
    field: "entity",
  },
  {
    source: "/archetype/property",
    property: "/location",
    archetype: "/archetype/person",
    field: "entity",
  },
  {
    source: "/archetype/property",
    property: "/demographics",
    archetype: "/archetype/person",
    field: "entity",
  },
  {
    source: "/archetype/property",
    property: "/contact",
    archetype: "/archetype/person",
    field: "entity",
  },
  {
    source: "/archetype/entity",
    entity: "/person/0",
    archetype: "/archetype/person",
  },
  {
    source: "/archetype/entity",
    entity: "/person/1",
    archetype: "/archetype/person",
  },
  {
    source: "/archetype/entity",
    entity: "/person/2",
    archetype: "/archetype/person",
  },
);
/* LOCATION */
ASSETS.push(
  {
    source: "/present",
    entity: "/location",
    title: "Location",
    key: "location",
    icon: "[L]",
    description: "This component gives location information",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/string",
    key: "address_1",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/string",
    key: "address_2",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/string",
    key: "city",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/string",
    key: "state",
  },
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/string",
    key: "zipcode",
  },
);
/* DEMOGRAPHICS */
ASSETS.push(
  {
    source: "/present",
    entity: "/demographics",
    title: "Demographics",
    key: "demographics",
    icon: "[D]",
    description: "This component gives demographic information",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/string",
    key: "family_name",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/string",
    key: "given_name",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/string",
    key: "middle_name",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/string",
    key: "date_of_birth",
  },
  {
    parent: "/demographics",
    source: "/schema/field",
    kind: "/string",
    key: "gender",
  },
);
/* CONTACT */
ASSETS.push(
  {
    source: "/present",
    entity: "/contact",
    title: "Contact",
    key: "contact",
    icon: "[C]",
    description: "This component gives contact information",
  },
  {
    parent: "/contact",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/contact",
    source: "/schema/field",
    kind: "/string",
    key: "kind",
  },
  {
    parent: "/contact",
    source: "/schema/field",
    kind: "/string",
    key: "value",
  },
);
