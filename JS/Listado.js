// funcion de nombre y apellido
function nombres(nombre, apellido) {
    console.log("Bienvenido " + nombre + " " + apellido);
  }
  
  let contador = 0;
  while (contador < 3) {
    // Variables
    let nombre = prompt("Escriba su nombre.");
    let apellido = prompt("Escriba su apellido.");
    let mail = prompt("Necesitamos un mail para poder mandar la informacion.");
    let decision = prompt("Va a asistir a nuesta boda?");
    let respuesta1;
    let respuesta2;
    let invalidar;
  
    // Respuestas para cada acción realizada
    respuesta1 = "Perfecto, gracias por confirmar su asistencia.";
    respuesta2 = "Gracias por confirmar su inasistencia.";
    invalidar = "Perdon, pero usted no tiene la edad suficiente.";
  
    // llamando a la funcion
    nombres(nombre, apellido);
  
    // Mostrar en pantalla
    console.log(mail);
    console.log(decision);
  
    if (decision.toLowerCase() == "si") {
      var edad = prompt(nombre + " " + apellido + " Escriba su edad");
      if (edad >= 18) {
        alert(respuesta1);
      } else {
        alert(invalidar);
      }
    } else if (decision.toLowerCase() == "no") {
      alert(respuesta2);
    }
  
    contador++;
  }





