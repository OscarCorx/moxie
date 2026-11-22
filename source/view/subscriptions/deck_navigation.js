/* PRIMARY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/next",
    message: "/message/navigation/increment_primary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_primary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/previous",
    message: "/message/navigation/increment_primary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, header, true);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_primary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_primary",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* SECONDARY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/forward",
    message: "/message/navigation/increment_secondary",
    routine: (model, header, resultId) => {
      Navigation.incrementSecondary(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_secondary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/back",
    message: "/message/navigation/increment_secondary",
    routine: (model, header, resultId) => {
      Navigation.incrementSecondary(model, header, true);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_secondary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_secondary",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* FACE */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/flip",
    message: "/message/navigation/increment_face",
    routine: (model, header, resultId) => {
      Navigation.incrementFace(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_face",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/reverse",
    message: "/message/navigation/increment_face",
    routine: (model, header, resultId) => {
      Navigation.incrementFace(model, header, true);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_face",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_face",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* CARD */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/draw",
    message: "/message/navigation/increment_card",
    routine: (model, header, resultId) => {
      Navigation.incrementCard(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_card",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/replace",
    message: "/message/navigation/increment_card",
    routine: (model, header, resultId) => {
      Navigation.incrementCard(model, header, true);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_card",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_card",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* DECK */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/enter",
    message: "/message/navigation/increment_deck",
    routine: (model, header, resultId) => {
      Navigation.incrementDeck(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_deck",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/exit",
    message: "/message/navigation/increment_deck",
    routine: (model, header, resultId) => {
      Navigation.incrementDeck(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_deck",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_deck",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
/* USER INPUT */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/return",
    message: "/message/navigation/increment_primary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, header, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_primary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/entry_select",
    message: "/message/navigation/select_primary",
    routine: (model, header, resultId) => {
      Navigation.selectPrimary(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/select_primary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/face/select",
    message: "/message/navigation/select_face",
    routine: (model, header, resultId) => {
      Navigation.selectFace(model, header);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/select_primary",
        thread: header.thread
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/select_primary",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/select_face",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model, header);
    },
  },
);
