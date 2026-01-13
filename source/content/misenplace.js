const ENTITIES = [
  {
    id: "/expectation_form",
    application: "/misenplace",
    source: "/form",
  },
  {
    id: "/assertion_form",
    application: "/misenplace",
    source: "/form",
  },
  {
    id: "/statement_form",
    application: "/misenplace",
    source: "/form",
  },
  {
    id: "/expectation_screen",
    application: "/misenplace",
    source: "/screen",
  },
  {
    id: "/assertion_screen",
    application: "/misenplace",
    source: "/screen",
  },
  {
    id: "/statement_screen",
    application: "/misenplace",
    source: "/screen",
  },
  {
    id: "/expectation_assertion_component",
    application: "/misenplace",
    source: "/component",
  },
  {
    id: "/assertion_select_component",
    application: "/misenplace",
    source: "/component",
  },
  {
    id: "/assertion_statement_component",
    application: "/misenplace",
    source: "/component",
  },
  {
    id: "/statement_select_component",
    application: "/misenplace",
    source: "/component",
  },
  {
    id: "/statement_message_component",
    application: "/misenplace",
    source: "/component",
  },
];
const FORMS = [
  {
    application: "/misenplace",
    source: "/form/contains/screen",
    form_id: "/expectation_form",
    screen_id: "/expectation_screen",
  },
  {
    application: "/misenplace",
    source: "/form/contains/screen",
    form_id: "/assertion_form",
    screen_id: "/expectation_screen",
  },
  {
    application: "/misenplace",
    source: "/form/contains/screen",
    form_id: "/assertion_form",
    screen_id: "/assertion_screen",
  },
  {
    application: "/misenplace",
    source: "/form/contains/screen",
    form_id: "/statement_form",
    screen_id: "/expectation_screen",
  },
  {
    application: "/misenplace",
    source: "/form/contains/screen",
    form_id: "/statement_form",
    screen_id: "/assertion_screen",
  },
];
const SCREENS = [
  {
    application: "/misenplace",
    source: "/screen/contains/component",
    screen_id: "/expectation_screen",
    component_id: "/expectation_assertion_component",
  },
  {
    application: "/misenplace",
    source: "/screen/contains/component",
    screen_id: "/expectation_screen",
    component_id: "/assertion_select_component",
  },
  {
    application: "/misenplace",
    source: "/screen/contains/component",
    screen_id: "/assertion_screen",
    component_id: "/assertion_statement_component",
  },
  {
    application: "/misenplace",
    source: "/screen/contains/component",
    screen_id: "/assertion_screen",
    component_id: "/statement_select_component",
  },
  {
    application: "/misenplace",
    source: "/screen/contains/component",
    screen_id: "/statement_screen",
    component_id: "/statement_message_component",
  },
];

const COMPONENTS = [
  {
    application: "/misenplace",
    source: "/component/markdown_entry",
    component_id: "/expectation_assertion_component",
  },
  {
    application: "/misenplace",
    source: "/component/markdown_entry",
    component_id: "/assertion_select_component",
  },
  {
    application: "/misenplace",
    source: "/component/markdown_entry",
    component_id: "/assertion_statement_component",
  },
  {
    application: "/misenplace",
    source: "/component/markdown_entry",
    component_id: "/statement_select_component",
  },
  {
    application: "/misenplace",
    source: "/component/markdown_entry",
    component_id: "/statement_message_component",
  },
];

CONTENTS.push(...ENTITIES, ...FORMS, ...SCREENS, ...COMPONENTS);
