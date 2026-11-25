/* PRIMARY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/next",
    message: "/message/navigation/user_interface",
    routine: (m, h, r) => {
      DeckNavigation.incrementPrimary(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/user_interface",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/previous",
    message: "/message/navigation/user_interface",
    routine: (m, h, r) => {
      DeckNavigation.incrementPrimary(m, h, true);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/user_interface",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/user_interface",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* SECONDARY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/forward",
    message: "/message/navigation/increment_secondary",
    routine: (m, h, r) => {
      DeckNavigation.incrementSecondary(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_secondary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/back",
    message: "/message/navigation/increment_secondary",
    routine: (m, h, r) => {
      DeckNavigation.incrementSecondary(m, true);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_secondary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/increment_secondary",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* FACE */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/flip",
    message: "/message/navigation/increment_face",
    routine: (m, h, r) => {
      DeckNavigation.incrementFace(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_face",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/reverse",
    message: "/message/navigation/increment_face",
    routine: (m, h, r) => {
      DeckNavigation.incrementFace(m, true);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_face",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/increment_face",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* CARD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/draw",
    message: "/message/navigation/increment_card",
    routine: (m, h, r) => {
      DeckNavigation.incrementCard(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_card",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/replace",
    message: "/message/navigation/increment_card",
    routine: (m, h, r) => {
      DeckNavigation.incrementCard(m, true);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_card",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/increment_card",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* DECK */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/enter",
    message: "/message/navigation/increment_deck",
    routine: (m, h, r) => {
      DeckNavigation.incrementDeck(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_deck",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/exit",
    message: "/message/navigation/increment_deck",
    routine: (m, h, r) => {
      DeckNavigation.incrementDeck(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/increment_deck",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/increment_deck",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
/* USER INPUT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/return",
    message: "/message/navigation/user_interface",
    routine: (m, h, r) => {
      DeckNavigation.incrementPrimary(m, false);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/user_interface",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/user_input/entry_select",
    message: "/message/navigation/select_primary",
    routine: (m, h, r) => {
      DeckNavigation.selectPrimary(m, h);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/select_primary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/navigation",
    event: "/event/face/select",
    message: "/message/navigation/select_face",
    routine: (m, h, r) => {
      DeckNavigation.selectFace(m, h);
      m.setComponent({
        source: "/message/header",
        result: r,
        event: "/event/navigation/select_primary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/select_primary",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/user_interface",
    system: "/render",
    event: "/event/navigation/select_face",
    message: "/message/render/full",
    routine: (m, h, r) => {
      Render.full(m, h);
    },
  },
);
