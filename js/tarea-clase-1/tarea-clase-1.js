// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
function calcularEdad(ANIO_ACTUAL, ANIO_DE_NACIMIENTO) {
    return ANIO_ACTUAL - ANIO_DE_NACIMIENTO;
}

const ANIO_ACTUAL = Number(prompt("Cuál es el año actual?"));
const ANIO_DE_NACIMIENTO = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(ANIO_ACTUAL, ANIO_DE_NACIMIENTO) + ' años');

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioAnual(salarioMensual) {
    const mesesEnUnAnio = 12;
    return salarioMensual * mesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const mesesEnUnAnio = 12;
    return salarioAnual / mesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const semanasEnUnAnio = 52;
    return salarioAnual / semanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const diasEnUnAnio = 365;
    return salarioAnual / diasEnUnAnio;
}



const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));
