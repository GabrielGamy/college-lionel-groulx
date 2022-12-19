/**
 * Retourne la liste sans le nombre entier.
 * @param {Array} liste - La liste des elements
 * @param {number} n - Le chiffre entier
 * @returns Nouvelle liste sans le nombre entier.
 */
function filtrerTableau(liste, n) {
  let result = [];
  for (let index = 0; index < liste.length; index++) {
    // Appliquer la condition
    if (liste[index] != n) {
      // Ajouter l'element dans le tableau 'result'
      result.push(liste[index]);
    }
  }
  return result;
}

console.log("\n====== TEST #1 - filterTableau ======");
const elements = [1, 4, 2, 3, 4];
console.log(filtrerTableau(elements, 4)); // [1, 2, 3]
console.log("====== FIN TEST #1 - filterTableau ======\n");

/**
 * Retourne une nouvelle liste qui respecte la condition du callback
 * @param {Array} liste - La liste des elements
 * @param {function} callback - La fonction de callback
 * @returns Une nouvelle liste qui respecte la condition du callback
 */
function filtrer(liste, callback) {
  let result = [];
  for (let index = 0; index < liste.length; index++) {
    // Appliquer la condition
    if (callback(liste[index])) {
      // Ajouter l'element dans le tableau 'result'
      result.push(liste[index]);
    }
  }
  return result;
}

console.log("\n====== TEST #2 - filtrer ======");
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const callback = function (word) {
  return word.length > 6;
};
console.log(filtrer(words, callback));
console.log("====== FIN TEST #2 - filtrer ======\n");

/**
 * Retourne une nouvelle liste des elements multipliés par le chiffre n
 * @param {Array} liste - La liste des elements
 * @param {number} n - Le multiplicateur
 * @returns Une nouvelle liste des elements multipliés par le chiffre n
 */
function multiplierPar(liste, n) {
  let result = [];
  let index = 0;
  while (index < liste.length) {
    result.push(liste[index] * n);
    index++;
  }
  return result;
}

console.log("\n====== TEST #3 - multiplierPar ======");
const elementsMultiplier = [1, 4, 2, 3, 4];
console.log(multiplierPar(elementsMultiplier, 2)); // [2, 8, 4, 6, 8]
console.log("====== FIN TEST #3 - multiplierPar ======\n");

/**
 *
 * @param {Array} liste - tableau des elements
 * @param {object} element - l'element
 * @returns
 */
function elementExiste(liste, element) {
  let existe = false;
  liste.forEach((item) => {
    if (item === element) {
      existe = true;
    }
  });
  return existe;
}

console.log("\n====== TEST #4 - elementExiste ======");
const elementsExiste = ["Banane", "Patate"];
console.log(elementExiste(elementsExiste, "Ananas")); // false
console.log(elementExiste(elementsExiste, "Banane")); // true
console.log("====== FIN TEST #4 - elementExiste ======\n");

/**
 * Renvoie l'indice du terme recherché
 * @param {string} phrase - La phrase de recherche
 * @param {char} c - Le terme recheché
 * @returns -1 si n'existe sinon retourne l'indice du terme rechercé
 */
function trouverPosition(phrase, c) {
  for (let index = 0; index < phrase.length; index++) {
    if (phrase[index] === c) {
      return index;
    }
  }
  return -1;
}

console.log("\n====== TEST #5 - trouverPosition ======");
console.log(trouverPosition("Ma simple phrase", "h")); // 11
console.log(trouverPosition("Ma simple phrase", "z")); // -1
console.log("====== FIN TEST #5 - trouverPosition ======\n");
