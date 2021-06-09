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
