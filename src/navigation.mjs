const menu = document.querySelector("#menu-toggle"),
  nav = document.querySelector("#navigation");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", open);
  nav.classList.toggle("open", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }
});
