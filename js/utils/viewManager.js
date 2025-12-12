export function showOnly(sectionToShowId) {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.hidden = section.id !== sectionToShowId;
  });
}