console.log("renderUppdrag.js laddas");

export function renderUppdrag(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseUppdrag", "fade-in");

    wrapper.innerHTML = `
        <h3>🎯 Dagens uppdrag 🎯</h3>
        <p>${data.uppdrag}</p>
    `;

    return wrapper;
}