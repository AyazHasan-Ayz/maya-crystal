document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Splash Screen Logic
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove("hidden");
            
            setTimeout(() => {
                mainContent.classList.add("visible");
                
                // Initialize scroll animations once the main content is visible
                initScrollAnimations();
            }, 50);
            
        }, 800); 
    }, 2800); 

    // Scroll Animation Observer Logic
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Triggers when 15% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once it has animated
                }
            });
        }, observerOptions);

        // Select all elements that should fade in on scroll
        const animatedElements = document.querySelectorAll('.fade-on-scroll');
        animatedElements.forEach(el => observer.observe(el));
    }
});