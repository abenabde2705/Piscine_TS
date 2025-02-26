"use strict";
function premierElement(tableau) {
    return tableau.length > 0 ? tableau[0] : "error le tableau est vide";
}
function getProperty(obj, key) {
    return obj[key];
}
let numbers = [1, 2, 3];
let strings = ['a', 'b', 'c'];
let booleans = [true, false, true];
let vide = [];
let maVoiture = { marque: "Toyota", modele: "Corolla", annee: 2020 };
console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "annee"));
//console.log(getProperty(maVoiture, "georges")); => erreur
/*console.log(premierElement(numbers));
console.log(premierElement(strings));
console.log(premierElement(booleans));
console.log(premierElement(vide));*/
