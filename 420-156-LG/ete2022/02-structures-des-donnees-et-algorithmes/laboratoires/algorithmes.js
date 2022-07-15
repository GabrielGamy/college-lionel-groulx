/**
 * Écrire une fonction qui prend une chaîne de caractère et
 * détermine si la chaîne représente un chiffre ou pas.
 * @param {string} chaine
 * @returns {boolean} Indique si la chaine est un chiffre ou pas.
 */
function estUnChiffre(chaine) {
  if (typeof chaine === "number") {
    return true;
  }

  if (isNaN(chaine[0]) || isNaN(chaine[chaine.length - 1])) {
    return false;
  }

  for (let i = 0; i < chaine.length; i++) {
    const c = chaine[i];
    if (isNaN(c) && c !== "," && c !== ".") {
      return false;
    }
  }
  return true;
}

console.log("\n====== TEST #1 - estUnChiffre ======");
console.log(`INPUT: 2022, EXPECTED: true, OUTPUT: ${estUnChiffre("2022")}`);
console.log(`INPUT: 12a4, EXPECTED: false, OUTPUT: ${estUnChiffre("12a4")}`);
console.log(`INPUT: ,124, EXPECTED: false, OUTPUT: ${estUnChiffre(",124")}`);
console.log(`INPUT: 124., EXPECTED: false, OUTPUT: ${estUnChiffre("124.")}`);
console.log(`INPUT: 124/, EXPECTED: false, OUTPUT: ${estUnChiffre("124/")}`);
console.log(`INPUT: 19.92, EXPECTED: true, OUTPUT: ${estUnChiffre("19.92")}`);
console.log(`INPUT: 19,92, EXPECTED: true, OUTPUT: ${estUnChiffre("19,92")}`);
console.log(`INPUT: Math.PI, EXPECTED: true, OUTPUT: ${estUnChiffre(Math.PI)}`);
console.log(`INPUT: 1    , EXPECTED: true, OUTPUT: ${estUnChiffre("1   ")}`);
console.log(`INPUT:      1, EXPECTED: true, OUTPUT: ${estUnChiffre("    1")}`);
console.log("====== FIN TEST #1 - estUnChiffre ======\n");

/**
 * Écrire une fonction qui prend une chaîne de caractère et un caractère en paramètres.
 * La fonction retourne le nombre d’occurrences du caractère dans la chaine de caractère.
 * @param {string} chaine
 * @param {char} car
 * @returns {number} Le nombre d'occurrences du caractere car.
 */
const compterOccurrences = (chaine, car) => {
  /**
  let nbOccur = 0;
  for (let i = 0; i < chaine.length; i++) {
    nbOccur = chaine[i] === car ? nbOccur + 1 : nbOccur;
  }
  return nbOccur;
  */

  // aaaabbbcc
  // Array.from(aaaabbbcc) => [a, a, a, a, b, b, c, c]
  // filter => [a, a, a, a]
  // length => 4
  return Array.from(chaine).filter((c) => c === car).length;
};

console.log("\n====== TEST #2 - compterOccurrences ======");
console.log(
  `INPUT: (aaaabbbcc, a), EXPECTED: 4, OUTPUT: ${compterOccurrences(
    "aaaabbbcc",
    "a"
  )}`
);
console.log(
  `INPUT: (Ceci est une phrase simple, z), EXPECTED: 0, OUTPUT: ${compterOccurrences(
    "Ceci est une phrase simple",
    "z"
  )}`
);
console.log(
  `INPUT: (Ceci est une phrase simple, i), EXPECTED: 2, OUTPUT: ${compterOccurrences(
    "Ceci est une phrase simple",
    "i"
  )}`
);
console.log("====== FIN TEST #2 - compterOccurrences ======\n");

/**
 * Écrire une fonction qui compte le nombre de mots dans une chaîne de caractère.
 * @param {*} phrase
 * @returns {number} Le nombre de mots dans la phrase.
 */
const compterMots = (phrase) =>
  phrase.split(" ").filter((w) => w !== "").length;

console.log("\n====== TEST #3 - compterMots ======");
console.log(`INPUT: "", EXPECTED: 0, OUTPUT: ${compterMots("")}`);
console.log(
  `INPUT: Voici la phrase., EXPECTED: 3, OUTPUT: ${compterMots(
    "Voici la phrase."
  )}`
);
console.log(
  `INPUT: Ceci est une phrase simple, EXPECTED: 5, OUTPUT: ${compterMots(
    "Ceci est une phrase simple"
  )}`
);
console.log(`INPUT: "    ", EXPECTED: 0, OUTPUT: ${compterMots("   ")}`);
console.log("====== FIN TEST #2 - compterMots ======\n");

/**
 * Indiquer si deux listes d’éléments contiennent les mêmes éléments dans le même ordre.
 * @param {Array<number>} liste1
 * @param {Array<number>} liste2
 * @returns {boolean}
 */
function sontListesIdentiques(liste1, liste2) {
  if (liste1.length != liste2.length) return false;
  let index = 0;
  while (index < liste1.length) {
    if (liste1[index] !== liste2[index]) {
      return false;
    }
    index++;
  }
  return true;
}

console.log("\n====== TEST #4 - sontListesIdentiques ======");
console.log(
  `INPUT: liste1 = [1, 2] liste2 = [1, 2], EXPECTED: true , OUTPUT: ${sontListesIdentiques(
    [1, 2],
    [1, 2]
  )}`
);

console.log(
  `INPUT: liste1 = [2, 1] liste2 = [1, 2], EXPECTED: false , OUTPUT: ${sontListesIdentiques(
    [2, 1],
    [1, 2]
  )}`
);

console.log(
  `INPUT: liste1 = [] liste2 = [], EXPECTED: true , OUTPUT: ${sontListesIdentiques(
    [],
    []
  )}`
);

console.log(
  `INPUT: liste1 = [1, 2] liste2 = [1, 2, 3], EXPECTED: false , OUTPUT: ${sontListesIdentiques(
    [1, 2],
    [1, 2, 3]
  )}`
);
console.log("====== FIN TEST #4 - sontListesIdentiques ======");

/**
 * Indiquer si deux listes d’éléments contiennent les mêmes éléments peu importe l’ordre des éléments.
 * @param {*} liste1
 * @param {*} liste2
 * @returns
 */
function sontListesIdentiquesV2(liste1, liste2) {
  liste1.sort();
  liste2.sort();
  return sontListesIdentiques(liste1, liste2);
}

console.log("\n====== TEST #4 - sontListesIdentiquesV2 ======");
console.log(
  `INPUT: liste1 = [1, 2] liste2 = [1, 2], EXPECTED: true , OUTPUT: ${sontListesIdentiquesV2(
    [1, 2],
    [1, 2]
  )}`
);

console.log(
  `INPUT: liste1 = [2, 1] liste2 = [1, 2], EXPECTED: true , OUTPUT: ${sontListesIdentiquesV2(
    [2, 1],
    [1, 2]
  )}`
);

console.log(
  `INPUT: liste1 = [] liste2 = [], EXPECTED: true , OUTPUT: ${sontListesIdentiquesV2(
    [],
    []
  )}`
);

console.log(
  `INPUT: liste1 = [1, 2] liste2 = [1, 2, 3], EXPECTED: false , OUTPUT: ${sontListesIdentiques(
    [1, 2],
    [1, 2, 3]
  )}`
);
console.log("====== FIN TEST #4 - sontListesIdentiquesV2 ======");

/**
 * Écrire une fonction qui retourne la valeur VRAI ou FAUX si un mot est un palindrome ou pas.
 * Un mot est palindrome lorsque ce mot est identique même étant renversé.
 * @param {string} mot
 * @returns {boolean} Indique si le mot est palindrome.
 */
function estPalindrome(mot) {
  mot = mot.toLocaleLowerCase();
  return mot === mot.split("").reverse().join("");
}

console.log("\n====== TEST #5 - estPalindrome ======");
console.log(`INPUT: Radar, EXPECTED: true, OUTPUT: ${estPalindrome("Radar")}`);
console.log(`INPUT: Été, EXPECTED: true, OUTPUT: ${estPalindrome("Été")}`);
console.log(`INPUT: Ici, EXPECTED: true, OUTPUT: ${estPalindrome("Ici")}`);
console.log(`INPUT: Oui, EXPECTED: false, OUTPUT: ${estPalindrome("Oui")}`);
console.log(`INPUT: Toto, EXPECTED: false, OUTPUT: ${estPalindrome("Toto")}`);
console.log("====== FIN TEST #5 - estPalindrome ======\n");

/**
 * Trouver l’élément le plus fréquemment dans un tableau d’entiers.
 * @param {Array} liste
 * @returns
 */
function trouverFrequent(liste) {
  let frequent = null;
  let compteur = 0;
  let nbOccur = {};

  for (let i = 0; i < liste.length; i++) {
    let element = liste[i];
    nbOccur[element] = nbOccur[element] ? nbOccur[element] + 1 : 1;

    if (nbOccur[element] > compteur) {
      frequent = element;
      compteur = nbOccur[element];
    }
  }

  return frequent;
}

console.log("\n====== TEST #6 - trouverFrequent ======");
console.log(`INPUT: [], EXPECTED: null, OUTPUT: ${trouverFrequent([])}`);
console.log(
  `INPUT: [1, 2, 3, 1, 5, 1], EXPECTED: 1, OUTPUT: ${trouverFrequent([
    1, 2, 3, 1, 5, 1,
  ])}`
);
console.log(
  `INPUT: [1, 1, 1, 2, 3, 4], EXPECTED: 1, OUTPUT: ${trouverFrequent([
    1, 1, 1, 2, 3, 4,
  ])}`
);
console.log(`INPUT: [0], EXPECTED: 0, OUTPUT: ${trouverFrequent([0])}`);
console.log(`INPUT: [1, 2], EXPECTED: 1, OUTPUT: ${trouverFrequent([1, 2])}`);
console.log("====== FIN TEST #5 - trouverFrequent ======\n");
