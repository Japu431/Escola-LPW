const invisivel = document.getElementById('titulo-hide');
const mostrar = document.getElementById('mostrar');
const ocultar = document.getElementById('ocultar');
const message = document.getElementById('message');
const toggle = document.getElementById('toggle');

mostrar.addEventListener('click', () => {
    invisivel.style.display = "block";
    message.innerHTML = "Visivel..."

})

ocultar.addEventListener('click', () => {
    invisivel.style.display = "none";
    message.innerHTML = "Ocultado..."
})

