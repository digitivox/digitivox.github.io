/* ==========================================================================
   DIGITIVOX — Site Logic
   ========================================================================== */

const WHATSAPP_NUMBER = "923466124147"; // <-- apna WhatsApp number yahan daalen
const CONTACT_EMAIL = "khushnoodpk@gmail.com";

/* ---------------------------------------------------------------------- */
/* MOBILE MENU                                                            */
/* ---------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("main-nav--open");
  });
}

/* ---------------------------------------------------------------------- */
/* TOAST                                                                  */
/* ---------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("toast--show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("toast--show"), 2600);
}

/* ---------------------------------------------------------------------- */
/* SERVICE CARD SPOTLIGHT (follows cursor)                                */
/* ---------------------------------------------------------------------- */
function initCardSpotlight() {
  document.querySelectorAll(".service-card, .price-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top) + "px");
    });
  });
}

/* ---------------------------------------------------------------------- */
/* CONTACT FORM (demo only — connect to real backend/Formspree later)     */
/* ---------------------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Shukriya! Hum jald hi aap se rabta karenge.");
    form.reset();
  });
}

/* ---------------------------------------------------------------------- */
/* FOOTER (shared across pages)                                          */
/* ---------------------------------------------------------------------- */
function injectFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">${orbitMarkSVG()}Digi<span>tivox</span></div>
        <p>We build websites, run social media, and grow digital presence for brands across Pakistan — from first sketch to first sale.</p>
        <div class="social-row" style="margin-top:16px;">
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener">${iconInstagram()}</a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">${iconFacebook()}</a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">${iconLinkedin()}</a>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" aria-label="WhatsApp" target="_blank" rel="noopener">${iconWhatsapp()}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="services.html#web-dev">Web Development</a><br>
        <a href="services.html#social-media">Social Media Marketing</a><br>
        <a href="services.html#digital-marketing">Digital Marketing</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="about.html">About Us</a><br>
        <a href="portfolio.html">Our Work</a><br>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <p>WhatsApp: +92 300 1234567<br>
        Email: ${CONTACT_EMAIL}<br>
        Mon–Sat, 11 AM – 8 PM</p>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Digitivox. All rights reserved.</div>
  `;
}

/* ---------------------------------------------------------------------- */
/* ICONS (inline SVG, no external requests)                               */
/* ---------------------------------------------------------------------- */
function orbitMarkSVG() {
  return `<span class="orbit-mark"><svg viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="4" fill="#29E0C8"/>
    <ellipse cx="20" cy="20" rx="18" ry="8" stroke="#7C5CFC" stroke-width="1.6" transform="rotate(30 20 20)"/>
    <ellipse cx="20" cy="20" rx="18" ry="8" stroke="#29E0C8" stroke-width="1.2" opacity="0.5" transform="rotate(-30 20 20)"/>
  </svg></span>`;
}
function iconInstagram() { return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`; }
function iconFacebook() { return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`; }
function iconLinkedin() { return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`; }
function iconWhatsapp() { return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`; }

/* ---------------------------------------------------------------------- */
/* INIT                                                                    */
/* ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initCardSpotlight();
  initContactForm();
  injectFooter();
});
