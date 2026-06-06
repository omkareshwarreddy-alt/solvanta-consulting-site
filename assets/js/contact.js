/* =========================================================
   Solvanta Consulting
   Contact Form Placeholder
   Backend connection will be added later.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName")?.value.trim();
    const email = document.getElementById("contactEmail")?.value.trim();
    const message = document.getElementById("contactMessage")?.value.trim();
    const consent = document.getElementById("contactConsent")?.checked;

    if (!name || !email || !message || !consent) {
      status.textContent = "Please complete all required fields and confirm consent.";
      status.className = "form-status error";
      return;
    }

    status.innerHTML =
      'The contact backend is being prepared. For now, please email <a href="mailto:helpdesk@solvantaconsulting.com">helpdesk@solvantaconsulting.com</a>.';
    status.className = "form-status success";
  });
});
