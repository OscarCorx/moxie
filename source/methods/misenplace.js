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
    this.getElement("/view/panel", "/archetype/card/id", "div", true);
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
        style(e, P.bound);
        e = this.getElement("/card", "/app");
        style(e, P.element);
        e = this.getElement("/control", "/app");
        style(e, P.bound);
        break;
      case "/navigation/panel":
        e = this.getElement("/navigation/panel", "/navigation");
        style(e, P.bound_panel);
        e = this.getElement("/navigation/left_corner", "/navigation/panel");
        e = this.getElement("/navigation/left", "/navigation/panel");
        e = this.getElement("/navigation/center", "/navigation/panel");
        e = this.getElement("/navigation/right", "/navigation/panel");
        e = this.getElement("/navigation/right_corner", "/navigation/panel");
        break;
      case "/control/panel":
        e = this.getElement("/control/panel", "/control");
        e = this.getElement("/control/left_corner", "/control/panel");
        e = this.getElement("/control/left", "/control/panel");
        e = this.getElement("/control/center", "/control/panel");
        e = this.getElement("/control/right", "/control/panel");
        e = this.getElement("/control/right_corner", "/control/panel");
        style(e, P.bound_panel);
        break;
      case "/archetype/card":
        e = this.getElement(c.card, "/card", "div", true);
        style(e, P.card);
        e = this.getElement("/component/panel", c.card);
        style(e, P.component_panel);
        e = this.getElement("/entity/panel", c.card);
        style(e, P.entity_panel);
        e = this.getElement(c.select_panel, c.card);
        style(e, P.select_panel);
        e = this.getElement(c.view_panel, c.card);
        style(e, P.view_panel);
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
        style(e, P.view_entry);
        // e.addEventListener("input", (e) => {
        //   this.emit({
        //     source: "/message/header",
        //     event: "/message/update",
        //     component: c.component,
        //     field: c.field,
        //     value: e.target.value,
        //   });
        // });
        break;
      case "/bound/entry":
        e = this.getElement(c.entry, c.panel);
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
      case "/select/entry":
        e = this.getElement(c.entry, c.panel);
        e.textContent = c.name;
        style(e, c.focus ? P.focus : P.element);
        break;
      case "/view/entry":
        e = this.getElement(c.entry, c.panel);
        e.textContent = c.value;
        style(e, c.focus ? P.focus : P.element);
        if (c.focus) e.focus();
        // e.setAttribute("value", c.value || "a");
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
        view_panel: "/view/panel",
        title: "/This is the title card",
      },
    ];
  }

  static getNavigationPanel(model, local) {
    return [
      {
        source: "/bound/entry",
        panel: "/navigation/left_corner",
        entry: "/logo",
        title: "[L]ogo",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/left",
        entry: "/entity",
        title: "[E]ntity",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/left",
        entry: "/component",
        title: "[C]omponent",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/center",
        entry: "/path",
        title: "[P]ath",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/right",
        entry: "/message",
        title: "[M]essage",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/right",
        entry: "/version_control",
        title: "Re[V]ision",
      },
      {
        source: "/bound/entry",
        panel: "/navigation/right_corner",
        entry: "/user",
        title: "[U]ser",
      },
    ];
  }

  static getControlPanel(model, local) {
    return [
      {
        source: "/bound/entry",
        panel: "/control/left_corner",
        entry: "/revert",
        title: "[R]evert",
      },
      {
        source: "/bound/entry",
        panel: "/control/center",
        entry: "/filter",
        title: "[F]ilter",
      },
      {
        source: "/bound/entry",
        panel: "/control/right_corner",
        entry: "/action",
        title: "[A]ction",
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
        focus: id === component.id,
      });
      i++;
    }
    return contents;
  }

  static getViewEntries(model, local) {
    const contents = [];
    const component = model.getComponent(local.component);
    const schema = model.accessComponentIds(component.source, "/schema/field");
    for (const id of schema) {
      const field = model.getComponent(id);
      contents.push({
        source: "/view/entry",
        panel: "/view/panel",
        entry: `/view/entry/${id}`,
        icon: "I",
        component: component.id,
        field: field.key,
        value: component[field.key],
        focus: local.panel === "/view" && local.field === id,
      });
    }
    return contents;
  }

  static outlineNavigationPanel(content) {
    const navigation = global.getElement("/navigation", "/app");
    addStyle(navigation, P.element);
    navigation.textContent = "NAVIGATION";
  }
}
