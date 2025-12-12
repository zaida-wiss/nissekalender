export function closeAllSections() {
  document.querySelectorAll(".app-section").forEach(section => {
    section.classList.remove("is-active");
    section.classList.add("is-hidden");
    section.setAttribute("aria-hidden", "true");
    section.inert = true;
  });
}

export function setActiveSection(id) {
  closeAllSections();

  const section = document.getElementById(id);
  if (!section) return;

  section.classList.remove("is-hidden");
  section.classList.add("is-active");
  section.removeAttribute("aria-hidden");
  section.inert = false;
}