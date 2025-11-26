console.log("renderBrevet.js laddas");

export function renderBrevet(today, todaysData) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("nisseBrevet", "fade-in", "nisseStyle");

    const title = `<h2>${today}</h2>`;

    let content;

    if (!todaysData) {
        content = `
            ${title}
            <p>Nissen verkar vila idag.<br>- inget brev hittades.</p>
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
