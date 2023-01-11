// ======================================
// Exemple let & const
// ======================================

// 1- Afficher des variables avec var, let et const
var titre1 = "Programmation apps mobiles";
console.log(titre1);

let titre2 = "Programmation apps mobiles 1";
console.log(titre2);

const titre3 = "Programmation en React";
console.log(titre3);

// 2- Exception si on tente de modifier la constante titre3
// titre3 = "Programmation en React native";

/**
 * 3 - Difference var vs let
 *
 * La principale différence réside dans les règles de portée.
 * Les variables déclarées par le mot-clé var sont limitées au corps de la fonction immédiate (d'où la portée de la fonction)
 * tandis que les variables let sont limitées au bloc englobant immédiat désigné par { } (d'où la portée du bloc).
 */
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  //console.log(baz); // ReferenceError
}

run();
