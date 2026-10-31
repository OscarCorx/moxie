COMPONENTS.push(
  {
    source: "/current/view/state",
    current: "/current",
    hud: "/hud",
    view_state: "/initial_view_state",
  },
  {
    source: "/view/state/version",
    version: "/initial_view_state",
    key: "view_state",
  },
);
COMPONENTS.push(
  {
    source: "/view/state/version",
    view_state: "/initial_view_state",
    archetype: "/archetype/person",
    entity: "/person/0",
    property: "/location",
    component: "/address/0",
    field: "/address_0",
  },
  {
    source: "/view/hud/version",
    view_hud: "/hud",
    primary: true,
    secondary: false,
    alternate: false,
    workspace: false,
  },
);
