class Render {
  static build(m, h) {
    m.setComponent({
      id: "/absolute/workspace",
      source: "/view/absolute",
      handle: false,
      active: true,
      x: 2,
      y: 2,
      height: 99,
      width: 99,
    });
    m.setComponent({
      id: "/absolute/primary",
      source: "/view/absolute",
      handle: true,
      active: false,
      x: 100,
      y: 100,
    });
    m.setComponent({
      id: "/absolute/secondary",
      source: "/view/absolute",
      handle: true,
      active: false,
      x: 400,
      y: 100,
    });
  }

  static toggleState(model, header) {
    let state = model.getComponent("/absolute/primary");
    state.active = !state.active;
    state = model.getComponent("/absolute/secondary");
    state.active = !state.active;
  }

  static background(model, header) {
    const state = model.accessComponent(model.endpoint, "/style");
    const style = model.getEntity(state.main_theme);
    let e = document.getElementsByTagName("body")[0];
    Object.assign(e.style, style["background"]);
  }

  static full(model, header) {
    const contents = TableQuery.fullRender(model, header);
    for (const c of contents) {
      this.outline(model, c);
      this.detail(model, c);
    }
  }

  static outline(model, c) {
    switch (c.source) {
      case "/hud":
        Standard.outlineHud(model, c);
        break;
      case "/absolute":
        Standard.outlineAbsolute(model, c);
        break;
      case "/move/absolute":
        Standard.moveAbsolute(model, c);
        break;
      case "/board":
        Standard.outlineBoard(model, c);
        break;
      case "/board/tile":
        Standard.outlineAbsolute(model, c);
        break;
      case "/table":
        Standard.outlineTable(model, c);
        break;
      case "/table/field":
        Standard.outlineTableField(model, c);
        break;
      case "/table/row":
        Standard.outlineTableRow(model, c);
        break;
      case "/table/cell":
        Standard.outlineTableCell(model, c);
        break;
      case "/entry":
        Standard.outlineEntry(model, c);
        break;
      case "/chip":
        Standard.outlineChip(model, c);
        break;
      case "/toggle":
        Standard.outlineToggle(model, c);
        break;
      case "/text":
        Standard.outlineText(model, c);
        break;
      case "/button":
        Standard.outlineButton(model, c);
        break;
      case "/link":
        Standard.outlineLink(model, c);
        break;
      case "/field":
        Standard.outlineField(model, c);
        break;
      case "/tab":
        Standard.outlineTab(model, c);
        break;
    }
  }

  static detail(model, c) {
    switch (c.source) {
      case "/absolute":
        Standard.detailAbsolute(model, c);
        break;
      case "/board":
        Standard.detailBoard(model, c);
        break;
      case "/board/tile":
        Standard.detailBoardTile(model, c);
        break;
      case "/table":
        Standard.detailTable(model, c);
        break;
      case "/table/field":
        Standard.detailTableField(model, c);
        break;
      case "/table/row":
        Standard.detailTableRow(model, c);
        break;
      case "/table/cell":
        Standard.detailTableCell(model, c);
        break;
      case "/entry":
        Standard.detailEntry(model, c);
        break;
      case "/chip":
        Standard.detailChip(model, c);
        break;
      case "/toggle":
        Standard.detailToggle(model, c);
        break;
      case "/text":
        Standard.detailText(model, c);
        break;
      case "/button":
        Standard.detailButton(model, c);
        break;
      case "/link":
        Standard.detailLink(model, c);
        break;
      case "/field":
        Standard.detailField(model, c);
        break;
      case "/tab":
        Standard.detailTab(model, c);
        break;
    }
  }
}
