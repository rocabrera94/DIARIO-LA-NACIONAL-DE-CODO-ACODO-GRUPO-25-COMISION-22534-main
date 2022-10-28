let captchaNumeros = document.getElementById("captchaNumeros");
let btnEnviar = document.getElementById("btnEnviar");
let captchaResultado = document.getElementById("captchaResultado");
let terminosCondiciones = document.getElementById("terminosCondiciones");
let msjError = document.getElementById("error");

let numero1 = numeroRandom();
let numero2 = numeroRandom();

btnEnviar.addEventListener("click", validar);
captchaNumeros.innerHTML = numero1+" + "+numero2;

function numeroRandom (){
    return Math.floor(Math.random() * 10);
}


 