var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Para pantallas pequeñas
    spaceBetween: 30,
    loop: true, // Para hacer el carrusel continuo
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, // El autoplay se mantiene activo tras la interacción
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite saltar a las tarjetas con las viñetas
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Para pantallas medianas y grandes
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});