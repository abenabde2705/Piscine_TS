"use strict";
function afficherPersonne(params) {
    console.log('Bonjour, je m\'appelle ' + params.nom + ' et j\'ai ' + params.age + ' async.');
}
let personne1 = { nom: "Alice", age: 25 };
afficherPersonne(personne1);
