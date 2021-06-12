import "@sass/styles.scss";

import JavaScript from "./imgoptimizadas/js.png";
import Html from "./imgoptimizadas/html.png";
import Css from "./imgoptimizadas/css.png";
import Bootstrap from "./imgoptimizadas/bootstrap.png";

function templateElements(nombre, url, container) {
  let informacion = `  <figure>
          <img loading="lazy" src="${url}" alt="${nombre}" />
          <p>${nombre}</p>
        </figure>`;
  container.innerHTML += informacion;
}

const conocimientosSolidos = [
  {
    nombre: "HTML",
    url: Html,
  },
  {
    nombre: "CSS",
    url: Css,
  },
  {
    nombre: "JavaScript",
    url: JavaScript,
  },
];

const frameworksCss = [
  {
    nombre: "Bootstrap",
    url: Bootstrap,
  },
  {
    nombre: "TailwindCss",
    url: "imgoptimizadas/tailwind.svg",
  },
  {
    nombre: "Materialize",
    url: "imgoptimizadas/materialize.svg",
  },
];

const preProcesadoresCss = [
  {
    nombre: "Sass",
    url: "imgoptimizadas/sass.png",
  },
  {
    nombre: "Less",
    url: "imgoptimizadas/less.png",
  },
  {
    nombre: "Stylus",
    url: "imgoptimizadas/stylus-logo-svg-vector.svg",
  },
];
const nodeJs = [
  {
    nombre: "NodeJs",
    url: "imgoptimizadas/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png",
  },
  {
    nombre: "NPM",
    url: "imgoptimizadas/npm.png",
  },
  {
    nombre: "Webpack",
    url: "imgoptimizadas/webpack.png",
  },
  {
    nombre: "Babel",
    url: "imgoptimizadas/babel-logo.png",
  },
];

const sistemaControlVersiones = [
  {
    nombre: "Git",
    url: "imgoptimizadas/git.png",
  },
  {
    nombre: "Git Hub",
    url: "imgoptimizadas/Octocat.png",
  },
];

const frameworkJavaScript = [
  {
    nombre: "React",
    url: "imgoptimizadas/react.png",
  },
];

const lenguajesBackendFrameworks = [
  {
    nombre: "PHP",
    url: "imgoptimizadas/Daco_5484708.png",
  },
  {
    nombre: "Laravel",
    url: "imgoptimizadas/laravel.png",
  },
];

const nodeJsContainer = document.getElementById("nodeJsContainer");

const frameworksCssContainer = document.getElementById("framework_css");
const conocimientosSolidosContainer = document.getElementById(
  "conocimientos_solidos"
);
const preProcesadoresCssContainer = document.getElementById(
  "preProcesadoresCssContainer"
);
const sistemaControlVersionesContainer = document.getElementById(
  "sistemaControlVersionesContainer"
);

const backendFrameworsContainer = document.getElementById("backendFramewors");
const frameworkJsContainer = document.getElementById("frameworkJsContainer");

conocimientosSolidos.forEach((e) => {
  templateElements(e.nombre, e.url, conocimientosSolidosContainer);
});

frameworksCss.forEach((e) => {
  templateElements(e.nombre, e.url, frameworksCssContainer);
});

preProcesadoresCss.forEach((e) => {
  templateElements(e.nombre, e.url, preProcesadoresCssContainer);
});

sistemaControlVersiones.forEach((e) => {
  templateElements(e.nombre, e.url, sistemaControlVersionesContainer);
});

nodeJs.forEach((e) => {
  templateElements(e.nombre, e.url, nodeJsContainer);
});

frameworkJavaScript.forEach((e) => {
  templateElements(e.nombre, e.url, frameworkJsContainer);
});

lenguajesBackendFrameworks.forEach((e) => {
  templateElements(e.nombre, e.url, backendFrameworsContainer);
});

const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const nav = document.getElementById("nav");
const d = document;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("menu");
  overlay.classList.toggle("overlay-active");
  nav.classList.toggle("nav-active");
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".menuelemt")) {
    toggle.classList.remove("menu");

    overlay.classList.remove("overlay-active");
    nav.classList.remove("nav-active");
  }
});
