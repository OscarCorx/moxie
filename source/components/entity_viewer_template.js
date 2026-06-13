[
  {
    source: "/html/template/card",
    card: "/entity_viewer",
    left_panel: "/select_panel",
    right_panel: "/view_panel",
    outline: (self, model, head) => {
      const card = model.get(self.card, "/html/template/card");
      model.getElement(self.card, "/card");
      let e = model.getElement(`${self.card}/title`, self.card);
      e.textContent = self.card;
      const leftPanel = model.get(card.left_panel, "/html/template/panel");
      leftPanel.outline(leftPanel, model, head);
      const rightPanel = model.get(card.right_panel, "/html/template/panel");
      rightPanel.outline(rightPanel, model, head);
    },
    detail: (self, model) => {
      console.log("detail", self.left_panel, self.right_panel);
    },
  },
  {
    source: "/html/template/panel",
    panel: "/select_panel",
    card: "/entity_viewer",
    outline: (self, model, head) => {
      model.getElement(self.panel, self.card);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      e.textContent = self.panel;
      for (const c of model.get(head.entity, head.component_source)) {
        e = model.getElement(`${head.component_source}/${c.key}`, self.panel);
        e.textContent = c.key;
      }
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  {
    source: "/html/template/panel",
    panel: "/view_panel",
    card: "/entity_viewer",
    outline: (self, model, head) => {
      model.getElement(self.panel, self.card, head);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      e.textContent = self.panel;
      const fields = model.get(head.component_source, "/schema/field");
      for (const c of fields) {
        e = model.getElement(`${head.component_source}/${c.key}`, self.panel);
        e.textContent = c.key;
      }
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  {
    source: "/html/template/entry",
    panel: "/select_panel",
    outline: (self, model, head) => {
      model.getElement(self.panel, self.card, head);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      e.textContent = self.panel;
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  {
    source: "/html/template/entry",
    panel: "/view_panel",
    outline: (self, model, head) => {
      model.getElement(self.panel, self.card, head);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      e.textContent = self.panel;
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
].forEach((c) => PROCESS.model.set(c));
