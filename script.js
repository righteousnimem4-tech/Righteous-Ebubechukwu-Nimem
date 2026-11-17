
// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show-menu");

        const isOpen = mainNav.classList.contains("show-menu");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link

    document.querySelectorAll("#mainNav a").forEach(function (link) {

        link.addEventListener("click", function () {
            mainNav.classList.remove("show-menu");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });

    });

}


// 2. TYPING EFFECT

const profession = document.querySelector(".hero h2");

if (profession) {

    const professionText = "Aspiring Web Developer";

    let letterIndex = 0;

    profession.textContent = "";

    function typeProfession() {

        if (letterIndex < professionText.length) {

            profession.textContent += professionText.charAt(letterIndex);

            letterIndex++;

            setTimeout(typeProfession, 100);

        }

    }

    typeProfession();

}


// 3. SCROLL REVEAL ANIMATION

const revealSections = document.querySelectorAll(
    ".content-section, .contact-section, footer"
);

revealSections.forEach(function (section) {
    section.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active-reveal");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealSections.forEach(function (section) {
        observer.observe(section);
    });

} else {

    revealSections.forEach(function (section) {
        section.classList.add("active-reveal");
    });

}
