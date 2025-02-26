interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

function premierElement<T>(tableau: T[]):T | string {
    return tableau.length > 0 ? tableau[0] : "error le tableau est vide";
  }
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }


let numbers: number[] = [1, 2, 3];
let strings: string[] = ['a', 'b', 'c'];
let booleans: boolean[] = [true, false, true];
let vide: boolean[] = [];
let maVoiture = {marque: "Toyota", modele: "Corolla", annee: 2020};
console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "annee"));
//console.log(getProperty(maVoiture, "georges")); => erreur


/*console.log(premierElement(numbers));
console.log(premierElement(strings)); 
console.log(premierElement(booleans));
console.log(premierElement(vide));*/
