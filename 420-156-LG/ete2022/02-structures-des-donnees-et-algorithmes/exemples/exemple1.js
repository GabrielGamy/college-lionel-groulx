class Voiture {
  constructor(marque, modele, couleur, nbPortes, estHybride, annee) {
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
    this.nbPortes = nbPortes;
    this.estHybride = estHybride;
    this.annee = annee;
  }
  demarrer() {
    console.log("Demarrage ...");
  }
  rouler() {
    console.log("Entrain de rouler ...");
  }
  age() {
    let date = new Date();
    console.log(date.getFullYear() - this.annee);
  }
}

let toyota = new Voiture("Toyota", "RAV 4", "BLEU", 4, true, 2014);
toyota.demarrer();
toyota.rouler();
toyota.age();

let honda = new Voiture("Honda", "Civic", "GRISE", 4, false, 2020);
honda.demarrer();
honda.rouler();
honda.age();
