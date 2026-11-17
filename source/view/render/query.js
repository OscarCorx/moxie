class Query {
  static fullRender(model) {
    const contents = [];
    this.getPrimary(model, contents);
    this.getSecondary(model, contents);
    this.getWorkspace(model, contents);
    return contents;
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
    const component_ids = model.accessComponentIds(state.entity, state.property);
    console.log("GET WORKSPACE")
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
        content: state.entity,
      },
      {
        id: "/absolute/workspace/header/entry_1",
        source: "/entry",
        parent: "/absolute/workspace/header",
        content: state.property,
      },
      {
        id: "/absolute/workspace/header/entry_2",
        source: "/entry",
        parent: "/absolute/workspace/header",
        content: state.component,
      },
      {
        id: "/absolute/workspace/header/entry_3",
        source: "/entry",
        parent: "/absolute/workspace/header",
        content: state.schema_field,
      },
    );
    for (const field_id of field_ids) {
      const field = model.getComponent(field_id);
      contents.push({
        id: `/absolute/workspace/table/field/${field_id}`,
        source: "/table/field",
        parent: "/absolute/workspace/table/header",
        content: field.key,
        focus: field_id === state.schema_field,
      });
    }
    for (const r in component_ids) {
      const component_id = component_ids[r];
      const component = model.getComponent(component_id);
      contents.push({
        id: `/absolute/workspace/table/row/${r}`,
        source: "/table/row",
        parent: "/absolute/workspace/table",
        row: r,
        focus: component_id == state.component,
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
