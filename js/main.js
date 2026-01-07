const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

if (menuBtn && nav && overlay) {

  function closeNav() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    if (!isMobile()) return;
    nav.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function toggleNav() {
    if (!isMobile()) return;   // ★ ここを追加（保険）
    nav.classList.contains("active") ? closeNav() : openNav();
  }

  // 初期化
  closeNav();

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNav();
  });

  overlay.addEventListener("click", closeNav);

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    closeNav();
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) closeNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

//header.htmlを読み込む
fetch("/cade-demo/partials/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML =html;
  });
