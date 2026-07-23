/* ARCHETYPE */
COMPONENTS.push(
  {
    schema: "/archetype/property",
    archetype: "/archetype",
    property: "/archetype/property#archetype",
  },
  {
    schema: "/archetype/property",
    archetype: "/archetype",
    property: "/archetype/entity#archetype",
  },
);
/* SCHEMA */
COMPONENTS.push(
  {
    schema: "/archetype/property",
    archetype: "/archetype/schema",
    property: "/schema/field#entity",
  },
  {
    schema: "/archetype/property",
    archetype: "/archetype/schema",
    property: "/instance",
  },
);
/* PROCEDURE */
COMPONENTS.push(
  {
    schema: "/archetype/property",
    archetype: "/archetype/procedure",
    property: "/procedure/subscription#procedure",
  },
);
/* NAVIGATION */
COMPONENTS.push(
  {
    schema: "/archetype/property",
    archetype: "/archetype/navigation",
    property: "/navigation/stack#exit",
  },
  {
    schema: "/archetype/property",
    archetype: "/archetype/navigation",
    property: "/navigation/stack#enter",
  },
  {
    schema: "/archetype/property",
    archetype: "/archetype/navigation",
    property: "/navigation/state#node",
  },
);
