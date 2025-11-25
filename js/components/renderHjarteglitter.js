console.log("renderHjarteglitter.js laddas");

export function renderHjarteglitter(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseHjarteglitter", "fade-in", "nisseStyle");

    wrapper.innerHTML = `
        <h3>💖 Dagens hjärteglitter 💖</h3>
        <hr class="nisse-divider">
        <p>${data.hjarteglitter}</p>
    `;

    return wrapper;
}
