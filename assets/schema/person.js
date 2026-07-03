const ASSETS = [];
ASSETS.push(
  ...[
    {
      parent: "/components",
      source: "/schema/field",
      kind: "/entity",
      key: "entity",
    },
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
  ],
);

COMPONENTS.push(
  ...[
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
