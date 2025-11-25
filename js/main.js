console.log("main.js laddas");
//data
import { getToday } from "./data/dayUtils.js";
import { nisseBrev } from "./data/nisseBrev.js";
import { vuxnaData } from "./data/vuxna_mockdata.js";
//components
import { renderBrevet } from "./components/renderBrevet.js";
import { renderBus } from "./components/renderBus.js";
import { renderUppdrag } from "./components/renderUppdrag.js";
import { renderHjarteglitter } from "./components/renderHjarteglitter.js";
//utils
import { fadeIn } from "./utils/fade.js";


let today = new Date().toLocaleDateString("sv-SE");
today = "2025-12-02"; // testdatum

const todayLucka = document.getElementById("todayLucka");
const output = document.createElement("div");
output.classList.add("nisseBrevet");

const startScreen = document.getElementById("startScreen");
const openBtn = document.getElementById("openLuckaBtn");


openBtn.addEventListener("click", () => {  
    openBtn.textContent = "Nissen letar efter dagens brev...";
    openBtn.disabled = true;

    setTimeout(() => {
        startScreen.style.display = "none";
        todayLucka.style.display = "grid";   // nu visas luckan!
        hittaDagensBrev();
    }, 800);
});

function hittaDagensBrev() {
    const todays = nisseBrev.find(i => i.datum === today);
    
    if (!todays) {
        output.innerHTML = `
        <h2>${today}</h2>
        <p>Nissen verkar vila idag <br>- inget brev hittades.</p>
        `;
        todayLucka.appendChild(output);
        return;
    }

    output.innerHTML = `
        <h2>${today}</h2>
        <p>${todays.brev}</p>
        <img src="./bilder/Glad_tomten_på_beige_bakgrund-removebg-preview.png">
    `;
    todayLucka.appendChild(output);  
}
