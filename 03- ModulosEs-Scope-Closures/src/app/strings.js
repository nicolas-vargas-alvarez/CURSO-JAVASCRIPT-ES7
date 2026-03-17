// 1. Validar que sea un string no vacío
function toNonEmptyString(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error("El valor debe ser un string no vacío");
  }
  return value.trim();
}

// 2. Convertir a Title Case (Primera letra de cada palabra en mayúscula)
function titleCase(str) {
  const validStr = toNonEmptyString(str);

  return validStr
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// 3. Convertir a slug (ej: "hola mundo" -> "hola-mundo")
function slugify(str) {
  const validStr = toNonEmptyString(str);

  return validStr
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres especiales
    .trim()
    .replace(/\s+/g, "-") // espacios a guiones
    .replace(/-+/g, "-"); // evita guiones duplicados
}