document.addEventListener("DOMContentLoaded", function () {

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.apple-nav');
    if (navbar) { // Controlla se la navbar esiste
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Aggiungi classe dopo 50px di scroll
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Intersection Observer for Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // rispetto al viewport
        rootMargin: '0px',
        threshold: 0.1 // Visibile almeno al 10%
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Opzionale: smetti di osservare l'elemento una volta rivelato
                // observer.unobserve(entry.target);
            }
             // Opzionale: per far ripartire l'animazione ogni volta che esce e rientra
             // else {
             //     entry.target.classList.remove('reveal-visible');
             // }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });


    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('copyright-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});