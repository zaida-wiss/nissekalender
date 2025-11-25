console.log("renderBus.js laddas");

export function renderBus(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseBus", "fade-in");

    wrapper.innerHTML = `
        <h3>Dagens bus</h3>
        <p>${data.bus}</p>
    `;

    return wrapper;
}
