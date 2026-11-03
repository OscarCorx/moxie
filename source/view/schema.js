/* STATE */
COMPONENTS.push(
  {
    parent: "/view/navigation",
    source: "/schema/field",
    kind: "/string",
    key: "archetype_entity",
  },
  {
    parent: "/view/navigation",
    source: "/schema/field",
    kind: "/string",
    key: "archetype_property",
  },
  {
    parent: "/view/navigation",
    source: "/schema/field",
    kind: "/string",
    key: "component",
  },
  {
    parent: "/view/navigation",
    source: "/schema/field",
    kind: "/string",
    key: "field",
  },
  {
    parent: "/view/navigation",
    source: "/schema/field",
    kind: "/string",
    key: "exit",
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
/* STYLE */
COMPONENTS.push(
  {
    parent: "/view/style",
    source: "/schema/field",
    kind: "/entity",
    key: "main_style",
  },
  {
    parent: "/view/style",
    source: "/schema/field",
    kind: "/entity",
    key: "stable_style",
  },
  {
    parent: "/view/style",
    source: "/schema/field",
    kind: "/entity",
    key: "main_display",
  },
  {
    parent: "/view/style",
    source: "/schema/field",
    kind: "/entity",
    key: "stable_display",
  },
);
/* USER_INPUT */
COMPONENTS.push(
  {
    parent: "/view/user_input",
    source: "/schema/field",
    kind: "/entity",
    key: "user_input",
  },
  {
    parent: "/view/user_input",
    source: "/schema/field",
    kind: "/boolean",
    key: "bind",
  },
  {
    parent: "/view/user_input",
    source: "/schema/field",
    kind: "/boolean",
    key: "big",
  },
  {
    parent: "/view/user_input",
    source: "/schema/field",
    kind: "/string",
    key: "mode",
  },
  {
    parent: "/view/user_input",
    source: "/schema/field",
    kind: "/string",
    key: "mouse_target",
  },
);
