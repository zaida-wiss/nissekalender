console.log("renderFilm.js laddas..");

export function renderFilm(film) {
  const wrapper = document.createElement("article");
  wrapper.classList.add("card", "film-card", "fade-in");

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = `Affisch för filmen ${film.title}`;

  const title = document.createElement("h3");
  title.textContent = film.title;

  const year = document.createElement("p");
  year.textContent = `År: ${film.release_date}`;

  const desc = document.createElement("p");
  desc.textContent = film.description;

  wrapper.appendChild(img);
  wrapper.appendChild(title);
  wrapper.appendChild(year);
  wrapper.appendChild(desc);

  console.log(wrapper)
  return wrapper;
}
