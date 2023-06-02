//contiene la operacion o el resultado
let parcial = "";
//donde va el resultado de la operacion
let operRealizada = document.getElementById("operacionRealizada");

let txtResul = document.getElementById("txtResultado")

//ultimo operado seleccionado
let operadorSeleccionado = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo presionado es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
    //se concatena el numero
    numero = numero + num;
    //se concatena la operacion hasta el momento
    parcial = parcial + num;
    //muestro
    operRealizada.innerHTML = parcial;

    //controlamos la division por el cero (0)
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }
    //guardo el tipo de tecla presionado por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado = 'numero'
    }
}

//detecto cuando se presiona una operacion
function operacion(oper){
    //guardo la operacion que se tomo
    operadorSeleccionado = oper;
    ultimoDigitoPresionado = "operacion";
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}

//se realiza el calculo matematio
function calculo(){
    parcial = eval(parcial);
    txtResul.innerHTML = parcial;
    parcial = parcial.toString();
    numero = "";

    operRealizada.innerHTML = parcial;
}

function limpiar(){
        operadorSeleccionado = "";
        parcial = "";
        txtResul.innerHTML = "";
        numero = "";
        operRealizada.innerHTML = 0;
}
