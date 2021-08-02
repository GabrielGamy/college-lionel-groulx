// ======================================
// Exemple Classes
// ======================================

class Personne {
    constructor() {
        this.nom = "Brendan Eich";
    }
}
class Etudiant extends Personne {
    constructor() {
        super();
        this.matricule = "ABC2021-01";
    }

    afficherInfos() {
        console.log(`nom: ${this.nom}, matricle: ${this.matricule}`);
    }
}

/*
class Personne {
    nom = "Brendan Eich";
}
class Etudiant extends Personne {
    matricule = "ABC2021-01";
    afficherInfos() {
        console.log(`nom: ${this.nom}, matricle: ${this.matricule}`);
    }
}
*/

let etudiant = new Etudiant();
etudiant.afficherInfos();