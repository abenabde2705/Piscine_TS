"use strict";
function premierElement(tableau) {
    return tableau.length > 0 ? tableau[0] : null;
}
let numbers = [1, 2, 3];
let strings = ['a', 'b', 'c'];
let booleans = [true, false, true];
console.log(premierElement(numbers));
console.log(premierElement(strings));
console.log(premierElement(booleans));
