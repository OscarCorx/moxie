/* CURRENT VIEW STATE */
COMPONENTS.push(
  {
    parent: "/current/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "current",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "view_hud",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "view_state",
  },
);
/* HUD */
COMPONENTS.push(
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "hud",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "navigation",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "control",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "primary",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/string",
    key: "secondary",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "alternate",
  },
  {
    parent: "/view/hud",
    source: "/schema/field",
    kind: "/entity",
    key: "workspace",
  },
);

/* VIEW STATE */
COMPONENTS.push(
  {
    parent: "/view/state/version",
    source: "/schema/field",
    kind: "/entity",
    key: "view_state",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "archetype",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "entity",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "property",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/string",
    key: "component",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "field",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "default_style",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "temp_style",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "default_display",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "temp_display",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "exit",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "flip",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "reverse",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "draw",
  },
  {
    parent: "/view/state",
    source: "/schema/field",
    kind: "/entity",
    key: "replace",
  },
);
/* VIEW HUD */
COMPONENTS.push(
  {
    parent: "/view/hud/version",
    source: "/schema/field",
    kind: "/entity",
    key: "view_hud",
  },
  {
    parent: "/view/hud/version",
    source: "/schema/field",
    kind: "/boolean",
    key: "primary",
  },
  {
    parent: "/view/hud/version",
    source: "/schema/field",
    kind: "/boolean",
    key: "secondary",
  },
  {
    parent: "/view/hud/version",
    source: "/schema/field",
    kind: "/boolean",
    key: "alternate",
  },
  {
    parent: "/view/hud/version",
    source: "/schema/field",
    kind: "/boolean",
    key: "workspace",
  },
);
