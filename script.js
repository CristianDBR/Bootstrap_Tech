document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector('.apple-nav');
    if (navbar) {
        const addScrolledClass = () => {
            if (window.scrollY > 30) { 
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', addScrolledClass);
        addScrolledClass();
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                 e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                 const navbarCollapse = document.querySelector('.navbar-collapse.show');
                 if(navbarCollapse) {
                      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                         toggle: false 
                      });
                      bsCollapse.hide();
                 }
            } else if (targetId === '#') {
                 e.preventDefault();
                 window.scrollTo({ top: 0, behavior: 'smooth'});
            }
        });
    });

});