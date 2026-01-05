const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

if (menuBtn && nav && overlay) {
  function openNav() {
    nav.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("active") ? closeNav() : openNav();
  });

  overlay.addEventListener("click", closeNav);

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeNav();
  });
}
