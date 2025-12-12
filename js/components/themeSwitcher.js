export function initThemePicker() {
    const balls = document.querySelectorAll(".ball");

    balls.forEach(ball => {
        // Klick: byt tema
        ball.addEventListener("click", () => applyTheme(ball));

        // Tangentbordsstöd: Enter + Space (WCAG-krav)
        ball.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();   // Stoppar fönsterrullning vid Space
                applyTheme(ball);
            }
        });
    });

    function applyTheme(ball) {
        const theme =
            ball.classList.contains("ball-blue") ? "blue" :
            ball.classList.contains("ball-green") ? "green" :
            "red";

        // Rött är default → ta bort attributet
        if (theme === "red") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }

        // Visuell markering
        balls.forEach(b => b.classList.remove("active"));
        ball.classList.add("active");
    }
}
