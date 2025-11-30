export function initThemePicker() {
    const balls = document.querySelectorAll(".ball");

    balls.forEach(ball => {
        ball.addEventListener("click", () => {
            const theme = 
            ball.classList.contains("ball-blue") ? "blue":
            ball.classList.contains("ball-green") ? "green":
            "red";

            //Rött är default → ta bort attribut

        if (theme==="red") {
            document.documentElement.removeAttribute("data-theme");
        }else {
            document.documentElement.setAttribute("data-theme", theme)
        }

        //Visuell markering
        balls.forEach(b => b.classList.remove("active"));
        ball.classList.add("active");
    });

    //Tangentbordsstöd (Enter)
    ball.addEventListener("keydown", (e) => {
        if (e.key === "Enter") ball.click();
    });
});
}
