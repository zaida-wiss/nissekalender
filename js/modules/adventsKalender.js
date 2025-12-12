// js/modules/adventCalendar.js
import { getToday } from "../data/dayUtils.js";
import { nisseKalender } from "../data/nisseKalender.js";


let lastFocusedElement = null;

export function initAdventCalendar() {
    const adventBtn = document.getElementById("adventBtn");
    const adventSection = document.getElementById("advent-kalender");

    if (!adventBtn || !adventSection) {
        console.error("❌ Adventkalender: Kunde inte hitta viktiga DOM-element.");
        return;
    }

    // Öppna adventskalender
    adventBtn.addEventListener("click", () => openAdvent(adventSection, adventBtn));
    adventBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openAdvent(adventSection, adventBtn);
        }
    });
}

/* ===========================
    ÖPPNA ADVENTSKALENDERN
=========================== */
function openAdvent(section, triggerBtn) {
    try {
        lastFocusedElement = document.activeElement;

        section.innerHTML = "";
        section.style.display = "block";

        buildCalendar(section);

        // Sätt fokus på första elementet i modalen
        const firstBtn = section.querySelector("button, [tabindex]");
        if (firstBtn) firstBtn.focus();

        // ESC för att stänga
        document.addEventListener("keydown", handleEsc);

    } catch (error) {
        console.error("❌ Fel vid öppning av adventskalender:", error);
    }
}

/* ===========================
    STÄNG ADVENTSKALENDERN
=========================== */
function closeAdvent(section, triggerBtn) {
    try {
        section.style.display = "none";
        section.innerHTML = "";
        document.removeEventListener("keydown", handleEsc);

        // Återställ fokus
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

    } catch (error) {
        console.error("❌ Fel vid stängning av adventskalender:", error);
    }
}

function handleEsc(e) {
    if (e.key === "Escape") {
        try {
            const section = document.getElementById("advent-kalender");
            const triggerBtn = document.getElementById("adventBtn");

            if (section && section.style.display === "block") {
                closeAdvent(section, triggerBtn);
            }

        } catch (error) {
            console.error("❌ ESC-fel vid stängning:", error);
        }
    }
}

/* ===========================
    BYGG KALENDERN (24 LUCKOR)
=========================== */
function buildCalendar(section) {
    try {
        // Rubrik
        const heading = document.createElement("h2");
        heading.id = "advent-title";
        heading.textContent = "Adventskalender";
        section.appendChild(heading);

        // Stäng-knapp
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "Stäng";
        closeBtn.setAttribute("aria-label", "Stäng adventskalendern");
        closeBtn.addEventListener("click", () => closeAdvent(section));
        section.appendChild(closeBtn);

        // Grid där luckor ska ligga
        const grid = document.createElement("div");
        grid.classList.add("advent-grid");
        section.appendChild(grid);

        const todayDate = getToday()?.split("-")[2];
        const today = Number(todayDate || 24);

        for (let day = 1; day <= 24; day++) {
            const door = document.createElement("button");
            door.textContent = day;
            door.classList.add("advent-door");
            door.setAttribute("data-day", String(day));

            if (day > today) {
                door.disabled = true;
                door.classList.add("door-locked");
                door.setAttribute("aria-label", `Lucka ${day} är låst`);
            } else {
                door.setAttribute("aria-label", `Öppna lucka ${day}`);
                door.addEventListener("click", () => openDoor(day, door, section));
            }

            grid.appendChild(door);
        }

        // Container för luck-innehåll
        const detailContainer = document.createElement("div");
        detailContainer.id = "advent-detail-container";
        section.appendChild(detailContainer);

    } catch (error) {
        console.error("❌ Fel vid byggandet av kalendern:", error);
    }
}


/* ===========================
    ÖPPNA EN LUCKA
=========================== */
function openDoor(day, doorBtn, section) {
    try {
        // Animationsklass
        doorBtn.classList.add("door-open");

        // Radera tidigare innehåll
        const detailContainer = document.getElementById("advent-detail-container");
        detailContainer.innerHTML = "";

        // Hitta dagens data
        const todaysData = nisseKalender.find(entry =>
            entry.datum.endsWith(`-${String(day).padStart(2, "0")}`)
        );

        const detail = document.createElement("div");
        detail.classList.add("advent-detail");

        if (todaysData) {
            let html = "";

            if (todaysData.brev) html += `<p>📜 <strong>Brev:</strong> ${todaysData.brev}</p>`;
            if (todaysData.bus) html += `<p>🧝 <strong>Bus:</strong> ${todaysData.bus}</p>`;
            if (todaysData.uppdrag) html += `<p>🎄 <strong>Uppdrag:</strong> ${todaysData.uppdrag}</p>`;
            if (todaysData.hjarteglitter) html += `<p>💛 <strong>Hjärteglitter:</strong> ${todaysData.hjarteglitter}</p>`;
            if (todaysData.recept) html += `<p>🍪 <strong>Recept:</strong> ${todaysData.recept}</p>`;
            if (todaysData.pussel) html += `<p>🧩 <strong>Pussel:</strong> ${todaysData.pussel}</p>`;

            detail.innerHTML = html;
        } else {
            detail.textContent = `Nissen lämnade inget extra för dag ${day} – men luckan är ändå magisk! ✨`;
        }

        detailContainer.appendChild(detail);

    } catch (error) {
        console.error(`❌ Fel vid öppning av lucka ${day}:`, error);
    }
}
