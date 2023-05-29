 // Arreglos de colores y texto
 var coloresTitulo = ["red", "blue", "green", "brown", "orange", "black", "lightblue"];
 var fuenteTexto = ["Arial", "Helvetica", "Trebuchet MS", "Lucida Sans", "Lucida Sans Regular"];
 var coloresFondo = ["lightblue", "green", "yellow", "lightgray", "orange", "purple", "white"];
 var CambiarColorTitulo = document.getElementById('CambiarColorTitulo');
 var CambiarFuenteTexto = document.getElementById('CambiarFuenteTexto');
 var CambiarColorFondo = document.getElementById('CambiarColorFondo');

 function cambiarColorTitulo() {
    var titulo = document.getElementById("titulo");
    var colorAleatorio = coloresTitulo[Math.floor(Math.random() * coloresTitulo.length)];
    titulo.style.color = colorAleatorio;
  }

  function cambiarFuenteTexto() {
    var texto = document.getElementById("texto");
    var fuenteAleatorio = fuenteTexto[Math.floor(Math.random() * fuenteTexto.length)];
    texto.style.fontFamily = fuenteAleatorio;
  }

  function cambiarColorFondo() {
    var body = document.body;
    var colorAleatorio = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];
    body.style.backgroundColor = colorAleatorio;
  }