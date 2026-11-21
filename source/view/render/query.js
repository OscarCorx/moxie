class Query {
  static fullRender(model, header) {
    const contents = [];
    this.getWorkspace(model, header, contents);
    this.getPrimary(model, header, contents);
    this.getSecondary(model, header, contents);
    return contents;
  }

  static getAbsolute(model, element_id) {
    const c = model.getComponent(element_id);
    return {
      id: c.id,
      source: "/move/absolute",
      x: c.x,
      y: c.y,
    };
  }

  /* PRIMARY USER TOOLS */
  static getPrimary(model, header, contents) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const entity_present = model.accessComponent(archetype_entity.entity, "/present") || {};
    const archetype_present = model.accessComponent(archetype_entity.archetype, "/present") || {};
    const archetype_property = model.getComponent(state.property);
    const property_ids = model.accessComponentIds(archetype_property.archetype, "/archetype/property")
    const schema_present = model.accessComponent(archetype_property.property, "/present") || {};
    const component_ids = model.accessComponentIds(archetype_entity.entity, archetype_property.property);
    const field_ids = model.accessComponentIds(archetype_property.property, "/schema/field");
    const user_input = model.accessComponent(header.thread, "/user_input");
    const c = model.getComponent("/absolute/primary");
    if (!c.active) return;
    contents.push(
      {
        id: "/absolute/primary",
        source: "/absolute",
        parent: "/app",
        content: "Primary",
        handle: c.handle,
        x: c.x,
        y: c.y
      },
      {
        id: "/absolute/primary/entry_0",
        source: "/entry",
        parent: "/absolute/primary",
        title: entity_present.title,
        description: entity_present.description,
        subtitle: archetype_present.title,
        subdescription: archetype_present.description,
        action: "/message/create_entity",
        action_text: "New Entity",
      },
    );
  }
  /* AUGMENTS PRIMARY TOOLS */
  static getSecondary(model, header, contents) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const entity_present = model.accessComponent(archetype_entity.entity, "/present") || {};
    const archetype_present = model.accessComponent(archetype_entity.archetype, "/present") || {};
    const archetype_property = model.getComponent(state.property);
    const property_ids = model.accessComponentIds(archetype_property.archetype, "/archetype/property")
    const schema_present = model.accessComponent(archetype_property.property, "/present") || {};
    const component_ids = model.accessComponentIds(archetype_entity.entity, archetype_property.property);
    const field_ids = model.accessComponentIds(archetype_property.property, "/schema/field");
    const user_input = model.accessComponent(header.thread, "/user_input");
    const c = model.getComponent("/absolute/secondary");
    if (!c.active) return;
    contents.push(
      {
        id: "/absolute/secondary",
        source: "/absolute",
        parent: "/app",
        content: "Secondary",
        handle: c.handle,
        x: c.x,
        y: c.y
      },
      {
        id: "/absolute/secondary/entry_1",
        source: "/entry",
        parent: "/absolute/secondary",
        title: schema_present.title,
        description: schema_present.description,
        action: "New Component",
        action_text: "Secondary",
      },
      {
        id: "/absolute/secondary/entry_2",
        source: "/entry",
        parent: "/absolute/secondary",
        title: "FIELD",
        description: "This is a deep dive into the schema",
      },
    );
  }
  /* TOOLS INDEPENDENT OF CURRENT WORK */
  static getAlternate(model) {

  }
  /* ACTUAL WORK PRODUCT */
  static getWorkspace(model, header, contents) {
    const state = model.accessComponent(header.thread, "/navigation");
    const archetype_entity = model.getComponent(state.entity);
    const entity_present = model.accessComponent(archetype_entity.entity, "/present") || {};
    const archetype_present = model.accessComponent(archetype_entity.archetype, "/present") || {};
    const archetype_property = model.getComponent(state.property);
    const property_ids = model.accessComponentIds(archetype_property.archetype, "/archetype/property")
    const schema_present = model.accessComponent(archetype_property.property, "/present") || {};
    const component_ids = model.accessComponentIds(archetype_entity.entity, archetype_property.property);
    const field_ids = model.accessComponentIds(archetype_property.property, "/schema/field");
    const user_input = model.accessComponent(header.thread, "/user_input");
    const c = model.getComponent("/absolute/workspace");
    if (!c.active) return;

    const component = model.getComponent(state.component);
    const field = model.getComponent(state.field);
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
        title: entity_present.title,
        description: entity_present.description,
        subtitle: archetype_present.title,
        subdescription: archetype_present.description,
        action: "/message/create_entity",
        action_text: "New Entity",
      },
      {
        id: "/absolute/workspace/header/entry_2",
        source: "/entry",
        parent: "/absolute/workspace/header",
        title: schema_present.title,
        description: schema_present.description,
        action: "New Component",
        action_text: "New Component",
      },
      {
        id: "/absolute/workspace/header/entry_3",
        source: "/entry",
        parent: "/absolute/workspace/header",
        title: "FIELD",
        description: "This is a deep dive into the schema",
      },
    );
    for (const field_id of field_ids) {
      const field = model.getComponent(field_id);
      contents.push({
        id: `/absolute/workspace/table/field/${field_id}`,
        source: "/table/field",
        parent: "/absolute/workspace/table/header",
        content: field.key,
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
      });

      for (const c in field_ids) {
        const field_id = field_ids[c];
        const field = model.getComponent(field_id)
        contents.push({
          id: `/absolute/workspace/table/row/${r}/${c}`,
          source: "/table/cell",
          parent: `/absolute/workspace/table/row/${r}`,
          content: component[field.key],
          component: component.id,
          field: field_id,
          focus: component_id == state.component && field_id === state.field,
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
      const ap = model.getComponent(property_id);
      contents.push({
        id: `/absolute/workspace/tabs/${i}`,
        source: "/tab",
        parent: "/absolute/workspace/tabs",
        content: ap.property,
        active: (ap.property === archetype_property.property) ? "focus" : "passive",
      });
    }
  }
}
