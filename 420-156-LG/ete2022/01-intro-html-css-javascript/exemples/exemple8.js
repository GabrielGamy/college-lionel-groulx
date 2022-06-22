// ======================================
// Exemple - Primitives and references
// ======================================

// Primitives
let number = 1;
let numberCopy = number; 
number = 2; // n'affecte pas la copie
console.log(numberCopy);

// References
let language = { name: "Javascript" };
let secondLanguauge = language; // Copie par reference
language.name = "C#";
console.log(secondLanguauge);

// Copier par valeur des types references
language = { name: "Javascript" };
secondLanguauge = {
    ...language
}
language.name = "C#";
console.log(secondLanguauge);