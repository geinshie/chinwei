(function () {
  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });

    // 點選連結後自動收起（手機）
    nav.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      nav.classList.remove("is-open");
    });
  }

  // 平滑滾動（#anchor）
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;

    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();