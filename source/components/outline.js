function outlineComponent(componentId, parentId, tag, retain) {
  let component = document.getElementById(componentId);
  if (!component) {
    component = (tag) ? document.createElement(tag) : document.createElement("div");
    component.setAttribute("id", componentId);
    return document.getElementById(parentId).appendChild(component);
  } else if (!retain) {
    while (component.firstChild) {
      component.lastChild.remove();
    }
    return component;
  }
}

Object.assign(QUERIES, {
  "/misenplace/outline/app": (c, s) => {
    console.log("/outline/app");
  },
  "/misenplace/outline/component": (c, s) => {
    console.log("/outline/component");
  },
  "/misenplace/outline/text_entry": (c, s) => {
    console.log("/outline/text_entry");
  },
  "/misenplace/outline/markdown_entry": (c, s) => {
    console.log("/outline/markdown_entry");
  },
});

Object.assign(COMMANDS, {
  "/misenplace/outline/app": (c, s) => {
    console.log("/outline/component");
  },
  "/misenplace/outline/component": (c, s) => {
    console.log("/outline/component");
  },
  "/misenplace/outline/text_entry": (c, s) => {
    console.log("/outline/text_entry");
  },
  "/misenplace/outline/markdown_entry": (c, s) => {
    console.log("/outline/markdown_entry");
  },
});
