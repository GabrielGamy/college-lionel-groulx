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
