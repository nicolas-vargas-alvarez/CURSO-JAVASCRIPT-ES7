// 1. Sumar todos los elementos de un array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 2. Calcular el promedio de los elementos de un array
function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

// 3. Agrupar elementos de un array por una propiedad
function groupArrayBy(arr, key) {
  return arr.reduce((acc, curr) => {
    const groupKey = curr[key];
    
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(curr);
    return acc;
  }, {});
} 5554