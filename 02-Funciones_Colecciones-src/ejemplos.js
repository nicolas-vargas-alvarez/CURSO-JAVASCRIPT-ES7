"use strict";


console.log("=== EJEMPLOS DE MAP ===");

const numeros = [1, 2, 3, 4, 5];

const doble = numeros.map(n => n * 2);
console.log("Multiplicar cada número por 2:", doble); // [2,4,6,8,10]

const strNumeros = numeros.map(n => `Número: ${n}`);
console.log("Convertir números a strings:", strNumeros);

const palabras = ["hola", "aprendiz", "SENA"];
const longitudes = palabras.map(p => p.length);
console.log("Longitud de cada palabra:", longitudes);

const personas = [{nombre:"Ana", edad:20}, {nombre:"Luis", edad:25}];
const personasMayores = personas.map(p => ({...p, edad: p.edad + 1}));
console.log("Incrementar edad de cada persona:", personasMayores);

const frutas = ["manzana", "pera", "uva"];
const frutasMayus = frutas.map(f => f.toUpperCase());
console.log("Transformar frutas a mayúsculas:", frutasMayus);

console.log("\n");


//  FILTER - Filtrar elementos según condición


console.log("=== EJEMPLOS DE FILTER ===");

// Números mayores que 3
const mayoresQue3 = numeros.filter(n => n > 3);
console.log("Números mayores que 3:", mayoresQue3);

// Palabras con más de 4 letras
const palabrasLargas = palabras.filter(p => p.length > 4);
console.log("Palabras con más de 4 letras:", palabrasLargas);

// Personas mayores de 21
const mayores21 = personas.filter(p => p.edad > 21);
console.log("Personas mayores de 21:", mayores21);

// Frutas que contienen "a"
const frutasConA = frutas.filter(f => f.includes("a"));
console.log('Frutas que contienen "a":', frutasConA);

// Números pares
const pares = numeros.filter(n => n % 2 === 0);
console.log("Números pares:", pares);

console.log("\n");


//  REDUCE - Reducir un arreglo a un solo valor


console.log("=== EJEMPLOS DE REDUCE ===");

// Sumar todos los números
const suma = numeros.reduce((acum, n) => acum + n, 0);
console.log("Suma de todos los números:", suma);

// Multiplicar todos los números
const producto = numeros.reduce((acum, n) => acum * n, 1);
console.log("Producto de todos los números:", producto);

// Contar total de letras de todas las palabras
const totalLetras = palabras.reduce((acum, p) => acum + p.length, 0);
console.log("Total de letras en todas las palabras:", totalLetras);

// Crear objeto con nombres como clave y edad como valor
const objPersonas = personas.reduce((acum, p) => {
  acum[p.nombre] = p.edad;
  return acum;
}, {});
console.log("Objeto de personas (nombre:edad):", objPersonas);

// Concatenar todas las frutas en un string
const listaFrutas = frutas.reduce((acum, f) => acum + ", " + f);
console.log("Lista de frutas concatenadas:", listaFrutas);

console.log("\n");
console.log("=== FIN DE LOS EJEMPLOS ===");