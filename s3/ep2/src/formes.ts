class Rectangle {
    
    largeur: number;
    hauteur: number;
    calculerSurface(params:number, params2:number) {
        return params*params2;
        
    }

    constructor(largeur: number, hauteur: number) {
        this.largeur = largeur;
        this.hauteur = hauteur;
        
    }
}
class Cercle {
    rayon: number;
    calculerSurface(params:number) {
        Math.PI * params * params;
    }
    constructor(rayon: number) {
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

function afficherSurface(forme: Rectangle | Cercle): void {
    if(forme instanceof Rectangle){
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface(forme.hauteur,forme.largeur)}.`);
    }else if (forme instanceof Cercle){
        console.log(`Ceci est un Cercle de surface ${forme.calculerSurface(forme.rayon)}.`);
    }
}
let rectangle1 = new Rectangle(10, 20);
let cercle1 = new Cercle(5);
afficherSurface(rectangle1);
afficherSurface(cercle1);