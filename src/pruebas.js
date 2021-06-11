const tecnologies = [
  {
    nombre: "JavaScript",
    url: "imgoptimizadas/js.png",
  },
  {
    nombre: "react",
    url: "imgoptimizadas/react.png",
  },
];
const container = document.getElementById("container");

tecnologies.forEach((tecnology) => {
  const description = `<figure>
          <img
            loading="lazy"
            src="${tecnology.url}"
            alt="Materialize"
          />
          <p>${tecnology.nombre}</p>
        </figure>`;

  container.innerHTML += description;
});

import "utils/tecnologies.js";
