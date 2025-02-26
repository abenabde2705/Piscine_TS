"use strict";
function premierElement(tableau) {
    return tableau.length > 0 ? tableau[0] : "error le tableau est vide";
}
let numbers = [1, 2, 3];
let strings = ['a', 'b', 'c'];
let booleans = [true, false, true];
let vide = [];
console.log(premierElement(numbers));
console.log(premierElement(strings));
console.log(premierElement(booleans));
console.log(premierElement(vide));
