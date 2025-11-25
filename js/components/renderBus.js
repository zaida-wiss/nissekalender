console.log("renderBus.js laddas");

export function renderBus(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseBus", "fade-in", "nisseStyle");

    wrapper.innerHTML = `
        <h3>👉 🙃 Dagens bus 👉 😜</h3>
        <hr class="nisse-divider">
        <p>${data.bus}</p>
    `;

    return wrapper;
}
