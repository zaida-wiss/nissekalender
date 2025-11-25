console.log("renderRecept.js laddas");

export function renderRecept(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseRecept", "fade-in");

    wrapper.innerHTML = `
        <h3>Dagens recept 🍪</h3>
        <p>${data.recept}</p>
    `;

    return wrapper;
}
