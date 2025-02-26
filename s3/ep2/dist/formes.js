"use strict";
class Rectangle {
    calculerSurface(params, params2) {
        return params * params2;
    }
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
}
class Cercle {
    calculerSurface(params) {
        Math.PI * params * params;
    }
    constructor(rayon) {
        this.rayon = rayon;
    }
}
/*
### 2 - Fonction de traitement

- Créez une fonction `afficherSurface(forme: Rectangle | Cercle): void` qui :
- Utilise `instanceof` pour déterminer si `forme` est une instance de `Rectangle` ou de `Cercle`.
- Affiche dans la console :
- Pour un rectangle : `"Ceci est un rectangle de surface [surface]."`
- Pour un cercle : `"Ceci est un cercle de surface [surface]."`

### 3 - Test

- Créez une instance de `Rectangle` et une instance de `Cercle`, puis appelez `afficherSurface` pour chacune.
*/
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface(forme.hauteur, forme.largeur)}.`);
    }
    else if (forme instanceof Cercle) {
        console.log(`Ceci est un Cercle de surface ${forme.calculerSurface(forme.rayon)}.`);
    }
}
let rectangle1 = new Rectangle(10, 20);
let cercle1 = new Cercle(5);
afficherSurface(rectangle1);
afficherSurface(cercle1);
