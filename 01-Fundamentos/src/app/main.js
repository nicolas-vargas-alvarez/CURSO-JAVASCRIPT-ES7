"use strict";

const readline = require("readline");

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===============================
// VALIDAR NÚMERO
// ===============================
function validarNumero(valor) {

    if (valor === null || valor === undefined) {
        return "Debe ingresar un valor";
    }

    if (valor.trim() === "") {
        return "El valor no puede estar vacío";
    }

    const numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return "El valor debe ser un número válido";
    }

    return numero;
}

// ===============================
// CONVERTIR TEMPERATURA
// ===============================
function convertirTemperatura(valor, desde, hacia) {

    if (desde === hacia) return valor;

    if (desde === "c" && hacia === "f")
        return valor * 9 / 5 + 32;

    if (desde === "f" && hacia === "c")
        return (valor - 32) * 5 / 9;

    if (desde === "c" && hacia === "k")
        return valor + 273.15;

    if (desde === "k" && hacia === "c")
        return valor - 273.15;

    if (desde === "f" && hacia === "k")
        return (valor - 32) * 5 / 9 + 273.15;

    if (desde === "k" && hacia === "f")
        return (valor - 273.15) * 9 / 5 + 32;

    return null;
}

// ===============================
// CONVERTIR LONGITUD
// ===============================
function convertirLongitud(valor, desde, hacia) {

    let metros;

    if (desde === "m") metros = valor;
    else if (desde === "km") metros = valor * 1000;
    else if (desde === "cm") metros = valor / 100;
    else return null;

    if (hacia === "m") return metros;
    if (hacia === "km") return metros / 1000;
    if (hacia === "cm") return metros * 100;

    return null;
}

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================
function convertir(valor, from, to) {

    const numeroValidado = validarNumero(valor);

    if (typeof numeroValidado === "string") {
        return numeroValidado; // Devuelve mensaje de error
    }

    const numero = numeroValidado;

    if (!from || !to) {
        return "Debe indicar unidades";
    }

    from = from.toLowerCase().trim();
    to = to.toLowerCase().trim();

    const temp = ["c", "f", "k"];
    const long = ["m", "km", "cm"];

    let resultado;

    if (temp.includes(from) && temp.includes(to)) {
        resultado = convertirTemperatura(numero, from, to);
    }
    else if (long.includes(from) && long.includes(to)) {
        resultado = convertirLongitud(numero, from, to);
    }
    else {
        return "Unidades incompatibles o no soportadas";
    }

    if (resultado === null) {
        return "Conversión no válida";
    }

    return resultado.toFixed(2);
}

// ===============================
// INICIAR PROGRAMA
// ===============================
function iniciar() {

    console.log("\n=== CONVERSOR DE UNIDADES ===");
    console.log("Temperatura: c, f, k");
    console.log("Longitud: m, km, cm");
    console.log("Escriba 'salir' para terminar\n");

    rl.question("Ingrese el valor: ", function(valor) {

        if (valor.toLowerCase() === "salir") {
            console.log("Programa finalizado.");
            rl.close();
            return;
        }

        rl.question("Unidad origen: ", function(from) {

            rl.question("Unidad destino: ", function(to) {

                const resultado = convertir(valor, from, to);

                if (isNaN(resultado)) {
                    console.log("Error:", resultado);
                } else {
                    console.log("Resultado:", resultado, to);
                }

                iniciar(); // repetir
            });

        });

    });
}

iniciar();