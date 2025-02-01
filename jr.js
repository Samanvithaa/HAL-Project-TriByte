function createStars(containerId) {
    const container = document.getElementById(containerId);
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.innerHTML = "★";
        star.classList.add("star");
        star.dataset.value = i;
        star.addEventListener("click", function () {
            const stars = container.querySelectorAll(".star");
            stars.forEach(s => s.classList.remove("selected"));
            for (let j = 0; j < i; j++) {
                stars[j].classList.add("selected");
            }
        });
        container.appendChild(star);
    }
}

function submitFeedback() {
    const feedback = document.getElementById("additionalFeedback").value;
    console.log("User Feedback:", feedback);
    document.getElementById("thanksMessage").style.display = "block";
}

createStars("service");
createStars("food");
createStars("ambiance");