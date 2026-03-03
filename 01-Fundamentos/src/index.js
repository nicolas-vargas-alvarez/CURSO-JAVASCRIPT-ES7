// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // "use strict" es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * CONVIERTE A NUMERO Y VALIDA QUE SEA UN NUMERO FINITO MAYOR O IGUAL A CERO
 * lANZA UN ERROR SI LA VALIDACION FALLA
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor recibido a tipo Number

    // Verifica si NO es un número finito o si es menor que cero
    if (!Number.isFinite(numero) || numero < 0) {
        // Lanza un error si el monto es inválido
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }

    // Retorna el número validado
    return numero;
}

// MODELADO DE DATOS

// Lista de ingresos
// Cada ingreso es un objeto con:
// - concepto: descripción del ingreso
// - monto: valor del ingreso
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];

// Lista de gastos
// Cada gasto también es un objeto con concepto y monto
const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];


// CÁLCULO DE TOTALES


/**
 * FUNCIÓN: calcularTotal

 * Recibe una lista de objetos (ingresos o gastos)
 * Recorre la lista y suma los montos validados
 * Retorna el total
 */
function calcularTotal(items) {
    let total = 0; // Variable acumuladora

    // Recorre cada elemento del arreglo
    for (const item of items) {
        // Valida el monto y lo suma al total
        total += validarMonto(item.monto);
    }

    // Retorna el total calculado
    return total;
}

// Calcula el total de ingresos
const totalIngresos = calcularTotal(ingresos);

// Calcula el total de gastos
const totalGastos = calcularTotal(gastos);

// Calcula el balance (ingresos - gastos)
const balance = totalIngresos - totalGastos;

// CLASIFICACIÓN DEL ESTADO FINANCIERO


/**
 * FUNCIÓN: getEstadoFinanciero

 * Determina el estado financiero según el balance:
 * - SUPERAVIT: balance > 0
 * - EQUILIBRADO: balance === 0
 * - DEFICIT: balance < 0
 */
function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}

/**
 * FUNCIÓN: recomendacion

 * Devuelve un mensaje según el estado financiero
 */
function recomendacion(estado) {
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return "";
    }
}

// MOSTRAR REPORTE EN CONSOLA

// Muestra la tabla de ingresos en consola
console.table(ingresos);

// Muestra la tabla de gastos en consola
console.table(gastos);

// Agrupa el resumen financiero en consola
console.group("Resumen Financiero");

// Muestra los resultados finales
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);

// Cierra el grupo de consola
console.groupEnd();