// ARRAY Y OBJETOS

// let anasheNumerico = [1, 5, 4, 69, 420, 666];
// let anasheCompleto = [true, "anashe", 69420, "insta", ["otro array xd", 420]];
// anasheNumerico.push("este es un nashe al final");
// anasheNumerico.unshift("Agreganashe inciio");
// // anasheNumerico.pop();
// // anasheCompleto.shift();
// console.log(anasheNumerico);
// console.log("Este es un array completito!! :", anasheCompleto);

// // Agregar elementos
// // push(): Agrega al final
// // unshift(): Agrega al inicio

// //OBJETOS

// let persona = {
//   nombre: "Marquitos",
//   edad: 21,
//   intereses: ["tu vieja", "tu hermana"],
//   tienePlata: false,
//   esUnPedazodeNashe: true,
//   gym: {
//     lunes: ["Pecho", "Un poco de piernas", "Biceps"],
//     martes: ["Piernas", "Mas piernas"],
//     miercoles: "Ni idea nasheee",
//   },
// };

// // Acceso
// console.log("Rutina del lunes: ", persona.gym.lunes);

// // otra forma pero meh
// console.log(persona["edad"]);

// // Modificar objeto

// persona.edad = 18;
// persona.trabajo = "Sentilooo";

// console.log("Edad cambiada:", persona.edad);
// console.log("Tiene trabajo?", persona.trabajo);

// EJERCICIOS
// Ejercicio:
// Crea un array con 5 nombres y escribe un programa que imprima cada nombre en mayúsculas.
// Define un objeto persona con las propiedades nombre, edad, y ocupación.
// Actualiza la ocupación y agrega una nueva propiedad hobby.

let nombres = ["juan", "Pedro", "teodoro", "Marquiños navajas", "putin"];
console.log("Nombres en minuscula", nombres);

nombres = nombres.map(function (x) {
  return x.toUpperCase();
});

console.log("Nombres en mayúscula", nombres);

let persona = {
  nombre: "Juan",
  edad: 42,
  ocupacion: "Albañil",
};
console.log(persona);

persona.ocupacion = "Carpintero";
persona.hobby = "Paja y chori";

console.log("Persona actualizadawn: ", persona);
