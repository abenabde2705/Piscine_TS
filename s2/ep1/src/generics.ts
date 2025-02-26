function premierElement<T>(tableau: T[]):T | null {
    return tableau.length > 0 ? tableau[0] : null;
  }

let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
let booleans: boolean[] = [true, false, true];
console.log(premierElement(numbers));
console.log(premierElement(strings)); 
console.log(premierElement(booleans));
