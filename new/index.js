document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector(".arrow");
    const buttonUp = document.getElementById("up");
    const buttonDown = document.getElementById("down");
    const buttonLeft = document.getElementById("left");
    const buttonRight = document.getElementById("right");

    const arrowChange = (strelca) => {
        arrow.textContent = strelca;
    }

    buttonUp.addEventListener("click", () => { arrowChange("↑"); })
    buttonDown.addEventListener("click", () => { arrowChange("↓"); })
    buttonLeft.addEventListener("click", () => { arrowChange("←"); })
    buttonRight.addEventListener("click", () => { arrowChange("→"); })
})