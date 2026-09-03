(() => {
  "use strict";

  const nav = document.querySelector(".classic-nav");
  const toggle = document.querySelector(".classic-nav-toggle");
  const menu = document.querySelector("#classic-primary-menu");

  if (!nav || !toggle || !menu) return;

  const closeMenu = (returnFocus = false) => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    if (open) {
      closeMenu();
    } else {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth <= 700) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });
})();
