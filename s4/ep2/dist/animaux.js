"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}
let Animal1 = new Animal("georges");
Animal1.seDeplacer();
class chien extends Animal {
    seDeplacer() {
        console.log(`Le chien ${this.nom} court.`);
    }
}
class chat extends Animal {
    seDeplacer() {
        console.log(`Le chat ${this.nom} court.`);
    }
}
//- Créez une fonction `faireSeDeplacer(animaux: IAnimal[])` qui prend un tableau d’objets de type `IAnimal` et appelle `seDeplacer()` pour chacun.
function faireSeDeplacer(animaux) {
    animaux.forEach(element => {
        element.seDeplacer();
    });
}
let animaux = [new chien("georges"), new chat("michou")];
faireSeDeplacer(animaux);
