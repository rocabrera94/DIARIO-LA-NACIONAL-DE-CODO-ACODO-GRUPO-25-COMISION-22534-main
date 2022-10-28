window.addEventListener('keydown', test);
function test(event){
   if(event.keyCode == '37'){//Tecla con la flecha hacia la izquierda		
      alert('Tu codigo funciona correctamente');
      document.getElementById('cuadrado').style.background = 'green';
   }
   if(event.keyCode == '39'){ //Tecla con la flecha hacia la Derecha					
      alert('Bien echo =)');
      document.getElementById('cuadrado').style.background = '#f00ea2';
   }
}

function convertir() {
   var valore= parseInt(document.getElementById("valor").value);
   var resultado= 0;
   var dolar= 152.83;
   var euro= 150.58;
   if (document.getElementById ("uno").checked) {
     resultado=valore/dolar;
     alert ("El cambio de pesos Arg a Dolares es:$"+ resultado);
   }
    else 
    if (document.getElementById("dos").checked) {
     resultado=valore/euro;
     alert ("El cambio de pesos Arg a Euros es:"+ resultado);
    }
     else{
       alert("Tienes que completar todos los campos")
     }
 }
