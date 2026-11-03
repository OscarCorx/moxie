const ASSETS = [];

ASSETS.push(
  ...[
    {
      source: "/archetype/property",
      property: "/location",
      archetype: "/archetype/person",
      access: "/collection",
    },
    {
      source: "/archetype/property",
      property: "/demographics",
      archetype: "/archetype/person",
      access: "/collection",
    },
    {
      id: "/person_person_0",
      source: "/archetype/entity",
      entity: "/person/0",
      archetype: "/archetype/person",
      access: "/collection",
    },
  ],
);

ASSETS.push(
  {
    parent: "/location",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
    access: "/collection",
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

ASSETS.push(
  ...[
    {
      source: "/display",
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
      access: "/collection",
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
  ],
);
