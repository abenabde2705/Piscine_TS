function afficherPersonne(params) {
    console.log('Bonjour, je m\'appelle ' + params.nom + ' et j\'ai ' + params.age + ' ans.');
}
function afficherPersonneAvancee(params) {
    if (params.adresse) {
        console.log('Bonjour, je m\'appelle ' + params.nom + ' et j\'ai ' + params.age + ' ans et j\'habite au ' + params.adresse.rue + ' , ' + params.adresse.ville);
    }
    else {
        console.log('Bonjour, je m\'appelle ' + params.nom + ' et j\'ai ' + params.age + ' ans.');
    }
}
var personne2 = { nom: "Alice", age: 25, id: 1, adresse: { rue: "rue de la paix", ville: "Paris" } };
var personne3 = { nom: "Amrou", age: 21, id: 2 };
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
