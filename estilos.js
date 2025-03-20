document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExample');
    const video = document.querySelector('#carouselVideo');

    carousel.addEventListener('slide.bs.carousel', function (event) {
        // Verifica si el slide que sale contiene el video y lo pausa
        if (event.relatedTarget.querySelector('video') === null) {
            video.pause();
        }
    });

    // Opcional: reproducir automáticamente si vuelves al slide del video
    carousel.addEventListener('slid.bs.carousel', function (event) {
        if (event.relatedTarget.querySelector('video') !== null) {
            video.play();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video-fondo");
    video.playbackRate = 0.7; // Ajusta la velocidad (1 = normal, 0.5 = más lento, 2 = más rápido)
});
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar1");

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        // Desaparecer la barra al hacer scroll hacia abajo
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-100px"; // Ajusta según el tamaño de tu barra
        } else {
            navbar.style.top = "0"; // Restablecer la barra a su posición
            navbar.classList.add("scrolled");
        }

        // Cuando la página esté en la parte superior, eliminar el fondo
        if (currentScroll === 0) {
            navbar.classList.remove("scrolled");
        }

        lastScrollTop = currentScroll;
    });
});


function copyEmail(event) {
    event.preventDefault();

    let card = event.target.closest('.card-client');

    // Obtiene el email del data-email
    let email = card.getAttribute('data-email');

    // Copia el email al portapapeles
    navigator.clipboard.writeText(email).then(() => {
        // muestra el tooltip
        let tooltip = card.querySelector('.tooltip');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';

        // Oculta el tooltip
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }, 2000);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const aboutUsVideo = document.querySelector(".video-aboutus");
    if (aboutUsVideo) {
        aboutUsVideo.playbackRate = 0.7;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("aboutus").classList.add("visible");
});