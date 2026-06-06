/* =========================================================
   Solvanta Consulting
   Certificate Verification Placeholder
   Backend connection will be added later.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verifyForm");
  const certificateInput = document.getElementById("certificateId");
  const status = document.getElementById("verifyStatus");
  const result = document.getElementById("verifyResult");
  const resultLabel = document.getElementById("verifyResultLabel");
  const resultTitle = document.getElementById("verifyResultTitle");
  const resultBody = document.getElementById("verifyResultBody");

  if (!form || !certificateInput || !status || !result) return;

  const params = new URLSearchParams(window.location.search);
  const idFromUrl = params.get("id");

  if (idFromUrl) {
    certificateInput.value = idFromUrl.trim();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const certificateId = certificateInput.value.trim();

    if (!certificateId) {
      status.textContent = "Please enter a certificate ID.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Certificate verification backend is being prepared.";
    status.className = "form-status";

    result.classList.remove("hidden", "valid", "invalid", "error");
    result.classList.add("error");

    resultLabel.textContent = "Not connected";
    resultLabel.className = "status-label error";

    resultTitle.textContent = "Verification system is not connected yet.";
    resultBody.innerHTML = `
      <p class="muted">
        The page is ready, but certificate verification will be connected after
        the Solvanta Consulting backend and certificate records are configured.
      </p>
      <p class="muted">
        Entered certificate ID: <strong>${escapeHtml(certificateId)}</strong>
      </p>
    `;
  });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
