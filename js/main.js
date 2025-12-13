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
// RENDERA DAGENS INNEHÅLL
// =============================
function renderToday() {
todayNisseBrev.innerHTML = "";

const todaysLetter = nisseBrev.find(entry => entry.datum === today);

todayNisseBrev.appendChild(renderBrevet(today, todaysLetter));


fadeIn(todayNisseBrev);
}


// === FILMGALLERI ===//

// Hämta filmsektion + ikon
const filmTipsSection = document.getElementById("film-tips");
const movieBtn = document.getElementById("movieBtn"); // <-- din movies.png
console.log("movieBtn:", movieBtn);
console.log("filmTipsSection:", filmTipsSection);


console.log("movieBtn är:", movieBtn);

// Lägg till klick + tangentbordsstöd
movieBtn.addEventListener("click", openFilmGallery);

movieBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); // viktigt för space på button
    openFilmGallery();
  }
});

function openFilmGallery() {
  console.log("🎬 öppnar filmgalleri");
  setActiveSection("film-tips");
  initFilmGallery(filmTipsSection);
}