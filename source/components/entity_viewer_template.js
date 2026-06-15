[
  /* CARD */
  {
    source: "/html/template/card",
    card: "/entity_viewer",
    left_panel: "/select_panel",
    right_panel: "/view_panel",
    outline: (self, model, head) => {
      const card = model.getComponent(self.card, "/html/template/card");
      // ADD CARD LAYOUT
      STYLE.add(model.getElement(self.card, "/card"), STYLE.element);
      const leftPanel = model.getComponent(
        card.left_panel,
        "/html/template/panel",
      );
      const rightPanel = model.getComponent(
        card.right_panel,
        "/html/template/panel",
      );
      leftPanel.outline(leftPanel, model, head);
      // rightPanel.outline(rightPanel, model, head);
    },
    detail: (self, model, head) => {
      const card = model.getComponent(self.card, "/html/template/card");
      const leftPanel = model.getComponent(
        card.left_panel,
        "/html/template/panel",
      );
      const rightPanel = model.getComponent(
        card.right_panel,
        "/html/template/panel",
      );
      leftPanel.detail(leftPanel, model, head);
      rightPanel.detail(rightPanel, model, head);
    },
  },
  /* SELECT PANEL */
  {
    source: "/html/template/panel",
    panel: "/select_panel",
    card: "/entity_viewer",
    outline: (self, model, head) => {
      // ADD PANEL STYLE
      STYLE.add(model.getElement(self.panel, self.card), STYLE.element);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      e.textContent = `TITLE: ${head.component_source}`;
      // ADD TITLE STYLE
      STYLE.add(e, STYLE.element);
      e = model.getElement(`${self.panel}/select`, self.panel);
      // ADD SELECT STYLE
      STYLE.add(e, STYLE.element);
      const entry = model.getComponent(self.panel, "/html/template/entry");
      for (const c of model.getComponent(head.entity, head.component_source)) {
        entry.outline(entry, c, model, head);
      }
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  /* VIEW PANEL */
  {
    source: "/html/template/panel",
    panel: "/view_panel",
    card: "/entity_viewer",
    outline: (self, model, head) => {
      model.getElement(self.panel, self.card, head);
      let e = model.getComponent(`${self.panel}/title`, self.panel);
      e.textContent = self.panel;
      const fields = model.getComponent(head.component_source, "/schema/field");
      for (const c of fields) {
        e = model.getElement(`${head.component_source}/${c.key}`, self.panel);
        e.textContent = c.key;
      }
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  /* SELECT ENTRY */
  {
    source: "/html/template/entry",
    panel: "/select_panel",
    outline: (self, component, model, head) => {
      let e = model.getElement(
        `${self.panel}/${component.id}`,
        `${self.panel}/select`,
      );
      e.textContent = component.key;
    },
    detail: (self, model) => {
      console.log("detail", self.panel);
    },
  },
  /* VIEW ENTRY */
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
