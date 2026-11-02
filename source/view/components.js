COMPONENTS.push(
  {
    source: "/current/view/state",
    current: "/current",
    hud: "/hud",
    view_state: "/initial_view_state",
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
    main_theme: "/theme/dark",
    stable_theme: "/theme/light",
    main_layout: "/layout/0",
    stable_layout: "/layout/1",
    main_display: "/display/0",
    stable_display: "/display/1",
  },
  {
    source: "/view/hud/version",
    view_hud: "/hud",
    primary: true,
    secondary: true,
    alternate: false,
    workspace: false,
  },
);
