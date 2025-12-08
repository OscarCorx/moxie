const SCHEMA = [
  {
    id: "/source_index",
    source: "/index",
    key: "source",
  },
  {
    id: "/parent_index",
    source: "/index",
    key: "parent_id",
  },
  {
    id: "/deck_id_index",
    source: "/index",
    key: "deck_id",
  },
  {
    id: "/initial_load_subscription",
    source: "/subscription",
    key: "source",
    event: "/loaded",
    event_source: "/app",
    command: "/outline",
    unique_key: "id",
  },
  {
    id: "/app_outline_screen_outline",
    source: "/subscription",
    event: "/entered",
    event_source: "/card",
    command: "/outline",
    unique_key: "id",
  },
  {
    id: "/card_outline_detail",
    source: "/subscription",
    event: "/outlined",
    event_source: "/card",
    command: "/detail",
    unique_key: "id",
  }
];
const EXPECTATION_0 = [];
const EXPECTATION_1 = [];
const EXPECTATION_2 = [];
const EXPECTATION_3 = [];
