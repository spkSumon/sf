// ── Mobiel menu: hamburgerknop opent/sluit de navigatie ──
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
  });
}

// ── Scroll-popup (enkel op de homepage) ──
const popup = document.getElementById("scrollPopup");
const closeBtn = document.getElementById("popupClose");
if (popup && closeBtn) {
  let shown = false;
  window.addEventListener("scroll", function () {
    if (!shown && window.scrollY > 300) {
      popup.classList.add("visible");
      shown = true;
    }
  });
  closeBtn.addEventListener("click", function () {
    popup.classList.remove("visible");
  });
}

// ── Houd het jaartal in de footer automatisch actueel ──
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
