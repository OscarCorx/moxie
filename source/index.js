function load(source) {
  const script = document.createElement("script");
  script.setAttribute("src", source);
  script.onload = () => {
    console.log(`[${source}] LOADED.`);
  };
  script.onerror = () => {
    console.log(`[${source}] FAILED.`);
  };
  document.head.appendChild(script);
}

window.addEventListener("load", () => {
  console.log("WINDOW LOAD");
  // load("./moxie/moxie.js");
});
