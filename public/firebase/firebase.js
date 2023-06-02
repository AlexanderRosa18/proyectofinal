// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import {getDatabase, ref, onValue, update, push,child}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCqTY45RBIGl8rAUJ0EvdVf2zi_H8fmPM",
  authDomain: "pagina2023-97b8f.firebaseapp.com",
  projectId: "pagina2023-97b8f",
  storageBucket: "pagina2023-97b8f.appspot.com",
  messagingSenderId: "1034473496612",
  appId: "1:1034473496612:web:8d30bcde527547b34678b1",
  measurementId: "G-G6PEXVEW6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Ahora acá estarán mis comandos para el logeo
var UsuarioConectado = document.getElementById('UsuarioConectado');
var boton1 = document.getElementById('boton1');
var boton2 = document.getElementById('boton2');
var textoMensaje = document.getElementById('textoMensaje');
var mensajesChat = document.getElementById('mensajesChat');
var nombreUsuarioConectado = "";

boton1.onclick = async function () {
  //Esta función nos permite obtener la lógica de autenticación
  var auth = getAuth();
  //Creamos el proveedor (que en este caso sería google).
  var provider = new GoogleAuthProvider();
  auth.language = "es";
  var response = await signInWithPopup(auth, provider);
  alert(response.user.email);
  UsuarioConectado.innerText = response.user.email;
  boton2.style.display = "block";
  boton1.style.display = "none";
  nombreUsuarioConectado = response.user.email;
  escucharYDibujarMensajes ()
}

  boton2.onclick = async function () {
    var auth = getAuth();
    await auth.signOut();
    boton2.style.display = "none";
    boton1.style.display = "block";
    UsuarioConectado.innerText = "No estás conectado";
    nombreUsuarioConectado = "";
  }

 textoMensaje.onkeydown = async function(event){
  if (event.key == "Enter"){
    if (nombreUsuarioConectado == ""){
      alert("Debes iniciar sesión");
      return;
    }
    var db = getDatabase();
    var referenciaMensaje = ref(db, "mensaje");
    var nuevaLlave = push( child(ref(db), "mensaje") ).key;
    var nuevosDatos = {
      [nuevaLlave]: {
        usuario: nombreUsuarioConectado,
        mensaje: textoMensaje.value,
        fecha: new Date().toLocaleDateString()

      }

    }
    textoMensaje.value = ""
    update(referenciaMensaje, nuevosDatos)
  }

 }
  
  function escucharYDibujarMensajes (){
    //Referencia a base de datos FIREBASE
    var db = getDatabase();
    var referenciaMensaje = ref(db, "mensaje");
    onValue(referenciaMensaje, function(datos){
      var valoresObtenidos = datos.val();
      //console.log()
      mensajesChat.innerHTML = "";
      Object.keys(valoresObtenidos).forEach(llave=>{
        var mensajeDescargado = valoresObtenidos[llave];
        var mensaje = "";
        mensaje = "<div class='nombre-usuario'>" + mensajeDescargado.usuario + "</div>";
        mensaje += "<div class='mensaje-chat'>" + mensajeDescargado.mensaje + "</div>";
        mensaje += "<div>" + mensajeDescargado.fecha + "</div><hr/>";
        mensajesChat.innerHTML += mensaje;
      })
      })

  } 
  

