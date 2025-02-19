document.addEventListener("DOMContentLoaded", function() {
    // FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío por defecto

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Por favor, introduce un correo válido.");
                return;
            }

            alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
            contactForm.reset();
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }

    // ANIMACIONES DE APARICIÓN AL HACER SCROLL
    const faders = document.querySelectorAll(".fade-in");

    if (faders.length > 0) {
        const options = {
            threshold: 0.1
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("visible");
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, options);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // BOTÓN "VOLVER ARRIBA"
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
