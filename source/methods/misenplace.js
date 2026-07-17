class Misenplace {
  static getElement(id, parentId, tagName, clear) {
    // console.log(id, parentId);
    let element = document.getElementById(id);
    if (clear && element) {
      while (element.firstChild) element.firstChild.remove();
    }
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

  static renderMisenplace(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state");
    let contents = [];
    contents.push(...this.getMisenplace(model, local));
    contents.push(...this.getNavigationPanel(model, local));
    contents.push(...this.getArchetypeCard(model, local));
    contents.push(...this.getControlPanel(model, local));
    contents.push(...this.getSelectPanel(model, local));
    contents.push(...this.getViewPanel(model, local));
    contents.push(...this.getSelectEntries(model, local));
    contents.push(...this.getViewEntries(model, local));
    for (const c of contents) {
      this.outlineContent(c);
      this.detailContent(c);
    }
  }

  static renderMove(model, header, resultId) {
    console.log(header);
  }

  static detailBoundPanels(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state");
    let contents = [];
    contents.push(...this.getNavigationPanel(model, local));
    contents.push(...this.getControlPanel(model, local));
    for (const c of contents) {
      this.detailContent(c);
    }
  }

  static detailPanels(model, header, resultId) {
    const contents = [];
    contents.push(...this.getNavigationPanel());
    contents.push(...this.getControlPanel());
    for (const c of contents) {
      this.detailContent(c);
    }
  }

  static detailSelect(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state");
    for (const c of this.getSelectEntries(model, local)) {
      this.detailContent(c);
    }
    this.getElement("/view/panel/0", "/archetype/card/id", "div", true);
    this.getElement("/view/panel/1", "/archetype/card/id", "div", true);
    for (const c of this.getViewEntries(model, local)) {
      this.outlineContent(c);
      this.detailContent(c);
    }
  }

  static detailView(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state");
    for (const c of this.getViewEntries(model, local)) {
      this.detailContent(c);
    }
  }

  static outlineContent(c) {
    // console.log("outlineContent", c.source);
    let e;
    switch (c.source) {
      case "/misenplace":
        e = this.getElement("/navigation", "/app");
        e = this.getElement("/card", "/app");
        e = this.getElement("/control", "/app");
        break;
      case "/navigation/panel":
        e = this.getElement("/navigation/panel", "/navigation");
        style(e, L.bound_top);
        e = this.getElement("/navigation/left_corner", "/navigation/panel");
        style(e, L.bound_left_corner);
        e = this.getElement("/navigation/left", "/navigation/panel");
        style(e, L.bound_gap);
        e = this.getElement("/navigation/center", "/navigation/panel");
        style(e, L.bound_center);
        e = this.getElement("/navigation/right", "/navigation/panel");
        style(e, L.bound_gap);
        e = this.getElement("/navigation/right_corner", "/navigation/panel");
        style(e, L.bound_right_corner);
        break;
      case "/control/panel":
        e = this.getElement("/control/panel", "/control");
        style(e, L.bound_bottom);
        e = this.getElement("/control/left_corner", "/control/panel");
        style(e, L.bound_left_corner);
        e = this.getElement("/control/left", "/control/panel");
        style(e, L.bound_gap);
        e = this.getElement("/control/center", "/control/panel");
        style(e, L.bound_center);
        e = this.getElement("/control/right", "/control/panel");
        style(e, L.bound_gap);
        e = this.getElement("/control/right_corner", "/control/panel");
        style(e, L.bound_right_corner);
        break;
      case "/archetype/card":
        e = this.getElement(c.card, "/card", "div", true);
        style(e, L.card);
        e = this.getElement("/info/panel", c.card);
        style(e, L.info_panel);
        e = this.getElement("/entity/panel", "/info/panel");
        style(e, L.entity_panel);
        e = this.getElement("/component/panel", "/info/panel");
        style(e, L.component_panel);


        e = this.getElement("/entry/panel", c.card);
        style(e, L.entry_panel);
        e = this.getElement(c.select_panel, c.card);
        style(e, L.select_panel);
        e = this.getElement(c.view_panel_0, c.card);
        style(e, L.view_panel_0);
        e = this.getElement(c.view_panel_1, c.card);
        style(e, L.view_panel_1);
        break;
      case "/component/panel":
        e = this.getElement("/component/title", "/component/panel");
        e = this.getElement("/component/description", "/component/panel");
        e = this.getElement("/component/add", "/component/panel");
        e.addEventListener("click", () => {
          this.emit({
            source: "/message/header",
            event: "/message/create",
          });
        });
        break;
      case "/entity/panel":
        e = this.getElement("/entity/title", "/entity/panel");
        e = this.getElement("/entity/description", "/entity/panel");
        break;
      case "/select/entry":
        e = this.getElement(c.entry, c.panel);
        e.addEventListener("click", () => {
          this.emit({
            source: "/message/header",
            event: "/message/retrieve",
            component: c.id,
          });
        });
        break;
      case "/view/entry":
        e = this.getElement(c.entry, c.panel);
        style(e, L.view_entry);
        e = this.getElement(c.entry_icon, c.entry);
        style(e, L.view_part);
        e = this.getElement(c.entry_field, c.entry);
        style(e, L.view_part);
        e = this.getElement(c.entry_value, c.entry, "input");
        e.addEventListener("input", (e) => {
          console.log("INPUT", e.target.value);
          this.emit({
            event: "/message/update",
            component: c.component,
            field: c.field,
            value: e.target.value,
          })
        });
        style(e, L.view_part);
        break;
      case "/bound/entry":
        e = this.getElement(c.entry, c.panel);
        style(e, L.bound_entry);
        break;
      default:
        break;
    }
  }

  static detailContent(c) {
    // console.log("detailContent", c.source);
    let e;
    switch (c.source) {
      case "/misenplace":
        break;
      case "/archetype/card":
        break;
      case "/component/panel":
        this.getElement("/component/title", "/component/panel").textContent =
          c.title;
        this.getElement(
          "/component/description",
          "/component/panel",
        ).textContent = c.description;
        this.getElement("/component/add", "/component/panel").textContent =
          "Add Record";
        break;
      case "/entity/panel":
        this.getElement("/entity/title", "/entity/panel").textContent = c.title;
        this.getElement("/entity/description", "/entity/panel").textContent =
          c.description;
        break;
      case "/entity/panel/entry":
        e = this.getElement(c.entry, c.panel);
        e.textContent = `VALUE = ${c.value}`;
        break;
      case "/select/entry":
        e = this.getElement(c.entry, c.panel);
        e.textContent = c.name;
        style(e, L.element);
        break;
      case "/select/entry/focus":
        e = this.getElement(c.entry, c.panel);
        style(e, L.focus);
        break;
      case "/view/entry":
        e = this.getElement(c.entry, c.panel);
        style(e, T.element);
        e = this.getElement(c.entry_icon, c.entry);
        e.textContent = c.icon;
        e = this.getElement(c.entry_field, c.entry);
        e.textContent = c.field;
        e = this.getElement(c.entry_value, c.entry);
        e.value = c.value;
        e.readOnly = true;
        e.blur();

        break;
      case "/view/entry/focus":
        e = this.getElement(c.entry, c.panel);
        style(e, T.focus);
        e = this.getElement(c.entry_value, c.entry);
        e.readOnly = false;
        if (c.edit) e.focus();
        break;
      case "/bound/entry":
        e = this.getElement(c.entry, c.panel);
        e.textContent = c.title;
        break;
      default:
        break;
    }
  }

  static getMisenplace(model, local) {
    return [
      {
        source: "/misenplace",
      },
      {
        source: "/navigation/panel",
      },
      {
        source: "/control/panel",
      },
    ];
  }

  static getArchetypeCard(model, local) {
    return [
      {
        source: "/archetype/card",
        card: "/archetype/card/id",
        component_panel: "/component/panel",
        entity_panel: "/entity/panel",
        select_panel: "/select/panel",
        view_panel_0: "/view/panel/0",
        view_panel_1: "/view/panel/1",
        title: "/This is the title card",
      },
    ];
  }

  static getNavigationPanel(model, local) {
    const state = model.accessComponent("/user_input", "/procedure/state");
    return [
      {
        source: "/bound/entry",
        panel: "/navigation/left_corner",
        entry: "/logo",
        title: (state.bind) ? "L" : "Logo",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/left",
        entry: "/entity",
        title: (state.bind) ? "E" : "Entity",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/left",
        entry: "/component",
        title: (state.bind) ? "C" : "Component",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/center",
        entry: "/path",
        title: (state.bind) ? "P" : "Path",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/right",
        entry: "/message",
        title: (state.bind) ? "M" : "Message",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/right",
        entry: "/version_control",
        title: (state.bind) ? "R" : "Revision",

      },
      {
        source: "/bound/entry",
        panel: "/navigation/right_corner",
        entry: "/user",
        title: (state.bind) ? "U" : "User",

      },
    ];
  }

  static getControlPanel(model, local) {
    const state = model.accessComponent("/user_input", "/procedure/state");
    return [
      {
        source: "/bound/entry",
        panel: "/control/left_corner",
        entry: "/revert",
        title: (state.bind) ? "R" : "Revert",
      },
      {
        source: "/bound/entry",
        panel: "/control/center",
        entry: "/filter",
        title: (state.bind) ? "F" : "Filter",
      },
      {
        source: "/bound/entry",
        panel: "/control/right_corner",
        entry: "/mode",
        title: (state.bind) ? "A" : state.mode,

      },
    ];
  }

  static getSelectPanel(model, local) {
    const display = model.accessComponent(local.entity, "/display") || {
      title: "MISSING TITLE",
      description: "MISSING DESCRIPTION",
    };
    return [
      {
        source: "/entity/panel",
        title: display.title,
        description: display.description,
      },
    ];
  }

  static getViewPanel(model, local) {
    const component = model.getComponent(local.component);
    const display = model.accessComponent(component.source, "/display") || {
      title: "MISSING TITLE",
      description: "MISSING DESCRIPTION",
    };
    return [
      {
        source: "/component/panel",
        title: display.title,
        description: display.description,
      },
    ];
  }

  static getSelectEntries(model, local) {
    const contents = [];
    const property = model.getComponent(local.property).property;
    const components = model.accessComponentIds(local.entity, property);
    const component = model.getComponent(local.component);

    let i = 0;
    for (const id of components) {
      contents.push({
        source: "/select/entry",
        panel: "/select/panel",
        entry: `/select/entry/${id}`,
        icon: "I",
        id: id,
        name: id,
        index: i,
      });
      if (id === component.id) {
        contents.push({
          source: "/select/entry/focus",
          panel: "/select/panel",
          entry: `/select/entry/${id}`,
          icon: "I",
          id: id,
          name: id,
          index: i,
        });
      }
      i++;
    }
    return contents;
  }

  static getViewEntries(model, local) {
    const contents = [];
    const component = model.getComponent(local.component);
    const schema = model.accessComponentIds(component.source, "/schema/field");
    for (let i = 0; i < schema.length; i++) {
      const id = schema[i];
      const field = model.getComponent(id);
      contents.push({
        source: "/view/entry",
        panel: `/view/panel/${i % 2}`,
        entry: `/view/entry/${id}`,
        entry_icon: `/view/entry/${id}/icon`,
        entry_field: `/view/entry/${id}/key`,
        entry_value: `/view/entry/${id}/value`,
        icon: "I",
        component: component.id,
        field: field.key,
        value: component[field.key],
      });
      if (local.field === id) {
        const state = model.accessComponent("/user_input", "/procedure/state");
        contents.push({
          source: "/entity/panel/entry",
          panel: "/entity/panel",
          entry: "/component/panel/entry",
          component: component.id,
          value: component[field.key],
        }, {
          source: "/view/entry/focus",
          entry: `/view/entry/${id}`,
          edit: state.mode === "/entry",
          entry_value: `/view/entry/${id}/value`,
        });
      }
    }
    return contents;
  }
}
