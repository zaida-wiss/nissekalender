export function renderBrevet(today, todaysData) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("nisseBrevet", "fade-in");

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
            <img src="./bilder/Glad_tomten_på_beige_bakgrund-removebg-preview.png" alt="Glad nisse">
        `;
    }

    wrapper.innerHTML = content;
    return wrapper;
}
