const header = document.getElementById('header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.top = '-100px'; // Ocultar menú al bajar
            } else {
                header.style.top = '0'; // Mostrar menú al subir
            }
            lastScroll = currentScroll;
        });

        const menuToggle = document.getElementById('menu-toggle');
        const navUl = document.querySelector('#nav ul');

        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });