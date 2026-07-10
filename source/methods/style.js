function style(element, style) {
  Object.assign(element.style, style);
}

const STYLE = {
  bound_width: 96,
  bound_height: 10,
  space_xs: 2,
  space_s: 2,
  space_m: 2,
  space_l: 2,
  space_xl: 2,
  glyph_xs: 2,
  glyph_s: 2,
  glyph_m: 2,
  glyph_l: 2,
  glyph_xl: 2,
  border_s: 1,
  border_m: 2,
  border_l: 3,
  white: "#ffffff",
  lightest: "#e6e6e6",
  lighter: "#b3b3b3",
  light: "#999999",
  neutral: "#808080",
  dark: "#595959",
  darker: "#404040",
  darkest: "#262626",
  black: "#000000",
  accent_light: "",
  accent: "",
  accent_dark: "",
  primary_light: "#664400",
  primary: "#4d3300",
  primary_dark: "#332200",
  secondary_light: "#ffffff",
  secondary: "#ffffe6",
  secondary_dark: "#ffffcc",
  red_light: "#ffb3b3",
  red: "#ff0000",
  red_dark: "#cc0000",
  blue_light: "#b3b3ff",
  blue: "#0000ff",
  blue_dark: "#0000cc",
  yellow_light: "#ffffb3",
  yellow: "#ffff00",
  yellow_dark: "#cccc00",
  green_light: "#b3ffcc",
  green: "#00ff55",
  green_dark: "#009933",
  purple_light: "#e0b3ff",
  purple: "#9900ff",
  purple_dark: "#5c0099",
  orange_light: "#ffe0b3",
  orange: "#ff9900",
  orange_dark: "#cc7a00",
}
/* LAYOUT */
const L = {
  element: {
    id: "/element",
    source: "/style/layout",
    border: "1px solid black",
  },
  bound_top: {
    position: "absolute",
    left: "1vw",
    top: "2vh",
    height: "10vh",
    width: "98vw",
    border: "1px solid black",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  bound_bottom: {
    position: "absolute",
    left: "1vw",
    top: "88vh",
    height: "10vh",
    width: "98vw",
    border: "1px solid black",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  card: {
    position: "absolute",
    left: "1vw",
    top: "14vh",
    height: "72vh",
    width: "98vw",
    display: "grid",
    "grid-template-columns": "8vw",
    "grid-template-rows": "8vh",
    gap: "20px",
  },
  bound_panel: {
    flex: "auto",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  bound_left_corner: {
    display: "flex",
    flex: "auto",
  },
  bound_right_corner: {
    display: "flex",
    flex: "auto",
  },
  bound_gap: {
    display: "flex",
    flex: "auto"
  },
  bound_center: {
    display: "flex",
    flex: "auto"
  },
  bound_entry: {
    flex: "auto"
  },
  panel: {
    flex: "auto",
    width: "45vw",
  },
  entry_column: {
    display: "flex",
    "flex-direction": "column",
  },
  entry: {
    display: "flex",
    "flex-direction": "row",
    flex: "auto",
  },
  entry_part: {
    flex: "auto",
  },
  component_panel: {
    border: "1px solid black",
    "grid-column-start": 1,
    "grid-column-end": 4,
    "grid-row-start": 1,
    "grid-row-end": 4,
  },
  entity_panel: {
    border: "1px solid black",
    "grid-column-start": 4,
    "grid-column-end": 12,
    "grid-row-start": 1,
    "grid-row-end": 4,
  },
  select_panel: {
    border: "1px solid black",
    "grid-column-start": 1,
    "grid-column-end": 4,
    "grid-row-start": 4,
    "grid-row-end": 12,
  },
  view_panel_0: {
    border: "1px solid black",
    "grid-column-start": 4,
    "grid-column-end": 8,
    "grid-row-start": 4,
    "grid-row-end": 12,
    display: "flex",
    "flex-direction": "column",
  },
  view_panel_1: {
    border: "1px solid black",
    "grid-column-start": 8,
    "grid-column-end": 12,
    "grid-row-start": 4,
    "grid-row-end": 12,
    display: "flex",
    "flex-direction": "column",
  },
  view_entry: {
    flex: "auto",
    display: "flex"
  },
  view_part: {
    flex: "auto"
  },
  focus: {
    border: "1px solid red",
  },
};
/* SPACE */
const S = {
  text_title: "",
  text_headline: "",
  text_emphasis: "",
  text_active: "",
  text_passive: "",
};
/* THEME */
const T = {
  text_title: "",
  text_headline: "",
  text_emphasis: "",
  text_active: "",
  text_passive: "",
  element: {
    id: "/element",
    source: "/style/layout",
    border: "1px solid black",
  },
  focus: {
    border: "1px solid red",
  },
};
