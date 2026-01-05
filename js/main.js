const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

// 画面幅がスマホか判定（CSSの768pxと揃える）
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

if (menuBtn && nav && overlay) {
  function openNav() {
    if (!isMobile()) return; // PC幅なら開かない

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

  function toggleNav() {
    const isOpen = nav.classList.contains("active");
    isOpen ? closeNav() : openNav();
  }

  // ☰ クリックで開閉
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNav();
  });

  // オーバーレイを押したら閉じる
  overlay.addEventListener("click", closeNav);

  // nav内リンクを押したら閉じる
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });

  // Escキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  // PC幅になったら強制的に閉じる（開きっぱなし防止）
  window.addEventListener("resize", () => {
    if (!isMobile()) closeNav();
  });
}
