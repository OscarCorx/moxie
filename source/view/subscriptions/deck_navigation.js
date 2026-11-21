/* PRIMARY */
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/next",
    message: "/message/navigation/increment_primary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_primary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/previous",
    message: "/message/navigation/increment_primary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_primary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_primary",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model);
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
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_secondary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/back",
    message: "/message/navigation/increment_secondary",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_secondary",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_secondary",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model);
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
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_face",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/reverse",
    message: "/message/navigation/increment_face",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_face",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_face",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model);
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
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_card",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/replace",
    message: "/message/navigation/increment_card",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_card",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_card",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model);
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
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_deck",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/user_input/exit",
    message: "/message/navigation/increment_deck",
    routine: (model, header, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/increment_deck",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/render",
    event: "/event/navigation/increment_deck",
    message: "/message/render/full",
    routine: (model, header, resultId) => {
      Render.full(model);
    },
  },
);
