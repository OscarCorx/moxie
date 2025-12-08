const HUD = [
  {
    id: "/app",
    source: "/app",
  },
  {
    id: "/navigation",
    source: "/hud",
    parent_id: "/app",
    top: "1vh",
    left: "1vw",
    height: "10vh",
    width: "98vw",
  },
  {
    id: "/control",
    source: "/hud",
    parent_id: "/app",
    top: "89vh",
    left: "1vw",
    height: "10vh",
    width: "98vw",
  },
];

const NAVIGATION = [
  {
    id: "/expectations_deck",
    source: "/deck",
    card_index: 0,
  },
  {
    id: "/expectation_card_0",
    source: "/card",
    deck_id: "/expectations_deck",
    screen_index: 2,
    screens: [
      "/expectation_screen",
      "/assertion_screen",
      "/statement_screen",
      "/message_screen",
    ],
    channels_id: "/",
    navigation_id: "/navigation_default",
    control_id: "/control_default",
  },
  {
    id: "/expectation_card_1",
    source: "/card",
    deck_id: "/expectations_deck",
    screen_index: 0,
    screens: [
      "/expectation_screen",
      "/assertion_screen",
      "/statement_screen",
      "/message_screen",
    ],
    channels_id: "/",
    navigation_id: "/navigation_default",
    control_id: "/control_default",
  },
  {
    id: "/expectation_card_2",
    source: "/card",
    deck_id: "/expectations_deck",
    screen_index: 0,
    screens: [
      "/expectation_screen",
      "/assertion_screen",
      "/statement_screen",
      "/message_screen",
    ],
    channels_id: "/",
    navigation_id: "/navigation_default",
    control_id: "/control_default",
  },
];

const SCREENS = [
  {
    id: "/expectations_list",
    source: "/screen",
  },
  {
    id: "/expectation_screen",
    source: "/screen",
  },
  {
    id: "/assertion_screen",
    source: "/screen",
  },
  {
    id: "/statement_screen",
    source: "/screen",
  },
  {
    id: "/message_screen",
    source: "/screen",
  },
];

const COMPONENTS = [
  {
    id: "/exit",
    source: "/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Exit",
    event: "/exit",
  },
  {
    id: "/enter",
    source: "/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Enter",
    event: "/enter",
  },
  {
    id: "/previous",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Previous",
    event: "/previous",
 },
  {
    id: "/next",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Next",
    event: "/next",
},
  {
    id: "/back",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Back",
    event: "/back",
 },
  {
    id: "/forward",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Forward",
    event: "/back",
 },
  {
    id: "/flip",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Flip",
    event: "/flip",
 },
  {
    id: "/reverse",
    source: "/button_input",
    parent_id: "/control_default",
    group_index: 0,
    title: "Reverse",
    event: "/reverse",
 },
  {
    id: "/draw",
    source: "/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Draw",
    event: "/draw",
 },
  {
    id: "/replace",
    source: "/button_input",
    parent_id: "/navigation_default",
    group_index: 0,
    title: "Replace",
    event: "/replace",
 },
];
