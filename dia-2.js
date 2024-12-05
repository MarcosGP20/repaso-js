// Día 2: Control de flujo
// Objetivo: Dominar estructuras condicionales y bucles.

// Conceptos a cubrir:
// Estructuras if, else, else if.
// Ciclos for, while y do...while.
// Operador ternario.

// Ejercicio:
// 1- Escribe un programa que imprima los números del 1 al 50, pero:
// Si el número es divisible por 3, imprime "Fizz".
// Si el número es divisible por 5, imprime "Buzz".
// Si es divisible por ambos, imprime "FizzBuzz".
// 2- Crea un bucle que sume todos los números del 1 al 100.

// IF EJECUTANDO 2 SENTENICUAS EN UNA CLAUSULA
if (2 > 3) {
  console.log("El primero es mayor");
} else {
  console.log("El segundo es mayor");
}

// IF ANIDADO
primero = 7;
segundo = 73;
tercero = 3;

if (primero > segundo && primero > tercero) {
  console.log("El primero es el mayor de los 3");
} else if (segundo > tercero) {
  console.log("El segundo es el mayor de los 3");
} else {
  console.log("El tercero es el mayor");
}

// ESTRUCTURA FOR
// for([condicionInicial],[condicion],[incrementoExpresion]){
// [cuerpoCiclo]}

for (i = 0; i < 10; i++) {
  console.log(i);
}

// ESTRUCTURA while
// while (condicion){
//   sentencia }

n = 0;
x = 0;

while (n < 5) {
  n++;
  x += n;
}
console.log(n, x);

// ESTRUCTURA OPERADOR TERNARIO
// condición ? expr1 : expr2

años = 13;
años >= 18
  ? console.log("Es mayor de edad")
  : console.log("Es menor como me gustan ami");

//Ejercicio 1

for (x = 1; x <= 50; x += 1) {
  console.log(x);
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else console.log(`El numero ${x} no es divisible ni por 3 ni por 5`);
}

//Ejercicio 2
// let a = 0; // Variable para almacenar la suma
// let i = 1; // Declarar e inicializar 'i' antes de usarla en el bucle

// while (i <= 100) {
//   a += i; // Sumar 'i' a 'a'
//   i++; // Incrementar 'i'
// }

// console.log(`La suma de los números del 1 al 100 es: ${a}`);

// let a = 0;

// for (let i = 1; i <= 100; i++) {
//   a += i;
// }

// console.log(`La suma de los números del 1 al 100 es: ${a}`);
