console.log("renderBrevet.js laddas");

export function renderBrevet(today, todaysData) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "fade-in");

    const title = `<h2>${today}</h2>`;

    let content;

    if (!todaysData) {
        content = `
            ${title}
            <p>Inget brev hittades.<br>Här bor ingen just nu.</p>
        `;
    } else {
        content = `
            ${title}
            <p>${todaysData.brev}</p>
            <img src="./bilder/nissarna.webp" alt="Glada nissar">
        `;
    }

    wrapper.innerHTML = content;
    return wrapper;
}
