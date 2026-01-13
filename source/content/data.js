const PROCEDURES = [
  {
    id: "/initialize_app",
    source: "/procedure",
    application: "/misenplace",
    event_source: "/app",
  },
  {
    id: "/start",
    source: "/procedure/state",
    procedure_id: "/initialize_app",
  },
  {
    id: "/outline",
    source: "/procedure/state",
    procedure_id: "/initialize_app",
  },
  {
    source: "/procedure/transition",
    procedure_id: "/initialize_app",
    prior_state_id: "/start",
    post_state_id: "/outline",
  },
  {
    source: "/procedure/transition",
    procedure_id: "/initialize_app",
    prior_state_id: "/outline",
    post_state_id: "/detail",
  },
  {
    source: "/procedure/transition",
    procedure_id: "/initialize_app",
    prior_state_id: "/detail",
    post_state_id: "/complete",
  },
  {
    source: "/procedure/query",
    procedure_id: "/initialize_app",
    state: "/outline",
    action: "/outline",
  },
  {
    source: "/procedure/query",
    procedure_id: "/initialize_app",
    state: "/detail",
    action: "/detail",
  },
];

const CONTENTS = [...PROCEDURES];
