console.log("main.js laddas");

import {nisseBrev} from "./nisseBrev.js";
let today = new Date().toLocaleDateString("sv-SE");
const todayLucka = document.getElementById("todayLucka");
today = "2025-12-02";
const output = document.createElement("div");
output.classList.add("nisseBrevet");

function hittaDagensBrev () {
    const todays = nisseBrev.find((i) => i.datum === today);
    
    if (!todays) {
    output.innerHTML=`
    <h2>${today}</h2>
    <p>Nissen verkar vila idag <br>-inget Brev hittades.</p>
    `;
    todayLucka.appendChild(output);
    return;
    }

    output.innerHTML=`
    <h2>${today}</h2>
    <p>${todays.brev}</p>
    <img src="./bilder/Glad_tomten_på_beige_bakgrund-removebg-preview.png">
    `;
    todayLucka.appendChild(output);   
}

hittaDagensBrev();
