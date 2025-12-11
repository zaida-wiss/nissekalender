console.log("filmGallery.js laddas..");

import { fetchFilms } from "./services/filmApi.js";
import { renderFilmCard } from "./components/renderFilm.js";

export async function initFilmGallery(targetElement) {
    targetElement.innerHTML = "";
    targetElement.classList.add("film-grid");

    try {
        const films = await fetchFilms();
        renderFilms(films, targetElement);
    } catch (error) {
        targetElement.textContent = "Filmerna kunde inte laddas just nu.";
    }
}

function renderFilms(films, container) {
    films.forEach(film => {
        const card = renderFilmCard(film);
        container.appendChild(card);
    });
}
