// Tarea 1:
// Preguntarle al usuario su nombre.
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt("¿Cual es tu nombre?").toLowerCase();

// Si el nombre del usuario es el mismo que  el  de ustedes
if (nombreUsuario === "nicolas") {
  console.log("Hola, Tocayo! Yo tambien me llamo " + `${nombreUsuario}`);
} else if (nombreUsuario === "dario") {
  console.log("Hola " + `${nombreUsuario}` + " te llamas igual que mi padre");
} else {
  console.log("Hola! " + `${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt("¿Cuantos años tenes?"));

if (edadUsuario < 23) {
  console.log("Tenes " + `${edadUsuario}` + " Sos menor que yo!");
} else if (edadUsuario > 23) {
  console.log("Tenes " + `${edadUsuario}` + " Sos mayor que yo!");
} else {
  console.log("Tenes " + `${edadUsuario}` + " la misma edad que yo!");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const consultarDocumentoUsuario = prompt("¿Tenes documentos?").toLowerCase();

const edadMinimaUsuario = 18;

if (consultarDocumentoUsuario === "si") {
  const consultarEdadUsuario = Number(prompt("¿Cuantos años tenes?"));
  if (consultarEdadUsuario >= 18) {
    console.log("Podes ingresar, adelante.");
  } else {
    console.log("No podes ingresar, volvé cuando seas mayor de edad");
  }
} else if (consultarDocumentoUsuario === "no") {
  console.log("Disculpa, no podes ingresar al bar.");
} else {
  console.log("No entiendo tu respuesta");
}
