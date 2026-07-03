function addStyle(element, style) {
  Object.assign(element.style, style);
}

class Misenplace {
  static getElement(id, parentId, tagName, clear) {
    if (clear) element.remove();
    let element = document.getElementById(id);
    if (!element) {
      const parent = document.getElementById(parentId);
      element = document.createElement(tagName || "div");
      element.setAttribute("id", id);
      parent.appendChild(element);
    }
    return element;
  }

  static emit(signal) {
    document.dispatchEvent(new CustomEvent("/target", { detail: signal }));
  }

  static renderMisenplace(model, local, resultId) {
    let contents = this.getMisenplace(model, local);
    for (const c of contents) {
      this.renderContent(c);
    }
  }

  static renderArchetypeCard(model, local, procedure) {
    let contents = this.getArchetypeCard(model, local);
    for (const c of contents) {
      this.renderContent(c);
    }
  }

  static renderSelect(model, local, resultId) {
    let contents = this.getSelect(model, local);
    for (const c of contents) {
      this.renderContent(c);
    }
  }

  static renderView(model, local, resultId) {
    let contents = this.getSelect(model, local);
    for (const c of contents) {
      this.renderContent(c);
    }
  }

  static renderContent(content) {
    console.log("renderContent", content.source);
    switch (content.source) {
      case "/render/navigation/panel":
        break;
      case "/render/control/entry":
        break;
      case "/outline/archetype/card":
        break;
      case "/outline/select/panel":
        break;
      case "/outline/select/entry":
        break;
      case "/outline/view/panel":
        break;
      case "/outline/view/entry":
        break;
      case "/detail/archetype/card":
        break;
      case "/detail/select/panel":
        break;
      case "/detail/select/entry":
        break;
      case "/detail/view/panel":
        break;
      case "/detail/view/entry":
        break;
      default:
        break;
    }
  }

  static getMisenplace(model, local) {
    const contents = [
      /* OUTLINE NAVIGATION */
      /* DETAIL NAVIGATION */
      /* OUTLINE CARD */
      /* OUTLINE CONTROL */
      /* OUTLINE CONTROL */
    ];
    contents.push(...this.getArchetypeCard(model, local));
    return contents;
  }

  static getArchetypeCard(model, local) {
    const component = model.accessComponent(
      local.entity,
      local.property,
      local.property_index,
    );
    const contents = [
      {
        source: "/outline/archetype/card",
        title_panel: "/title/panel",
        select_panel: "/select/panel",
        view_panel: "/view/panel",
        title: "/This is the title card",
      },
    ];
    const components = model.getComponentIds(local.entity, component.source);
    for (const id of components) {
      contents.push({
        source: "/outline/select/entry",
        panel: "/select",
        group: "/select/entry",
        entry: `/select/entry/${id}`,
        icon: "I",
        name: id,
      });
    }
    contents.push(...this.getSelect(model, local));
    return contents;
  }

  static getSelect(model, local) {
    const contents = [];
    const component = model.accessComponent(
      local.entity,
      local.property,
      local.property_index,
    );
    const components = model.getComponentIds(local.entity, component.source);
    for (const id of components) {
      contents.push({
        source: "/detail/select/entry",
        group: "/select/entry",
        entry: `/select/entry/${id}`,
        icon: "I",
        name: id,
      });
    }
    const schema = model.getComponentIds(component.source, "/schema/field");
    for (const id of schema) {
      const field = model.getComponent(id);
      contents.push({
        source: "/outline/view/entry",
        entry: `/view/entry/${id}`,
        icon: "I",
        field: field.key,
        value: component[field.key],
      });
    }
    contents.push(...this.getView(model, local));
    return contents;
  }

  static getView(model, local) {
    const contents = [];
    const component = model.accessComponent(
      local.entity,
      local.property,
      local.property_index,
    );
    const schema = model.getComponentIds(component.source, "/schema/field");
    for (const id of schema) {
      const field = model.getComponent(id);
      contents.push({
        source: "/detail/view/entry",
        entry: `/view/entry/${id}`,
        icon: "I",
        field: field.key,
        value: component[field.key],
      });
    }
    return contents;
  }

  static outlineNavigationPanel(content) {
    const navigation = global.getElement("/navigation", "/app");
    addStyle(navigation, P.element);
    navigation.textContent = "NAVIGATION";
  }

  static outlineNavigationEntry(content) {}

  static detailNavigationEntry(content) {}

  static outlineSpace(content) {}

  static outlineControlPanel(content) {
    const control = global.getElement("control", "/app");
    addStyle(control, P.element);
    control.textContent = "CONTROL";
  }

  static outlineControlEntry(content) {}

  static detailControlEntry(content) {}

  static outlineArchetypeCard(content) {}

  static detailArchetypeCard(content) {}

  static outlineSelectPanel(content) {
    // let e;
    // content.component_index = global.nextIndex(
    //   content.archetype,
    //   "/archetype/property",
    //   content.component_index,
    // );
    // const componentSource = global.getComponent(
    //   content.archetype,
    //   "/archetype/property",
    //   content.component_index,
    // );
    // global.getElement("/select_panel", "/card_id");
    // e = global.getElement("/select_panel/title", "/select_panel");
    // e.textContent = `SELECT PANEL: ${componentSource.property}`;
    // addStyle(e, P.panel);
    // const addButton = global.getElement(`/select_entry/add`, "/select_panel");
    // addButton.textContent = "ADD +";
    // addButton.addEventListener("click", () => {
    //   global.emit([
    //     {
    //       event: "/message/create",
    //       entity: content.entity,
    //       component_source: componentSource,
    //     },
    //   ]);
    // });
    // const columnId = "/select_panel/selection";
    // global.getElement(columnId, "/select_panel");
    // const componentIds = global.getComponentIds(
    //   content.entity,
    //   componentSource,
    //   0,
    // );
    // let component = global.getComponentById(componentIds[0]);
    // for (const componentIds of componentIds) {
    //   if (c.id === content.component_id) component = c;
    //   e = global.getElement(`/select_entry/${c.id}`, columnId);
    //   e.addEventListener("click", () => {
    //     global.emit([
    //       {
    //         event: "/select",
    //         component_id: c.id,
    //       },
    //     ]);
    //   });
    // }
  }

  static detailSelectPanel(content) {
    // let e;
    // const sourceIds = global.getComponentIds(
    //   content.archetype,
    //   "/archetype/property",
    // );
    // const componentSource = sourceIds[content.component_index];
    // const columnId = "/select_panel/selection";
    // global.getElement(columnId, "/select_panel");
    // const componentIds = global.getComponentIds(content.entity, componentSource);
    // let component = componentIds[0];
    // for (const componentId of componentIds) {
    //   e = global.getElement(`/select_entry/${c.id}`, columnId);
    //   e.textContent = c.id;
    // }
  }

  static outlineViewPanel(content) {
    // let e;
    // const componentSources = global.getComponentIds(
    //   content.archetype,
    //   "/archetype/property",
    // );
    // const componentSource = componentSources[content.component_index];
    // const components = global.getComponent(content.entity, componentSource);
    // let component = components[0];
    // addStyle(global.getElement("/view_panel", "/card_id"), P.panel);
    // e = global.getElement("/view_panel/title", "/view_panel");
    // e.textContent = "VIEW PANEL";
    // e = global.getElement("/view_panel/selection", "/view_panel");
    // addStyle(e, P.entry_column);
    // const fields = global.getComponent(componentSource, "/schema/field");
    // for (const f of fields) {
    //   const entryId = `/view_entry/${f.id}`;
    //   e = global.getElement(entryId, "/view_panel/selection");
    //   addStyle(e, P.entry);
    //   e = global.getElement(`/view_entry/${f.id}/icon`, entryId);
    //   addStyle(e, P.entry_part);
    //   e = global.getElement(`/view_entry/${f.id}/key`, entryId);
    //   addStyle(e, P.entry_part);
    //   e = global.getElement(`/view_entry/${f.id}/value`, entryId, "input");
    //   addStyle(e, P.entry_part);
    //   e.addEventListener("input", (e) => {
    //     global.emit([
    //       {
    //         event: "/update",
    //         component_id: component.id,
    //         key: f.key,
    //         value: e.target.value,
    //       },
    //     ]);
    //   });
    // }
  }

  static detailViewPanel(content) {
    // let e;
    // const componentSources = global.getComponent(
    //   content.archetype,
    //   "/archetype/property",
    // );
    // const componentSource = componentSources[content.component_index];
    // const components = global.getComponent(content.entity, componentSource);
    // let component = components[0];
    // const fields = global.getComponent(componentSource, "/schema/field");
    // for (const f of fields) {
    //   const entryId = `/view_entry/${f.id}`;
    //   e = global.getElement(entryId, "/view_panel/selection");
    //   e = global.getElement(`/view_entry/${f.id}/icon`, entryId);
    //   e.textContent = "I";
    //   e = global.getElement(`/view_entry/${f.id}/key`, entryId);
    //   e.textContent = f.key;
    //   e = global.getElement(`/view_entry/${f.id}/value`, entryId, "input");
    //   e.setAttribute("value", component[f.key]);
    // }
  }

  static outlineSelectEntry(content) {}

  static detailSelectEntry(content) {}

  static outlineViewEntry(content) {}

  static detailViewEntry(content) {}
}

const P = {
  element: {
    border: "1px solid black",
  },
  card: {
    display: "flex",
    "flex-direction": "row",
  },
  panel: {
    flex: "auto",
    width: "45vw",
  },
  entry_column: {
    display: "flex",
    "flex-direction": "column",
  },
  entry: {
    display: "flex",
    "flex-direction": "row",
    flex: "auto",
  },
  entry_part: {
    flex: "auto",
  },
};

const S = {};
