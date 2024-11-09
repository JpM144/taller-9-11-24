let count = 0;
let increment = 1;

document.getElementById('incrementButton').addEventListener('click', function () {
    count += increment;
    document.getElementById('counter').textContent = count;

    // Verificar si se alcanza un múltiplo de 5 y ajustar el incremento
    if (count % 5 === 0) {
        increment++;
    }

    // Bloquear el botón si el valor llega a 100
    if (count >= 100) {
        this.disabled = true;
    }
});


document.getElementById('textInput').addEventListener('blur', function () {
    // Convertir el texto a mayúsculas
    this.value = this.value.toUpperCase();
});


const image = document.getElementById('image');

// Cambia la imagen al pasar el mouse
image.addEventListener('mouseover', function () {
    image.src = 'img/2.png' // Cambia a la segunda imagen
});

// Restaura la imagen original al quitar el mouse
image.addEventListener('mouseout', function () {
    image.src = 'img/1.png'; // Vuelve a la primera imagen
});



const content = document.body;
let fontSize = 16; // Tamaño de fuente inicial en px

// Botón para aumentar el tamaño del texto
document.getElementById('increaseFont').addEventListener('click', function () {
    fontSize += 2;
    content.style.fontSize = fontSize + 'px';
});

// Botón para disminuir el tamaño del texto hasta el tamaño inicial
document.getElementById('decreaseFont').addEventListener('click', function () {
    if (fontSize > 16) {
        fontSize -= 2;
        content.style.fontSize = fontSize + 'px';
    }
});



