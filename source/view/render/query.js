class Query {
  static fullRender(model) {
    const contents = [];
    this.getPrimary(model, contents);
    this.getSecondary(model, contents);
    this.getWorkspace(model, contents);
    return contents;
  }
  /* CONTROLS AND WINDOWS */
  static getLayout(model, contents) {
    // const element_ids = model.accessComponentIds("/current", "/view/absolute");
    // for (const id of element_ids) {
    //   const c = model.getComponent(id);
    //   if (!c.active) continue;
    //   const content = {
    //     id: c.id,
    //     source: "/absolute",
    //     handle: c.handle,
    //     top: `${c.y}px`,
    //     left: `${c.x}px`,
    //   };
    //   if (c.width) {
    //     content.width = c.width;
    //     content.height = c.height;
    //   }
    //   contents.push(content);
    // }
  }

  static getAbsolute(model, element_id) {
    const c = model.getComponent(element_id);
    return {
      id: c.id,
      source: "/absolute",
      handle: true,
      top: `${c.y}px`,
      left: `${c.x}px`,
    };
  }
  /* NAVIGATION, SETTINGS, ACTIONS */
  static getControls(model) {

  }
  /* WINDOWS */
  /* PRIMARY USER TOOLS */
  static getPrimary(model, contents) {
    const c = model.getComponent("/absolute/primary");
    if (!c.active) return;
    contents.push(
      // {
      //   id: "/absolute/primary",
      //   source: "/panel",
      //   parent: "/app",
      //   content: "Primary",
      // },
      // {
      //   id: "/absolute/primary/panel",
      //   source: "/panel",
      //   parent: "/absolute/primary",
      //   content: "Primary Panel",
      // },
    );
  }
  /* AUGMENTS PRIMARY TOOLS */
  static getSecondary(model, contents) {
    const c = model.getComponent("/absolute/secondary");
    if (!c.active) return;
    contents.push(
      // {
      //   id: "/absolute/secondary",
      //   source: "/panel",
      //   parent: "/app",
      //   content: "Secondary",
      // },
      // {
      //   id: "/absolute/secondary/panel",
      //   source: "/panel",
      //   parent: "/absolute/secondary",
      //   content: "Secondary Panel",
      // },
    );
  }
  /* TOOLS INDEPENDENT OF CURRENT WORK */
  static getAlternate(model) {

  }
  /* ACTUAL WORK PRODUCT */
  static getWorkspace(model, contents) {
    const state = model.accessComponent("/current", "/view/navigation");
    const archetype_entity = model.accessComponent(state.entity, "/archetype/entity");
    const property_ids = model.accessComponentIds(archetype_entity.archetype, "/archetype/property")
    const property = model.getComponent(property_ids[0]);
    const component_ids = model.accessComponentIds(state.entity, property.property);
    const field_ids = model.accessComponentIds(state.property, "/schema/field");
    contents.push(
      {
        id: "/absolute/workspace",
        source: "/absolute",
        parent: "/app",
        content: "Workspace",
      },
      {
        id: "/absolute/workspace/panel",
        source: "/panel",
        parent: "/absolute/workspace",
        header: "/absolute/workspace/header",
        body: "/absolute/workspace/body",
        footer: "/absolute/workspace/footer",
        tabs: "/absolute/workspace/tabs",
        tab: "/absolute/workspace/tab",
      },
      {
        id: "/absolute/workspace/table",
        source: "/table",
        parent: "/absolute/workspace/body",
        table_header: "/absolute/workspace/table/header",
      },
      {
        id: "/absolute/workspace/header/entry_0",
        source: "/entry",
        parent: "/absolute/workspace/header",
        content: "0",
      },
      {
        id: "/absolute/workspace/header/entry_1",
        source: "/entry",
        parent: "/absolute/workspace/header",
        content: "1",
      },
    );
    let r = 0;
    for (const r in component_ids) {
      const component_id = component_ids[r];
      const component = model.getComponent(component_id);
      contents.push({
        id: `/absolute/workspace/table/row/${r}`,
        source: "/table/row",
        parent: "/absolute/workspace/table",
        row: r,
      });

      for (const c in field_ids) {
        const field_id = field_ids[c];
        const field = model.getComponent(field_id)
        contents.push({
          id: `/absolute/workspace/table/row/${r}/${c}`,
          source: "/table/cell",
          parent: `/absolute/workspace/table/row/${r}`,
          content: component[field.key],
        });
      }
    }
    contents.push({
      id: "/absolute/workspace/tab/new",
      source: "/button",
      parent: "/absolute/workspace/tab",
      content: "NEW TAB",
      active: "focus",
    });
    for (const i in property_ids) {
      const property_id = property_ids[i];
      const archetype_property = model.getComponent(property_id);
      contents.push({
        id: `/absolute/workspace/tabs/${i}`,
        source: "/tab",
        parent: "/absolute/workspace/tabs",
        content: archetype_property.property,
        active: "passive",
      });
    }
  }
}
