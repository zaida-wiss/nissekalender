console.log("main.js laddas");


// === DATA ===
import { getToday } from "./data/dayUtils.js";
import { nisseBrev } from "./data/nisseBrev.js";
import { nisseKalender } from "./data/nisseKalender.js";


// === UI-KOMPONENTER ===
import { renderBrevet } from "./components/renderBrevet.js";
import { renderBus } from "./components/renderBus.js";
import { renderUppdrag } from "./components/renderUppdrag.js";
import { renderHjarteglitter } from "./components/renderHjarteglitter.js";
import { renderRecept } from "./components/renderRecept.js";
import { renderPuzzle } from "./components/renderPuzzle.js";
import { initAdventCalendar } from "./modules/adventsKalender.js";
import { initFilmGallery } from "./modules/filmGallery.js";
import { initThemePicker } from "./components/themeSwitcher.js";
import { setActiveSection, closeAllSections } from "./utils/viewManager.js";

initThemePicker();
initAdventCalendar();

// === UTILS ===
import { fadeIn } from "./utils/fade.js";


// =============================
// DATUM (live / test)
// =============================
let today = getToday();
// today = "2025-11-30"; // testdatum vid behov


// =============================
// DOM-REFERENSER
// =============================
const todayLucka = document.getElementById("todayLucka");
const startScreen = document.getElementById("startScreen");
const openBtn = document.getElementById("openLuckaBtn");


// =============================
// KLICK: ÖPPNA DAGENS LUCKA
// =============================
openBtn.addEventListener("click", () => {
openBtn.textContent = "Nissen letar efter dagens brev...";
openBtn.disabled = true;


setTimeout(() => {
setActiveSection("todayLucka");
renderToday();

}, 1000);
});


// =============================
// RENDERA DAGENS INNEHÅLL
// =============================
function renderToday() {
todayLucka.innerHTML = "";


const todaysLetter = nisseBrev.find(entry => entry.datum === today);
const todaysExtra = nisseKalender.find(entry => entry.datum === today);


// --- Brev (barnens del) ---
todayLucka.appendChild(renderBrevet(today, todaysLetter));


// --- Bus / Uppdrag / Hjärteglitter / Recept / Pussel ---
if (todaysExtra) {
if (todaysExtra.bus) todayLucka.appendChild(renderBus(todaysExtra));
if (todaysExtra.uppdrag) todayLucka.appendChild(renderUppdrag(todaysExtra));
if (todaysExtra.hjarteglitter) todayLucka.appendChild(renderHjarteglitter(todaysExtra));
if (todaysExtra.recept) todayLucka.appendChild(renderRecept(todaysExtra));
if (todaysExtra.pussel) todayLucka.appendChild(renderPuzzle(todaysExtra));
}

fadeIn(todayLucka);
}


// === FILMGALLERI ===//

// Hämta filmsektion + ikon
const filmTipsSection = document.getElementById("film-tips");
const movieBtn = document.getElementById("movieBtn"); // <-- din movies.png
console.log("movieBtn:", movieBtn);
console.log("filmTipsSection:", filmTipsSection);


console.log("movieBtn är:", movieBtn);

// Lägg till klick + tangentbordsstöd
movieBtn.addEventListener("click", () => {
    showFilmTips();
});

movieBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") showFilmTips();
});

function showFilmTips() {
  setActiveSection("film-tips");
  initFilmGallery(filmTipsSection);
}
