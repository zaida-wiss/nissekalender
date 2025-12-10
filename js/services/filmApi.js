// services/filmApi.js

export async function fetchFilms() {
    const url = "https://ghibliapi.vercel.app/films";

    const res = await fetch(url);
    if (!res.ok) throw new Error("Kunde inte hämta filmer");

    return await res.json();
}