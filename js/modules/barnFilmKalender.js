// js/modules/barnFilmKalender.js

import { getToday } from "../data/dayUtils.js";
import { barnFilmer } from "../data/barnFilmer.js";

let lastFocusedElement = null;

/* ===========================
      INIT / RENDER FILMKALENDERN
   (anropas från main.js)
=========================== */
export function initBarnFilmKalender(section) {
    if (!section) {
        console.error("❌ Filmkalender: ingen container skickades in");
        return;
    }

    section.innerHTML = "";
    buildFilmCalendar(section);
}


/* ===========================
        BYGG FILMKALENDERN
=========================== */
function buildFilmCalendar(section) {
    // Rubrik (valfri – kan fyllas senare)
    const heading = document.createElement("h2");
    heading.textContent = "";
    section.appendChild(heading);

    // Grid
    const grid = document.createElement("div");
    grid.classList.add("advent-grid");
    section.appendChild(grid);

    const todayDate = Number(getToday()?.split("-")[2] || 24);

    // Skapa & blanda dagarna 1–24
    const days = Array.from({ length: 24 }, (_, i) => i + 1);
    shuffleArray(days);

    // Skapa luckor
    days.forEach(day => {
        const door = document.createElement("button");
        door.textContent = day;
        door.classList.add("advent-door");

        if (day > todayDate) {
            door.disabled = true;
            door.classList.add("door-locked");
            door.setAttribute("aria-label", `Lucka ${day} är låst`);
        } else {
            door.setAttribute("aria-label", `Öppna filmlucka ${day}`);
            door.addEventListener("click", () => openFilmDoor(day, door));
        }

        grid.appendChild(door);
    });

    // Modal
    const modal = document.createElement("div");
    modal.id = "advent-modal";
    modal.classList.add("advent-modal");
    modal.style.display = "none";

    modal.setAttribute("role","dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute( "aria-labelledby", "modal-title");

    section.appendChild(modal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}


/* ===========================
        ÖPPNA FILMLUCKA
=========================== */
function openFilmDoor(day, doorBtn) {
    doorBtn.classList.add("door-open");

    const modal = document.getElementById("advent-modal");
    if (!modal) return;

    modal.innerHTML = "";

    const date = `2025-12-${String(day).padStart(2, "0")}`;
    const film = barnFilmer.find(f => f.date === date);

    const content = document.createElement("div");
    content.classList.add("advent-modal-content");
    content.setAttribute("tabindex", "-1");

    let html = `<h2 id="modal-title" >Lucka ${day}</h2>`;

    if (!film) {
        html += `<p>🎄 Ingen film bakom denna lucka ännu</p>`;
    } else {
        html += `
            <h3>${film.title}</h3>
            <p><strong>Längd:</strong> ${film.duration_minutes}</p>
            <p>${film.teaser_text}</p>

            ${film.bild ? `<img src="${film.bild}" alt="Affisch för ${film.title}">` : ""}

            ${film.film ? `<p><a href="${film.film}" target="_blank" rel="noopener">🎬 Se filmen</a></p>` : ""}

            <ul>
                ${film.curiosity_questions.map(q => `<li>${q}</li>`).join("")}
            </ul>
        `;
    }

    content.innerHTML = html;
    modal.appendChild(content);

    lastFocusedElement = document.activeElement;

    modal.style.display = "flex";
    content.focus();

    document.addEventListener("keydown", escCloseModal);
}


/* ===========================
        MODAL-STÄNGNING
=========================== */
function closeModal() {
    const modal = document.getElementById("advent-modal");
    if (!modal) return;

    modal.style.display = "none";
    modal.innerHTML = "";

    document.removeEventListener("keydown", escCloseModal);

    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

function escCloseModal(e) {
    if (e.key === "Escape") {
        closeModal();
    }
}


/* ===========================
        HJÄLPFUNKTIONER
=========================== */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
