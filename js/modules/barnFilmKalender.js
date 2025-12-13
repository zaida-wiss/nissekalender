// js/modules/barnFilmKalender.js
import { getToday } from "../data/dayUtils.js";
import { barnFilmer } from "../data/barnFilmer.js";
import { setActiveSection, closeAllSections } from "../utils/viewManager.js";

let lastFocusedElement = null;

/* ===========================
      INIT FILMKALENDERN
=========================== */
export function initBarnFilmKalender() {
    const filmBtn = document.getElementById("movieBtn");
    const filmSection = document.getElementById("film-tips");

    if (!filmBtn || !filmSection) {
        console.error("❌ Filmkalender: Saknar DOM-element");
        return;
    }

    filmBtn.addEventListener("click", () => openFilmCalendar(filmSection));
    filmBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFilmCalendar(filmSection);
        }
    });
}


/* ===========================
      ÖPPNA FILMKALENDERN
=========================== */
function openFilmCalendar(section) {
    try {
        lastFocusedElement = document.activeElement;

        setActiveSection("film-tips");

        section.innerHTML = "";
        buildFilmCalendar(section);

        const firstBtn = section.querySelector("button");
        if (firstBtn) firstBtn.focus();

        document.addEventListener("keydown", handleEsc);

    } catch (error) {
        console.error("❌ Fel vid öppning av filmkalender:", error);
    }
}


/* ===========================
      STÄNG FILMKALENDERN
=========================== */
function closeFilmCalendar() {
    closeAllSections();
    document.removeEventListener("keydown", handleEsc);
    if (lastFocusedElement) lastFocusedElement.focus();
}

function handleEsc(e) {
    if (e.key === "Escape") {
        closeFilmCalendar();
    }
}


/* ===========================
        BYGG FILMKALENDERN
=========================== */
function buildFilmCalendar(section) {
    // Rubrik
    const heading = document.createElement("h2");
    heading.textContent = "";
    section.appendChild(heading);

    // Grid
    const grid = document.createElement("div");
    grid.classList.add("advent-grid");
    section.appendChild(grid);

    const todayDate = Number(getToday()?.split("-")[2] || 24);

    // Skapa & blanda 1–24
    const days = Array.from({ length: 24 }, (_, i) => i + 1);
    for (let i = days.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [days[i], days[j]] = [days[j], days[i]];
    }

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
    modal.innerHTML = "";

    const date = `2025-12-${String(day).padStart(2, "0")}`;
    const film = barnFilmer.find(f => f.date === date);

    const content = document.createElement("div");
    content.classList.add("advent-modal-content");

    let html = `<h2>Lucka ${day}</h2>`;

    if (!film) {
        html += `<p>🎄 Ingen film bakom denna lucka ännu</p>`;
    } else {
        html += `
            <h3>${film.title}</h3>
            <p><strong>Längd:</strong> ${film.duration_minutes}</p>
            ${film.bild ? `<img src="${film.bild}" alt="Affisch för ${film.title}">` : ""}
            <p>${film.teaser_text}</p>

            <ul>
            ${film.curiosity_questions.map(q => `<li>${q}</li>`).join("")}
            </ul>
            
            ${film.film ? `<p><a href="${film.film}" target="_blank">🎬 Se filmen</a></p>` : ""}
        `;
    }

    content.innerHTML = html;
    modal.appendChild(content);

    modal.style.display = "flex";
    content.focus();

    document.addEventListener("keydown", escCloseModal);
}


/* ===========================
        MODAL-STÄNGNING
=========================== */
function closeModal() {
    const modal = document.getElementById("advent-modal");
    modal.style.display = "none";
    modal.innerHTML = "";
    document.removeEventListener("keydown", escCloseModal);
    if (lastFocusedElement) lastFocusedElement.focus();
}

function escCloseModal(e) {
    if (e.key === "Escape") closeModal();
}
