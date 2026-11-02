/* STYLE DEFINITION */
COMPONENTS.push(
  {
    style: "/theme/dark_mode",
    source: "/style/definition",
    key: "style_class",
    font_size: "glyph_xs",
    padding: "space_l",
  },
  {
    style: "/style/light_mode",
    source: "/style/definition",
    key: "style_class",
    font_size: "glyph_xs",
    padding: "space_l",
  },
);
/* ARCHETYPE */
COMPONENTS.push(
  {
    source: "/archetype/entity",
    entity: "/display/0",
    archetype: "/archetype/display",
  },
  {
    source: "/archetype/entity",
    entity: "/display/1",
    archetype: "/archetype/display",
  }
)
/* DISPLAY */
COMPONENTS.push(
  {
    display: "/display/0",
    source: "/display/space",
    space_xs: "1",
    space_s: "10",
    space_m: "20",
    space_l: "40",
    space_xl: "80",
  },
  {
    display: "/display/0",
    source: "/display/glyph",
    glyph_xs: "1",
    glyph_s: "2",
    glyph_m: "4",
    glyph_l: "8",
    glyph_xl: "16",
  },
  {
    display: "/display/0",
    source: "/display/layout",
  },
  {
    display: "/display/0",
    source: "/display/grid",
  },
  {
    display: "/display/0",
    source: "/display/color/neutral",
    black: "black",
    white: "white"
  },
  {
    display: "/display/0",
    source: "/display/color/primary",
    primary: "primary",
    primary_highlight: "primary_highlight",
    primary_accent: "primary_accent",
  },
  {
    display: "/display/0",
    source: "/display/color/secondary",
    secondary: "secondary",
    secondary_highlight: "secondary_highlight",
    secondary_accent: "secondary_accent",
  },
  {
    display: "/display/0",
    source: "/display/color/general",
    red: "red",
    red_highlight: "red_highlight",
    red_accent: "red_accent",
    blue: "blue",
    blue_highlight: "blue_highlight",
    blue_accent: "blue_accent",
    yellow: "yellow",
    yellow_highlight: "yellow_highlight",
    yellow_accent: "yellow_accent",
    green: "green",
    green_highlight: "green_highlight",
    green_accent: "green_accent",
    orange: "orange",
    orange_highlight: "orange_highlight",
    orange_accent: "orange_accent",
    purple: "purple",
    purple_highlight: "purple_highlight",
    purple_accent: "purple_accent",
  },
  {
    display: "/display/1",
    source: "/display/space",
  },
  {
    display: "/display/1",
    source: "/display/glyph",
  },
  {
    display: "/display/1",
    source: "/display/layout",
  },
  {
    display: "/display/1",
    source: "/display/grid",
  },
  {
    display: "/display/1",
    source: "/display/color/neutral",
  },
  {
    display: "/display/1",
    source: "/display/color/primary",
  },
  {
    display: "/display/1",
    source: "/display/color/secondary",
  },
  {
    display: "/display/1",
    source: "/display/color/general",
  },
);
