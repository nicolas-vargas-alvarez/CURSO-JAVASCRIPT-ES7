"use strict";

/*

EJERCICIOS JS - RESUELTOS

*/

// 1. Duplicar números con map
console.log("1. Duplicar números");
const numeros1 = [2, 4, 6, 8, 10];
const duplicados = numeros1.map(num => num * 2);
console.log(duplicados);


// 2. Nombres en mayúsculas
console.log("\n2. Nombres en mayúsculas");
const nombres1 = ["ana", "luis", "marta", "pedro"];
const mayusculas = nombres1.map(n => n.toUpperCase());
console.log(mayusculas);


// 3. Longitud de palabras
console.log("\n3. Longitud de palabras");
const palabras1 = ["sol", "computador", "mesa", "javascript"];
const longitudes = palabras1.map(p => p.length);
console.log(longitudes);


// 4. Números pares
console.log("\n4. Números pares");
const numeros2 = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros2.filter(n => n % 2 === 0);
console.log(pares);


// 5. Palabras con más de 5 letras
console.log("\n5. Palabras largas");
const palabras2 = ["casa", "ventana", "sol", "computadora", "luz"];
const largas = palabras2.filter(p => p.length > 5);
console.log(largas);


// 6. Estudiantes aprobados
console.log("\n6. Estudiantes aprobados");
const estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 2.8 },
  { nombre: "Marta", nota: 3.7 },
  { nombre: "Carlos", nota: 2.5 }
];
const aprobados = estudiantes.filter(e => e.nota >= 3.0);
console.log(aprobados);


// 7. Sumar con reduce
console.log("\n7. Suma total");
const numeros3 = [5, 10, 15, 20];
const suma = numeros3.reduce((acc, n) => acc + n, 0);
console.log(suma);


// 8. Multiplicar con reduce
console.log("\n8. Producto total");
const numeros4 = [2, 3, 4];
const producto = numeros4.reduce((acc, n) => acc * n, 1);
console.log(producto);


// 9. Total de letras
console.log("\n9. Total de letras");
const palabras3 = ["hola", "mundo", "js"];
const totalLetras = palabras3.reduce((acc, p) => acc + p.length, 0);
console.log(totalLetras);


// 10. Orden ascendente
console.log("\n10. Orden ascendente");
const numeros5 = [45, 12, 78, 3, 19, 1];
const asc = [...numeros5].sort((a, b) => a - b);
console.log(asc);


// 11. Orden descendente
console.log("\n11. Orden descendente");
const desc = [...numeros5].sort((a, b) => b - a);
console.log(desc);


// 12. Orden alfabético
console.log("\n12. Orden alfabético");
const nombres2 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
const ordenados = [...nombres2].sort();
console.log(ordenados);


// 13. Productos por precio
console.log("\n13. Productos ordenados por precio");
const productos = [
  { nombre: "Teclado", precio: 120000 },
  { nombre: "Mouse", precio: 50000 },
  { nombre: "Monitor", precio: 800000 },
  { nombre: "USB", precio: 30000 }
];
const ordenPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenPrecio);


// 14. Día de la semana
console.log("\n14. Día de la semana");
let dia = 3;

switch(dia){
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  case 4: console.log("Jueves"); break;
  case 5: console.log("Viernes"); break;
  case 6: console.log("Sábado"); break;
  case 7: console.log("Domingo"); break;
  default: console.log("Día no válido");
}


// 15. Clasificación de color
console.log("\n15. Clasificación de color");
let color = "rojo";

switch(color){
  case "rojo": console.log("Color de alerta"); break;
  case "verde": console.log("Color de avance"); break;
  case "amarillo": console.log("Color de precaución"); break;
  default: console.log("Color no reconocido");
}


// 16. Tabla del 5
console.log("\n16. Tabla del 5");
let i = 1;
while(i <= 10){
  console.log(`5 x ${i} = ${5 * i}`);
  i++;
}


// 17. Cuenta regresiva
console.log("\n17. Cuenta regresiva");
let j = 10;
while(j >= 1){
  console.log(j);
  j--;
}
console.log("¡Despegue!");


// 18. Sumar hasta 100
console.log("\n18. Sumar hasta 100");
let suma2 = 0;
let num = 1;
let contador = 0;

while(suma2 < 100){
  console.log(num);
  suma2 += num;
  num++;
  contador++;
}

console.log("Suma final:", suma2);
console.log("Cantidad de números:", contador);


// 19. filter + map
console.log("\n19. Filter + Map");
const numeros6 = [3, 8, 15, 20, 7, 12, 1, 30];

const resultado19 = numeros6
  .filter(n => n > 10)
  .map(n => n * 2);

console.log(resultado19);


// 20. Integrador
console.log("\n20. Ejercicio integrador");
const ventas = [
  { producto: "Mouse", cantidad: 3, precio: 50000 },
  { producto: "Teclado", cantidad: 2, precio: 120000 },
  { producto: "Monitor", cantidad: 1, precio: 800000 },
  { producto: "USB", cantidad: 5, precio: 30000 }
];

// Filtrar
const filtrados = ventas.filter(v => v.cantidad >= 2);

// Ordenar
const ordenadosVentas = filtrados.sort((a, b) => b.precio - a.precio);

// Map
const frases = ordenadosVentas.map(v => 
  `${v.producto} - Total: ${v.cantidad * v.precio}`
);

console.log(frases);

// Reduce
const totalVentas = ventas.reduce((acc, v) => 
  acc + (v.cantidad * v.precio), 0
);

console.log("Total ventas:", totalVentas);
