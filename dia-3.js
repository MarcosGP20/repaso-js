// Día 3: Funciones
// Objetivo: Crear funciones reutilizables y entender las diferencias entre funciones declarativas y funciones flecha.

// Conceptos a cubrir:
// Funciones declarativas.
// Funciones de expresión.
// Funciones flecha.
// Ejercicio:
// Crea una función que reciba un número como argumento y devuelva su factorial.
// Escribe una función flecha que tome un array de números y devuelva la suma de todos los números del array.

// DECLARATIVA

//Sintaxis:
// function nombreFuncion(parametros){
//     funcion
// }

function nashe(argumento) {
  console.log(argumento);
}
nashe("nasheeee pero por argumento");

// De Expresión
let funcionExpre = function () {
  console.log("Esta es una fokin funcion expresiva");
};
funcionExpre();

let anonimus = () => {
  console.log("Pedi que hagan palmas, PAlmas, PALMAS CARAJO Y DICE TI RI TIRI");
};
anonimus();

// Ejercicio Factorial

function factorial(n) {
  if (n < 0) {
    return "El numero debe ser positivo";
  }

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(6));

let sumaNashe = (numeros) => {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
};

numeracos = [3, 5, 2];
console.log(sumaNashe(numeracos));
