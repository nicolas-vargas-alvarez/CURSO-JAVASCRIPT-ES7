"use strict";

/*
CONVERSOR DE UNIDADES (TEMPERATURA / LONGITUD)
Node.js - Solo consola
Sin librerías externas
*/

// ======================
// VALIDACIONES


// Valida que el valor sea un número finito
function validarNumero(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) {
        throw new Error("Error: valor inválido");
    }
    return num;
}

// Unidades soportadas por categoría
const temperatura = ["c", "f", "k"];
const longitud = ["m", "km", "cm"];

// Determina la categoría de una unidad
function categoriaUnidad(unidad) {
    if (temperatura.includes(unidad)) return "temperatura";
    if (longitud.includes(unidad)) return "longitud";
    throw new Error("Error: unidad no soportada");
}


// CONVERSIONES

function convertirTemperatura(value, from, to) {
    if (from === to) return value;

    if (from === "c" && to === "f") return value * 9/5 + 32;
    if (from === "f" && to === "c") return (value - 32) * 5/9;
    if (from === "c" && to === "k") return value + 273.15;
    if (from === "k" && to === "c") return value - 273.15;

    throw new Error("Error: conversión no soportada");
}

function convertirLongitud(value, from, to) {
    if (from === to) return value;

    if (from === "m" && to === "km") return value / 1000;
    if (from === "km" && to === "m") return value * 1000;
    if (from === "cm" && to === "m") return value / 100;

    throw new Error("Error: conversión no soportada");
}


// FUNCIÓN PRINCIPAL


function convertir({ value, from, to }) {
    const numero = validarNumero(value);
    from = from.toLowerCase();
    to = to.toLowerCase();

    const categoriaFrom = categoriaUnidad(from);
    const categoriaTo = categoriaUnidad(to);

    if (categoriaFrom !== categoriaTo) {
        throw new Error("Error: categorías incompatibles");
    }

    let resultado;

    if (categoriaFrom === "temperatura") {
        resultado = convertirTemperatura(numero, from, to);
    } else {
        resultado = convertirLongitud(numero, from, to);
    }

    return resultado.toFixed(2);
}

// ======================
// PRUEBAS MANUALES
// ======================

const pruebas = [
    { value: 100, from: "c", to: "f" },
    { value: 32, from: "f", to: "c" },
    { value: 0, from: "c", to: "f" },
    { value: -40, from: "c", to: "f" },
    { value: 1500, from: "m", to: "km" },
    { value: 1.2, from: "km", to: "m" },
    { value: "abc", from: "c", to: "f" },
    { value: 10, from: "kg", to: "g" },
    { value: 10, from: "c", to: "m" },
    { value: " ", from: "m", to: "km" },
];

// EJECUCIÓN CONTROLADA


for (const prueba of pruebas) {
    try {
        const resultado = convertir(prueba);
        console.log(`${prueba.value} ${prueba.from} → ${resultado} ${prueba.to}`);
    } catch (error) {
        console.log(`${prueba.value} ${prueba.from} → ${error.message}`);
    }
}