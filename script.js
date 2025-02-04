
document.addEventListener("DOMContentLoaded", function () {
    const missionContent = document.querySelector(".mission-content");

    function handleScroll() {
        const sectionTop = missionContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) { // Triggers animation when 75% visible
            missionContent.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately if already in view
});
