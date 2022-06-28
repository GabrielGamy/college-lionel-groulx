let toyota = {
  marque: "Toyota",
  modele: "RAV 4",
  couleur: "BLEU",
  nbPortes: 4,
  estHybride: true,
  annee: 2014,
  demarrer: function () {
    console.log("Demarrage ...");
  },
  rouler: function () {
    console.log("Entrain de rouler ...");
  },
  age: function () {
    let date = new Date();
    console.log(date.getFullYear() - this.annee);
  },
};

toyota.demarrer();
toyota.rouler();
toyota.age();
