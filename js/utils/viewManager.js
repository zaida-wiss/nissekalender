// js/utils/viewManager.js

export function setActiveSection(targetId) {
  const sections = document.querySelectorAll(".app-section");

  sections.forEach(section => {
    const isActive = section.id === targetId;

    section.classList.toggle("is-hidden", !isActive);
    section.classList.toggle("is-active", isActive);
    section.setAttribute("aria-hidden", String(!isActive));
  });
}

export function closeAllSections() {
  document.querySelectorAll(".app-section").forEach(section => {
    section.classList.add("is-hidden");
    section.classList.remove("is-active");
    section.setAttribute("aria-hidden", "true");
  });
}

