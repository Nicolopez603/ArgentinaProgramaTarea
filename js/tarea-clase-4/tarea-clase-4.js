/*
    Arrays
    ======

    Un array es una lista ordenada de valores. Podes guardar cualquier cantidad de valores
    dentro. Y también cualquier tipo de valores: números, cadenas, objetos, incluso
    otros Arrays.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.

const comidasFavoritas = ["milanesa", "fideos", "canelones", "pizza"]; //posicion 1, indice 0 = milanesa
console.log(comidasFavoritas.length);

/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.

const comidasFavoritas = ["milanesa", "fideos", "canelones", "pizza"]; //posicion 1, indice 0 = milanesa
console.log(comidasFavoritas.length);

/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'. Gracias a un tipo llamado Edsger
    Dijkstra *, los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; y así sucesivamente

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

console.log(comidasFavoritas[2]);

/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.

comidasFavoritas[0] = "Sopa";
console.log(comidasFavoritas);

// TAREA: console.log todo el array para verificar.

// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.

comidasFavoritas.push("Zapallo");

// TAREA: console.log todo el array para verificar.

console.log(comidasFavoritas);

/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando 'const', los valores *dentro* del
    array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es legal y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // Esto es ilegal y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.

const EDADES_FAMILIARES = [19, 23, 28, 32, 34];
EDADES_FAMILIARES[0] = 52;
EDADES_FAMILIARES[1] = 53;
console.log(EDADES_FAMILIARES);

// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante

EDADES_FAMILIARES.push(zapallo[2]);
(EDADES_FAMILIARES = "Pizza"), 25;
//<- Da error

/*
    Bucles
    ======
    
    ¡La gente siempre ha sido perezosa, pero a veces avanza! A nosotros
    no nos gusta repetir las mismas aburridas acciones una y otra vez, 
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript 
    es increible!', ¿cuáles son mis opciones?. Por supuesto, puedo escribir 
    diez líneas de código repitiendo la misma instrucción, pero también 
    puedo decirle a la computadora que lo repita en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada iteracion debe tener tres cosas principales:
     - un punto de partida
     - una condición (punto final)
     - un contador (un paso)

     Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

     Veamos diferentes estructuras de bucle.

*/

/*
    Bucles while (mientras)
    ============

    El bucle 'While' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // punto de partida
    let numero = 0;

    while (numero < 10) {
      // 'menos de 10' es una condición (punto final)

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador / tamaño del paso
    }
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numero = 10;
while (numero > 0) {
  console.log(numero);
  numero = numero - 1;
}

/*
    Bucles for (para)
    ==========

    Los bucles for son muy similares al 'bucle while'. En un bucle for
    se declara un contador en la declaración.

    Ejemplo:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
  console.log(i);
}

// TAREA: Hacer una funcion que se llame calcularPromedio y que tome como parametro un array

const examenesParciales = [10, 8, 7, 9];

function calcularPromedio(examenesParciales) {
  let totalNotas = 0;
  for (i = 0; i < examenesParciales.length; i++) {
    totalNotas = totalNotas + examenesParciales[i];
  }

  return totalNotas / examenesParciales.length;
}
console.log("El promedio es " + calcularPromedio(examenesParciales));

/*
    Iterando a traves de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno ¿Cómo lo voy a hacer?

    Podemos usar un 'bucle for' para iterar a través de nuestro array y obtener cada valor
    de eso.

    Nota: i++ es otra forma de expresar i = i + 1.

    Ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for(let i = 0; i < animales.length; i++){
        console.log('Me gustan los ' + animales[i]); //animales[i] se lee "animales en i"
    }
*/

// TAREA: Probalo con tu comidasFavoritas array.

const comidasFavoritas = ["Milanesa napolitana", "Canelones", "Pizza", "Pollo"];

for (let i = 0; i < comidasFavoritas.length; i++) {
  console.log("Amo " + comidasFavoritas[i]);
}

/*
    Bucles y Logica
    ===============
    
    Traigamos bucles junto con las declaraciones if / else que aprendimos en
    nivel 1, y hagamos algo interesante.


    Contemos de 10 a 0 e imprimamos todos los números. Pero cuando lleguemos al
    medio (5) imprimimos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let i = 1; i <= 50; i++) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 50; i = i + 1) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else {
    console.log(i);
  }
}

//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro.                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
//////////////////////////////////////////////////////////////////////////////
