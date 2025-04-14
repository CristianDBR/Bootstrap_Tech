document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector('.apple-nav');
    if (navbar) {
        const addScrolledClass = () => {
            if (window.scrollY > 30) { // Attiva effetto un po' prima
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', addScrolledClass);
        addScrolledClass(); // Controlla subito al caricamento
    }

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                } else {
                    // Opzionale: rimuovi per far ripartire l'animazione se esce e rientra
                    // entry.target.classList.remove('reveal-visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        revealElements.forEach(el => {
            observer.observe(el);
        });
    }

    const yearSpan = document.getElementById('copyright-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll per i link interni (opzionale, ma carino)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // Controlla se è solo un # o un link a un elemento esistente
            if (targetId.length > 1 && document.querySelector(targetId)) {
                 e.preventDefault(); // Previene il salto immediato solo se è un link interno valido
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                 // Chiudi la navbar se è aperta su mobile dopo il click
                 const navbarCollapse = document.querySelector('.navbar-collapse.show');
                 if(navbarCollapse) {
                      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                         toggle: false // Evita di riaprirla/richiuderla se clicchi di nuovo
                      });
                      bsCollapse.hide();
                 }
            } else if (targetId === '#') {
                 e.preventDefault(); // Previene il salto se è solo "#"
                 window.scrollTo({ top: 0, behavior: 'smooth'}); // Torna su
            }
            // Non fare preventDefault se non è un link interno (es. link a supporto)
        });
    });

});