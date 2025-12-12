console.log("filmGallery.js laddas..");

import { fetchFilms } from "../services/filmApi.js";
import { renderFilmCard } from "../components/renderFilm.js";

console.log("🧠 filmGallery.js laddas – RÄTT FIL");

export async function initFilmGallery(container) {
  console.log("🎬 initFilmGallery körs – RÄTT FUNKTION");

  container.innerHTML = "";

  const grid = document.createElement("div");
  grid.classList.add("film-grid");

  const films = await fetchFilms();

  films.forEach(film => {
    grid.appendChild(renderFilmCard(film));
  });

  container.appendChild(grid);
}
