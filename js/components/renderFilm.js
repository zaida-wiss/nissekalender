console.log("renderFilm.js laddas..");

export function renderFilmCard(film) {
const wrapper = document.createElement("article");
wrapper.classList.add("card", "film-card", "fade-in");



//Bild (WCAG alt-text)
const img = document.createElement("img");
img.src = film.image;
img.alt = `Affisch för filmen ${film.title}`;

//Titel
const title = document.createElement("h3");
title.textContent = film.title;

// Release-year
const year = document.createElement("p");
year.textContent = `År: ${film.release_date}`;

// Kort beskrivning
const desc = document.createElement("p");
desc.textContent = film.description;



// Lägg allt i wrappern
wrapper.appendChild(img);
wrapper.appendChild(title);
wrapper.appendChild(year);
wrapper.appendChild(desc);

return wrapper;
console.log(wrapper);
}