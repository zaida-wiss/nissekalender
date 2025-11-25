console.log("renderHjarteglitter.js laddas");

export function renderHjarteglitter(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nisseHjarteglitter", "fade-in");

    wrapper.innerHTML = `
        <h3>Dagens hjärteglitter 💖</h3>
        <p>${data.hjarteglitter}</p>
    `;

    return wrapper;
}
