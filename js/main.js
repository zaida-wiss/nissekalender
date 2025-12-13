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
import { initBarnFilmKalender } from "./modules/barnFilmKalender.js";
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
const todayNisseBrev = document.getElementById("todayNisseBrev");
const startScreen = document.getElementById("startScreen");
const openBtn = document.getElementById("openLuckaBtn");


// =============================
// KLICK: ÖPPNA DAGENS LUCKA
// =============================
openBtn.addEventListener("click", () => {
openBtn.textContent = "Nissen letar efter dagens brev...";
openBtn.disabled = true;


setTimeout(() => {
setActiveSection("todayNisseBrev");
renderToday();

}, 1000);
});


// =============================
// RENDERA DAGENS NISSEBREV
// =============================
function renderToday() {
todayNisseBrev.innerHTML = "";

const todaysLetter = nisseBrev.find(entry => entry.datum === today);

todayNisseBrev.appendChild(renderBrevet(today, todaysLetter));


fadeIn(todayNisseBrev);
}


// === FILMGALLERI ===//

// =============================
// FEATURE FLAG – FILMKNAPPENS BETEENDE
// =============================
// Byt mellan olika lägen utan att röra event listeners
// "GALLERY" = vanligt filmgalleri
// "ADVENT"  = adventslucka med barnfilm
const FILM_MODE = "ADVENT";


// Hämta filmsektion
// =============================
// FILMKNAPP – ROUTER
// =============================

// DOM
const filmTipsSection = document.getElementById("film-tips");
const movieBtn = document.getElementById("movieBtn");

console.log("movieBtn:", movieBtn);
console.log("filmTipsSection:", filmTipsSection);

// Gemensam öppningsfunktion
function openFilmContent() {
  console.log("🎬 Filmknapp – läge:", FILM_MODE);

  setActiveSection("film-tips");

  if (FILM_MODE === "GALLERY") {
    initFilmGallery(filmTipsSection);
  }

  if (FILM_MODE === "ADVENT") {
    initBarnFilmKalender(filmTipsSection);
  }
}

// Klick + tangentbord (WCAG)
movieBtn.addEventListener("click", openFilmContent);
console.log("filmknappen reagerade på klick");

