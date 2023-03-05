const imagenes = document.querySelectorAll(".imagen");
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.open(url, "_blank");
  });
}

const myButton = document.querySelector('.my-button');

myButton.addEventListener('click', function() {
  // Agrega aquí el código que deseas ejecutar cuando se hace clic en el botón
  console.log('El botón fue presionado');
});










