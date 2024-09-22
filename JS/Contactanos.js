const btn = document.getElementById('button');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Enviando...';

        const serviceID = 'service_u3zuh47';
        const templateID = 'template_tpsdup4';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'ENVIAR MENSAJE';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'ENVIAR MENSAJE';
                alert(JSON.stringify(err));
            });
    });

// Función para actualizar el contador de palabras
function updateWordCount() {
    const message = document.getElementById('message');
    const wordCount = document.getElementById('word-count');
    const maxWords = 250;
    const words = message.value.split(/\s+/).filter(word => word.length > 0);
    const remainingWords = maxWords - words.length;
    wordCount.textContent = `Palabras restantes: ${remainingWords}`;

    if (remainingWords < 0) {
        message.value = words.slice(0, maxWords).join(' ');
        wordCount.textContent = 'Palabras restantes: 0';
    }
}