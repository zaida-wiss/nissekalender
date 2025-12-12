// js/modules/adventCalendar.js
import { getToday } from "../data/dayUtils.js";
import { nisseKalender } from "../data/nisseKalender.js";
import { setActiveSection, closeAllSections } from "../utils/viewManager.js";

let lastFocusedElement = null;

export function initAdventCalendar() {
    const adventBtn = document.getElementById("adventBtn");
    const adventSection = document.getElementById("advent-kalender");

    if (!adventBtn || !adventSection) {
        console.error("❌ Adventkalender: Kunde inte hitta viktiga DOM-element.");
        return;
    }

    adventBtn.addEventListener("click", () => openAdvent(adventSection));
    adventBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openAdvent(adventSection);
        }
    });
}


/* ===========================
      ÖPPNA ADVENTSKALENDERN
=========================== */
function openAdvent(section) {
    try {
        lastFocusedElement = document.activeElement;

        setActiveSection("advent-kalender");

        section.innerHTML = "";
        buildCalendar(section);

        // sätter fokus på första luckan
        const firstBtn = section.querySelector("button");
        if (firstBtn) firstBtn.focus();

        document.addEventListener("keydown", handleEsc);

    } catch (error) {
        console.error("❌ Fel vid öppning av adventskalender:", error);
    }
}


/* ===========================
      STÄNG ADVENTSKALENDERN
=========================== */
function closeAdvent() {
    try {
        closeAllSections();
        document.removeEventListener("keydown", handleEsc);

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

    } catch (error) {
        console.error("❌ Fel vid stängning av adventskalender:", error);
    }
}

function handleEsc(e) {
    if (e.key === "Escape") {
        closeAdvent();
    }
}


/* ===========================
        BYGG KALENDERN
=========================== */
function buildCalendar(section) {
    try {
        // Rubrik
        const heading = document.createElement("h2");
        heading.textContent = "Adventskalender";
        section.appendChild(heading);

        // Grid för luckor
        const grid = document.createElement("div");
        grid.classList.add("advent-grid");
        section.appendChild(grid);

        const todayDate = getToday()?.split("-")[2];
        const today = Number(todayDate || 24);

        for (let day = 1; day <= 24; day++) {
            const door = document.createElement("button");
            door.textContent = day;
            door.classList.add("advent-door");

            if (day > today) {
                door.disabled = true;
                door.classList.add("door-locked");
                door.setAttribute("aria-label", `Lucka ${day} är låst`);
            } else {
                door.setAttribute("aria-label", `Öppna lucka ${day}`);
                door.addEventListener("click", () =>
                    openDoor(day, door)
                );
            }

            grid.appendChild(door);
        }

        // Modal-overlay FÖR LUCKINNEHÅLL — alltid sist
        const modal = document.createElement("div");
        modal.id = "advent-modal";
        modal.classList.add("advent-modal");
        modal.style.display = "none";
        section.appendChild(modal);

        // Lägg click-outside-stängning HÄR
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

    } catch (error) {
        console.error("❌ Fel vid byggandet av kalendern:", error);
    }
}


/* ===========================
        ÖPPNA EN LUCKA
=========================== */
function openDoor(day, doorBtn) {
    try {
        doorBtn.classList.add("door-open");

        const modal = document.getElementById("advent-modal");
        modal.innerHTML = "";

        const todaysData = nisseKalender.find(entry =>
            entry.datum.endsWith(`-${String(day).padStart(2, "0")}`)
        );

        const content = document.createElement("div");
        content.classList.add("advent-modal-content");

        let html = `<h2>Lucka ${day}</h2>`;

        // --- ENDA DELEN DU VISAR ---
        if (todaysData?.hjarteglitter) {
            html += `
                <p>
                    💛 <strong><span class="underline">Hjärteglitter:</span></strong><br>
                    ${todaysData.hjarteglitter}
                </p>
            `;
        } else {
            html += `<p>Ingen hjärteglitter för denna dag ✨</p>`;
        }

        content.innerHTML = html;

        modal.appendChild(content);

modal.style.display = "flex";
content.focus();


// ESC-stängning
document.addEventListener("keydown", escCloseModal);

    } catch (error) {
        console.error(`❌ Fel vid öppning av lucka ${day}:`, error);
    }
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
    if (e.key === "Escape") {
        closeModal();
    }
}
