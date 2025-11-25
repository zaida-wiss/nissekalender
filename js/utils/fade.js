export function fadeIn(element) {
    if (!element) return;

    element.style.opacity = 0;

    requestAnimationFrame(() => {
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    });
}
