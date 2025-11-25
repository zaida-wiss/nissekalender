console.log("renderUppdrag.js laddas");

export function renderUppdrag(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseUppdrag", "fade-in", "nisseStyle");

    wrapper.innerHTML = `
        <h3>🎯 Dagens uppdrag 🎯</h3>
        <hr class="nisse-divider">
        <p>${data.uppdrag}</p>
    `;

    return wrapper;
}