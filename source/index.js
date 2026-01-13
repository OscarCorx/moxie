function load(source) {
  const script = document.createElement('script');
  script.setAttribute("src", source);
  script.onload = () => { console.log(`[${source}] LOADED.`); };
  script.onerror = () => { console.log(`[${source}] FAILED.`); };
  document.head.appendChild(script);
}

window.addEventListener("load", () => {
  console.log("WINDOW LOAD");
  load("./components/components.js");
  load("./components/data_store.js");
  load("./components/outline.js");
  load("./components/detail.js");
  load("./components/data.js");
  load("./components/misenplace.js");
  load("./components/process.js");
  load("./components/actor.js");
  load("./components/moxie.js");
});
// <!--<script src="./components/components.js"></script>
// <script src="./components/data_store.js"></script>
// <script src="./components/outline.js"></script>
// <script src="./components/detail.js"></script>

// <script src="./content/data.js"></script>
// <script src="./content/misenplace.js"></script>

// <script src="./moxie/process.js"></script>
// <script src="./moxie/actor.js"></script>
// <script src="./moxie/moxie.js"></script>-->
