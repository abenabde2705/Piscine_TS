abstract class Forme {
    
    abstract calculerSurface(): number;

}
 class Rectangle extends Forme  {
     largeur:number;
     hauteur:number;
    constructor(largeur: number, hauteur: number) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    override calculerSurface(): number {
        return this.largeur*this.hauteur
        
    }
}
 class Cercle extends Forme  {
     rayon:number;
    constructor(rayon: number) {
        super();
        this.rayon = rayon;
    }
    override calculerSurface(): number {
        return Math.PI*this.rayon*this.rayon;
        
    }
}

let rectangle1 = new Rectangle( 5,8);
let cercle1 = new Cercle(2);
console.log(rectangle1.calculerSurface());
console.log(cercle1.calculerSurface());