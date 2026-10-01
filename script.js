const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
    mainNav.classList.remove("is-open");
  }
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = `Consulta veterinaria de ${formData.get("name")}`;
  const message = [
    `Nombre: ${formData.get("name")}`,
    `Correo: ${formData.get("email")}`,
    `Teléfono: ${formData.get("phone") || "No indicado"}`,
    `Compañero: ${formData.get("pet")}`,
    "",
    formData.get("message"),
  ].join("\n");
  formStatus.textContent = "Se abrirá tu aplicación de correo. Revisa y envía el mensaje para completar el contacto.";
  window.location.href = `mailto:hola@casahuella.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});