// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función
// tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//

//      Si (IF) el operador es '+', vamos a usar la función para sumar.
//      Si (ELSE) no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos
//la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

const numero1 = 10;
const numero2 = 20;


// TAREA: Creemos 2 funciones más: dividir y multiplicar.

function dividir(numero1, numero2){
  return numero1 / numero2
}

function multiplicar(numero1, numero2){
  return numero1 * numero2
}

const operador = prompt('Ingrese el operador que desea (- , * , / , +)')




// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".



let resultado;

if (operador === "+") {
  resultado = sumar(numero1,numero2);
} else if(operador === '-'){
  resultado = restar(numero1,numero2);
} else if(operador === '*'){
  resultado = multiplicar(numero1,numero2)
} else if(operador === '/') {
  resultado = dividir(numero1,numero2);
}else{
  console.log('Perdon, no conozco ese operador');
}

console.log(`${numero1}` + `${operador}` + `${numero2}` + ' es igual a ' + `${resultado}` )





/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador ! se llama el operador "not".
    
    El resultado de una comparación es un valor Booleano, lo podemos guardar en una variable así:

    const bool = (1 < 2);

    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log

    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)
    console.log(bool); // El valor original no se ve afectado, sigue siendo veradero, TRUE

    También podemos asignar un valor booleano directamente a una variable o constante con
    las palabras reservadas (keywords) true y false:

    const elPesoEsEstable = false;
    let maradonaMejorQuePele = true;
*/

// TAREA: usando el operador !, Intentá invertir una variable (de true a false, o de false a true) e imprimí el
// resultado en la consola.

let bool = (1 < 3)
console.log(!bool)
