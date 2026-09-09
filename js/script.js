document.addEventListener('DOMContentLoaded', function () {
// --- Mobile Menu (fixed to target the navbar nav-menu) ---
const hamburger = document.querySelector(".hamburger");

// Prefer the navigation menu inside the .navbar (main menu).
// Fallback to the first .nav-menu if the preferred selector isn't found.
let navMenu = document.querySelector(".navbar .nav-menu");
if (!navMenu) navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    // ensure aria attributes exist
    hamburger.setAttribute('aria-controls', 'main-nav');
    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener("click", () => {
        const isActive = hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        // update aria-expanded
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close the menu when a navigation link is clicked
    document.querySelectorAll(".navbar .nav-link").forEach(n => {
        n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

    // --- Homepage Slider ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Initialize first slide
        slides[0].classList.add('active');
    }

});