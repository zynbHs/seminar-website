(function () {
  const toggle = document.querySelector(".navToggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!t) return;
    const clickedInside = nav.contains(t) || toggle.contains(t);
    if (!clickedInside && nav.classList.contains("nav--open")) {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });
})();
