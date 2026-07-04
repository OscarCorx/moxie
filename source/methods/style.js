function style(element, style) {
  Object.assign(element.style, style);
}

const P = {
  element: {
    border: "1px solid black",
  },
  card: {
    display: "flex",
    "flex-direction": "row",
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
  card: {
    display: "grid",
    "grid-template-columns": "8vw",
    "grid-template-rows": "8vh",
    gap: "10px",
  },
  component_panel: {
    border: "1px solid black",
    "grid-column-start": 0,
    "grid-column-end": 4,
    "grid-row-start": 0,
    "grid-row-end": 4,
  },
  entity_panel: {
    border: "1px solid black",
    "grid-column-start": 4,
    "grid-column-end": 12,
    "grid-row-start": 0,
    "grid-row-end": 4,
  },
  select_panel: {
    border: "1px solid black",
    "grid-column-start": 0,
    "grid-column-end": 4,
    "grid-row-start": 4,
    "grid-row-end": 12,
  },
  view_panel: {
    border: "1px solid black",
    "grid-column-start": 4,
    "grid-column-end": 12,
    "grid-row-start": 4,
    "grid-row-end": 12,
    display: "flex",
    "flex-direction": "column",
  },
  view_entry: {
    fled: "auto",
  },
};

const S = {};
