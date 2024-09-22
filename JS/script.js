 document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('#nav li');
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = "-80px"; // Ajusta este valor según la altura de la cabecera
        } else {
            header.style.top = "0";
        }
        lastScrollTop = scrollTop;

        // Cambia el color del fondo de la cabecera al hacer scroll
        if (scrollTop > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });

    // Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Control de viñetas
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Iniciar slider
    setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

    // Slider de reseñas (eliminado)
    // Ahora se muestran reseñas fijas
    const reviewsContainer = document.querySelector('.reviews-container');
    // Puedes eliminar la lógica de slider de reseñas aquí, ya que será estático
    // reviewCards.forEach(card => card.classList.remove('active')); // Solo si necesitas limpiar alguna clase activa

    // Código para la galería y el modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img') ? this.querySelector('img').src : '';
            const videoSrc = this.querySelector('video') ? this.querySelector('video').src : '';

            modalImage.src = imgSrc;
            modalVideo.src = videoSrc;

            if (imgSrc) {
                modalImage.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (videoSrc) {
                modalImage.style.display = 'none';
                modalVideo.style.display = 'block';
            }

            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImage.src = '';
        modalVideo.src = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });

    // Obtener el botón
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    // Mostrar el botón después de desplazarse 300px
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Al hacer clic en el botón, se desplaza hacia arriba
    scrollTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave hacia arriba
        });
    };
});


 // Initialize menu toggle
 document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
});

// Handle menu hover
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.querySelector('.indicator').style.width = '100%';
    });

    link.addEventListener('mouseout', () => {
        link.querySelector('.indicator').style.width = '0';
    });
});
