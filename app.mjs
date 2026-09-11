import { content } from "./src/content.mjs";
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
document.querySelector("#services").innerHTML = content.services
  .map(
    (s, i) =>
      `<article class="service"><span class="number">0${i + 1}</span><h3>${escape(s.title)}</h3><p>${escape(s.text)}</p><a href="${s.source}" aria-label="Learn more about ${escape(s.title)}">Learn more <span aria-hidden="true">↗</span></a></article>`,
  )
  .join("");
document.querySelector("#gallery-grid").innerHTML = content.gallery
  .map(
    (g, i) =>
      `<button class="gallery-item" data-image="${i}" aria-label="Enlarge ${escape(g.alt)}"><img src="${g.src}" alt="${escape(g.alt)}" loading="lazy" width="607" height="1080"><span>View photograph <span aria-hidden="true">↗</span></span></button>`,
  )
  .join("");
const story = content.story;
document.querySelector("#story-title").textContent = story.title;
document.querySelector("#story-summary").textContent = story.summary;
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
const dialog = document.querySelector("dialog");
document.querySelector("#gallery-grid").addEventListener("click", (e) => {
  const button = e.target.closest("[data-image]");
  if (!button) return;
  const item = content.gallery[Number(button.dataset.image)];
  dialog.querySelector("img").src = item.src;
  dialog.querySelector("img").alt = item.alt;
  dialog.showModal();
});
dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
