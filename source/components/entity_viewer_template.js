[
  /* CARD */
  {
    source: "/html/template/card",
    card: "/entity_viewer",
    left_panel: "/select_panel",
    right_panel: "/view_panel",
    outline: (self, local, model) => {
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
      leftPanel.outline(leftPanel, local, model);
      rightPanel.outline(rightPanel, local, model);
    },
    detail: (self, local, model) => {
      const leftPanel = model.getComponent(
        self.left_panel,
        "/html/template/panel",
      );
      const rightPanel = model.getComponent(
        self.right_panel,
        "/html/template/panel",
      );
      leftPanel.detail(leftPanel, local, model);
      rightPanel.detail(rightPanel, local, model);
    },
  },
  /* SELECT PANEL */
  {
    source: "/html/template/panel",
    panel: "/select_panel",
    card: "/entity_viewer",
    outline: (self, local, model) => {
      // ADD PANEL STYLE
      STYLE.add(model.getElement(self.panel, self.card), STYLE.element);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      // ADD TITLE STYLE
      STYLE.add(e, STYLE.element);
      e = model.getElement(`${self.panel}/select`, self.panel);
      // ADD SELECT STYLE
      STYLE.add(e, STYLE.element);
      const entry = model.getComponent(self.panel, "/html/template/entry");
      for (const c of model.getComponent(
        local.entity,
        local.component_source,
      )) {
        entry.outline(entry, c, model);
      }
    },
    detail: (self, local, model) => {
      model.getElement(`${self.panel}/title`, self.panel).textContent =
        `SELECT: ${local.component_source}`;
    },
  },
  /* VIEW PANEL */
  {
    source: "/html/template/panel",
    panel: "/view_panel",
    card: "/entity_viewer",
    outline: (self, local, model) => {
      // ADD PANEL STYLE
      STYLE.add(model.getElement(self.panel, self.card), STYLE.element);
      let e = model.getElement(`${self.panel}/title`, self.panel);
      // ADD TITLE STYLE
      STYLE.add(e, STYLE.element);
      e = model.getElement(`${self.panel}/select`, self.panel);
      // ADD SELECT STYLE
      STYLE.add(e, STYLE.element);
      const entry = model.getComponent(self.panel, "/html/template/entry");
      for (const c of model.getComponent(
        local.component_source,
        "/schema/field",
      )) {
        entry.outline(entry, c, model);
      }
    },
    detail: (self, local, model) => {
      model.getElement(`${self.panel}/title`, self.panel).textContent =
        `VIEWER: ${local.component_source}`;
    },
  },
  /* SELECT ENTRY */
  {
    source: "/html/template/entry",
    panel: "/select_panel",
    outline: (self, local, model) => {
      let e = model.getElement(
        `${self.panel}/${local.id}`,
        `${self.panel}/select`,
      );
      e.textContent = local.key;
    },
    detail: (self, local, model) => {
      console.log("detail", self.panel);
    },
  },
  /* VIEW ENTRY */
  {
    source: "/html/template/entry",
    panel: "/view_panel",
    outline: (self, local, model) => {
      let e = model.getElement(
        `${self.panel}/${local.id}`,
        `${self.panel}/select`,
      );
      e.textContent = `ICON: [${local.icon}] KIND: [${local.kind}] KEY: [${local.key}] DESCRIPTION: [${local.description}] `;
    },
    detail: (self, local, model) => {
      console.log("detail", self.panel);
    },
  },
].forEach((c) => PROCESS.model.set(c));
