const HUD = [
  {
    id: "/app",
    source: "/app",
  },
  {
    id: "/navigation",
    source: "/misenplace/hud",
  },
  {
    id: "/screen",
    source: "/misenplace/hud",
  },
  {
    id: "/control",
    source: "/misenplace/hud",
  },
];

const DECKS = [
  {
    id: "/dashboards_deck",
    source: "/misenplace/deck",
    cards: [],
    card_index: 0,
    screen_index: 0,
    component_index: 0,
    focus_index: 0,
  },
  {
    id: "/expectations_deck",
    source: "/misenplace/deck",
    cards: [],
    card_index: 0,
    screen_index: 0,
    component_index: 0,
    focus_index: 0,
  },
];

const CARDS = [
  {
    id: "/expectations_0",
    source: "/misenplace/card",
    deck_id: "/",
    primary: "/",
    secondary: "/",
  },
  {
    id: "/expectation_0",
    source: "/misenplace/card",
    deck_id: "/",
    primary: "/",
    secondary: "/",
  },
  {
    id: "/expectation_1",
    source: "/misenplace/card",
    deck_id: "/",
    primary: "/",
    secondary: "/",
  },
  {
    id: "/expectation_2",
    source: "/misenplace/card",
    deck_id: "/",
    card_id: "/",
    primary: "/",
    secondary: "/",
  },
];

const FORMS = [
  {
    id: "/expectations_form",
    source: "/misenplace/form",
    children: ["/expectations_screen"],
    navigation_id: "/navigation_default",
    control_id: "/control_default",
  },
  {
    id: "/expectation_form",
    source: "/misenplace/form",
    children: ["/expectation_screen"],
    navigation_id: "/",
    control_id: "/",
  },
  {
    id: "/assertion_form",
    source: "/misenplace/form",
    children: ["/expectation_screen", "/assertion_screen"],
    navigation_id: "/",
    control_id: "/",
  },
  {
    id: "/statement_form",
    source: "/misenplace/form",
    children: ["/expectation_screen", "/assertion_screen", "/statement_screen"],
    navigation_id: "/",
    control_id: "/",
  },
  {
    id: "/message_form",
    source: "/misenplace/form",
    children: [
      "/expectation_screen",
      "/assertion_screen",
      "/statement_screen",
      "/message_screen",
    ],
    navigation_id: "/",
    control_id: "/",
  },
];

const SCREENS = [
  {
    id: "/expectations_list",
    source: "/misenplace/screen",
    children: [],
  },
  {
    id: "/expectation_screen",
    source: "/misenplace/screen",
    children: [],
  },
  {
    id: "/assertion_screen",
    source: "/misenplace/screen",
    children: [],
  },
  {
    id: "/statement_screen",
    source: "/misenplace/screen",
    children: [],
  },
  {
    id: "/message_screen",
    source: "/misenplace/screen",
    children: [],
  },
];

const COMPONENTS = [
  {
    id: "/exit",
    source: "/misenplace/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Exit",
    event: "/exit",
  },
  {
    id: "/enter",
    source: "/misenplace/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Enter",
    event: "/enter",
  },
  {
    id: "/previous",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Previous",
    event: "/previous",
  },
  {
    id: "/next",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Next",
    event: "/next",
  },
  {
    id: "/back",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Back",
    event: "/back",
  },
  {
    id: "/forward",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Forward",
    event: "/back",
  },
  {
    id: "/flip",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Flip",
    event: "/flip",
  },
  {
    id: "/reverse",
    source: "/misenplace/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Reverse",
    event: "/reverse",
  },
  {
    id: "/draw",
    source: "/misenplace/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Draw",
    event: "/draw",
  },
  {
    id: "/replace",
    source: "/misenplace/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Replace",
    event: "/replace",
  },
  {
    id: "/first",
    source: "/misenplace/button_input",
    parent_id: "/expectation_screen",
    group_index: 0,
    title: "Replace",
    event: "/replace",
  },
];

const MISENPLACE_COMPONENTS = [
  ...HUD,
  ...DECKS,
  ...CARDS,
  ...FORMS,
  ...SCREENS,
  ...COMPONENTS,
];
