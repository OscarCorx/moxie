//"/message/navigation/component"
COMPONENTS.push(
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/navigation/component",
    action: "/change_component",
    routine: (model, message, resultId) => {
      Navigation.changeComponent(model, message.component);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/navigation/component",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/next",
    action: "/increment_primary",
    routine: (model, message, resultId) => {
      Navigation.incrementPrimary(model);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/next",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/previous",
    action: "/increment_primary",
    routine: (model, message, resultId) => {
      Navigation.incrementPrimary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/previous",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/forward",
    action: "/increment_secondary",
    routine: (model, message, resultId) => {
      Navigation.incrementSecondary(model);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/forward",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/back",
    action: "/increment_secondary",
    routine: (model, message, resultId) => {
      Navigation.incrementSecondary(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/back",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/flip",
    action: "/increment_face",
    routine: (model, message, resultId) => {
      Navigation.incrementFace(model);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/flip",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/reverse",
    action: "/increment_face",
    routine: (model, message, resultId) => {
      Navigation.incrementFace(model, false);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/flip",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/draw",
    result: "/message/draw",
    action: "/increment_card",
    routine: (model, message, resultId) => {
      Navigation.incrementCard(model);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/replace",
    result: "/message/replace",
    action: "/increment_card",
    routine: (model, message, resultId) => {
      Navigation.incrementCard(model, false);
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/exit",
    action: "/change_component",
    routine: (model, message, resultId) => {
      // Navigation.incrementEntity(model, true);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/exit",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/message/drag/start",
    routine: (model, message, resultId) => {
      Navigation.dragStart(model, message[0]);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/drag",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/drag/move",
    routine: (model, message, resultId) => {
      Navigation.dragMove(model, message[0]);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/drag",
      });
    },
  },
  {
    source: "/procedure/subscription",
    procedure: "/navigation",
    event: "/event/drag/stop",
    routine: (model, message, resultId) => {
      Navigation.dragStop(model, message[0]);
      model.setComponent({
        source: "/message/header",
        result: resultId,
        event: "/event/drag",
      });
    },
  },
);
