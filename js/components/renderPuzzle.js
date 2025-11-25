console.log("renderPuzzel.js laddas");

export function renderPuzzle(data) {
    const wrapper = document.createElement("section");
    wrapper.classList.add("nissePuzzle", "fade-in");

    wrapper.innerHTML = `
        <h3>Dagens pussel 🧩</h3>
        <p>Klicka för att gå till pusselsidan!</p>
        <button class="puzzleBtn">Öppna pusslet</button>
    `;

    // Knappen länkar till pussel-sidan
    wrapper.querySelector(".puzzleBtn").addEventListener("click", () => {
        window.location.href = "./pussel.html";
    });

    return wrapper;
}
