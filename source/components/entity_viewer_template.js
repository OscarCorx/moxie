[
  /* CARD */
  {
    source: "/html/template/card",
    card: "/entity_viewer",
    left_panel: "/select_panel",
    right_panel: "/view_panel",
    render: (self, local, model) => {
      let e = model.getElement("/card_id", "/card");
      STYLE.add(e, STYLE.card);

      /* SELECTION */
      model.getElement("/select_panel", "/card_id");
      e = model.getElement("/select_panel/title", "/select_panel");
      e.textContent = `SELECT PANEL: ${local.component_source}`;
      STYLE.add(e, STYLE.panel);
      const addButton = model.getElement(`/select_entry/add`, "/select_panel");
      addButton.textContent = "ADD +";
      addButton.addEventListener("click", () => {
        PROCESS.model.emit([
          {
            event: "/create",
            entity: local.entity,
            component_source: local.component_source,
          },
        ]);
      });

      const columnId = "/select_panel/selection";
      model.getElement(columnId, "/select_panel");
      const components = model.getComponent(
        local.entity,
        local.component_source,
      );
      let component = components[0];
      for (const c of components) {
        if (c.id === local.component_id) component = c;
        e = model.getElement(`/select_entry/${c.id}`, columnId);
        e.textContent = c.id;
        e.addEventListener("click", () => {
          PROCESS.model.emit([
            {
              event: "/select",
              component_id: c.id,
            },
          ]);
        });
      }

      /* VIEWER */
      STYLE.add(model.getElement("/view_panel", "/card_id"), STYLE.panel);

      e = model.getElement("/view_panel/title", "/view_panel");
      e.textContent = "VIEW PANEL";

      e = model.getElement("/view_panel/selection", "/view_panel");
      STYLE.add(e, STYLE.entry_column);
      const fields = model.getComponent(
        local.component_source,
        "/schema/field",
      );
      for (const f of fields) {
        const entryId = `/view_entry/${f.id}`;
        e = model.getElement(entryId, "/view_panel/selection");
        STYLE.add(e, STYLE.entry);

        e = model.getElement(`/view_entry/${f.id}/icon`, entryId);
        STYLE.add(e, STYLE.entry_part);
        e.textContent = "I";

        e = model.getElement(`/view_entry/${f.id}/key`, entryId);
        STYLE.add(e, STYLE.entry_part);
        e.textContent = f.key;

        e = model.getElement(`/view_entry/${f.id}/value`, entryId, "input");
        STYLE.add(e, STYLE.entry_part);
        e.setAttribute("value", component[f.key]);
        e.addEventListener("input", (e) => {
          PROCESS.model.emit([
            {
              event: "/update",
              component_id: component.id,
              key: f.key,
              value: e.target.value,
            },
          ]);
        });
      }
    },
  },
].forEach((c) => PROCESS.model.set(c));
