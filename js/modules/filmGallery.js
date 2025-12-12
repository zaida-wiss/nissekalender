console.log("🧠 filmGallery.js laddas – RÄTT FIL");

import { renderFilm } from "../components/renderFilm.js";
// import { filmData } from "../data/filmData.js"; // om du har riktig data

export function initFilmGallery(container) {
  console.log("🎬 initFilmGallery körs – RÄTT FUNKTION");

  container.innerHTML = "";

  const grid = document.createElement("div");
  grid.classList.add("film-grid");
  container.appendChild(grid);

  // 🔴 TEMP TEST – EN FILM (tar bort sen)
  const testFilm = {
    title: "Ensamma hemma-nissen 🎄",
    image: "./bilder/movies.png",
    release_date: "2024",
    description: "Testfilm för att verifiera renderFilm"
  };

  grid.appendChild(renderFilm(testFilm));
}
