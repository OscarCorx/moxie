class Misenplace {
  static getElement(id, parentId, tagName, clear) {
    let element = document.getElementById(id);
    if (clear && element) element.remove();
    if (!element || clear) {
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
    const local = model.accessComponent("/head", "/navigation/state", 0);
    let contents = [];
    contents.push(...this.getMisenplace(model, local));
    contents.push(...this.getArchetypeCard(model, local));
    contents.push(...this.getEntityPanel(model, local));
    contents.push(...this.getComponentPanel(model, local));
    contents.push(...this.getSelect(model, local));
    contents.push(...this.getView(model, local));
    for (const c of contents) {
      this.outlineContent(c);
      this.detailContent(c);
    }
  }

  static detailSelect(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state", 0);
    for (const c of this.getSelect(model, local)) {
      this.detailContent(c);
    }
    for (const c of this.getView(model, local)) {
      this.outlineContent(c);
      this.detailContent(c);
    }
  }

  static detailView(model, header, resultId) {
    const local = model.accessComponent("/head", "/navigation/state", 0);
    for (const c of this.getView(model, local)) {
      this.detailContent(c);
    }
  }

  static outlineContent(c) {
    // console.log("outlineContent", c.source);
    let e;
    switch (c.source) {
      case "/misenplace":
        e = this.getElement("/navigation", "/app");
        e.textContent = c.navigation;
        style(e, P.element);
        e = this.getElement("/card", "/app");
        style(e, P.element);
        e = this.getElement("/control", "/app");
        e.textContent = c.control;
        style(e, P.element);
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
        style(e, P.element);
        e.addEventListener("click", () => {
          this.emit({
            source: "/message/header",
            event: "/message/retrieve",
            component: c.component,
          });
        });
        break;
      case "/view/entry":
        e = this.getElement(c.entry, c.panel, "input");
        style(e, P.view_entry);
        e.addEventListener("input", (e) => {
          this.emit({
            source: "/message/header",
            event: "/message/update",
            component: c.component,
            field: c.field,
            value: e.target.value,
          });
        });
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
        break;
      case "/view/entry":
        e = this.getElement(c.entry, c.panel);
        e.setAttribute("value", c.value);
        break;
      default:
        break;
    }
  }

  static getMisenplace(model, local) {
    return [
      {
        source: "/misenplace",
        navigation: "Navigation Panel",
        card: "Card Card",
        control: "Control Panel",
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

  static getEntityPanel(model, local) {
    const display = model.accessComponent(local.entity, "/display", 0) || {
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

  static getComponentPanel(model, local) {
    const property = model.accessComponent(
      local.archetype,
      "/archetype/property",
      local.archetype_index,
    ).property;
    const component = model.accessComponent(
      local.entity,
      property,
      local.property_index,
    );
    const display = model.accessComponent(component.source, "/display", 0) || {
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

  static getSelect(model, local) {
    const contents = [];
    const property = model.accessComponent(
      local.archetype,
      "/archetype/property",
      local.archetype_index,
    ).property;
    const components = model.getComponentIds(local.entity, property);
    for (const id of components) {
      contents.push({
        source: "/select/entry",
        panel: "/select/panel",
        entry: `/select/entry/${id}`,
        icon: "I",
        name: id,
        component: id,
      });
    }
    return contents;
  }

  static getView(model, local) {
    const contents = [];
    const property = model.accessComponent(
      local.archetype,
      "/archetype/property",
      local.archetype_index,
    ).property;
    const component = model.accessComponent(
      local.entity,
      property,
      local.property_index,
    );
    const schema = model.getComponentIds(component.source, "/schema/field");
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
