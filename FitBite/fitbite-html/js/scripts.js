document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

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
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(email);
    }
});
