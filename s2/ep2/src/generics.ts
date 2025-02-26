
function premierElement<T>(tableau: T[]):T | string {
    return tableau.length > 0 ? tableau[0] : "error le tableau est vide";
  }

let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
let booleans: boolean[] = [true, false, true];
let vide: boolean[] = [];
console.log(premierElement(numbers));
console.log(premierElement(strings)); 
console.log(premierElement(booleans));
console.log(premierElement(vide));
