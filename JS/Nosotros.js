// Obtener los botones y modales
var modalMision = document.getElementById("modalMision");
var modalVision = document.getElementById("modalVision");

var btnMision = document.getElementById("verMisionBtn");
var btnVision = document.getElementById("verVisionBtn");

var spanCloseMision = document.querySelector("#modalMision .close");
var spanCloseVision = document.querySelector("#modalVision .close");

// Abrir modal de Misión
btnMision.onclick = function() {
    modalMision.style.display = "block";
}

// Abrir modal de Visión
btnVision.onclick = function() {
    modalVision.style.display = "block";
}

// Cerrar los modales al hacer clic en el ícono de cerrar
spanCloseMision.onclick = function() {
    modalMision.style.display = "none";
}

spanCloseVision.onclick = function() {
    modalVision.style.display = "none";
}

// Cerrar los modales al hacer clic fuera del contenido modal
window.onclick = function(event) {
    if (event.target == modalMision) {
        modalMision.style.display = "none";
    }
    if (event.target == modalVision) {
        modalVision.style.display = "none";
    }
}
