[
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/next",
    code: (message, model, resultId) => {
      console.log("NEXT");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/previous",
    code: (message, model, resultId) => {
      console.log("PREVIOUS");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/forward",
    code: (message, model, resultId) => {
      console.log("FORWARD");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/back",
    code: (message, model, resultId) => {
      console.log("BACK");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/flip",
    code: (message, model, resultId) => {
      console.log("FLIP");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/reverse",
    code: (message, model, resultId) => {
      console.log("REVERSE");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/draw",
    code: (message, model, resultId) => {
      console.log("DRAW");
    },
  },
  {
    source: "/method/definition",
    name: "",
    description: "",
    method: "/navigation/replace",
    code: (message, model, resultId) => {
      console.log("REPLACE");
    },
  },
].forEach((c) => PROCESS.model.setComponent(c));
