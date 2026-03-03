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

function outlineGroup(parentId, index) {

}

/* OUTLINE */
Object.assign(ACTIONS, {
  "/query/misenplace/outline/app": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/outline/component": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/outline/text_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/outline/markdown_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/outline/app": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/outline/component": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/outline/text_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/outline/markdown_entry": (c, s) => {
    console.log("TOKEN");
  },
});

/* DETAIL */
Object.assign(ACTIONS, {
  "/query/misenplace/detail/app": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/detail/component": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/detail/text_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/query/misenplace/detail/markdown_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/detail/app": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/detail/component": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/detail/text_entry": (c, s) => {
    console.log("TOKEN");
  },
  "/command/misenplace/detail/markdown_entry": (c, s) => {
    console.log("TOKEN");
  },
});

/* USER INPUT */
Object.assign(ACTIONS, {
  "/query/user_input/detail/markdown_entry": (c, s) => {
    console.log("TOKEN");
  },
});
