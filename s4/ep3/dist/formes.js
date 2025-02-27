"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
let rectangle1 = new Rectangle(5, 8);
let cercle1 = new Cercle(2);
console.log(rectangle1.calculerSurface());
console.log(cercle1.calculerSurface());
