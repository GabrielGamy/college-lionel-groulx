// ======================================
// Exemple Object, Properties, Methods
// ======================================

const personne = {
    nom: 'Brendan',
    age: 55,
    afficherInfos: function() {
        console.log(`nom: ${this.nom}, age: ${this.age}`);
    }
}

/*
const personne = {
    nom: 'Brendan',
    age: 55,
    afficherInfos() {
        console.log(`nom: ${this.nom}, age: ${this.age}`);
    }
}
*/

personne.afficherInfos();