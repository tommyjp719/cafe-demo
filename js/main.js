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
    if (!isMobile()) return;        // PCでは開かない
    nav.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function toggleNav() {
    nav.classList.contains("active") ? closeNav() : openNav();
  }

  // ★ ページ表示時に必ず初期化（overlay残り防止）
  closeNav();

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNav();
  });

  overlay.addEventListener("click", closeNav);

  nav.addEventListener("click", (e) => {
    if (!isMobile()) return;        // PCでは何もしない（通常遷移）
    if (e.target.closest("a")) closeNav();
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) closeNav();    // PC幅に戻ったら強制的に閉じる
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}
