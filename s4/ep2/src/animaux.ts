interface IAnimal {
    nom:string;
    seDeplacer(): void;
}
class Animal implements IAnimal{
    nom: string;
    constructor( nom:string){
        this.nom = nom;
    }
    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }

}
let Animal1 = new Animal("georges");
Animal1.seDeplacer();

class chien extends Animal{
    
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}
class chat extends Animal{
    
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} court.`);
    }
}
//- Créez une fonction `faireSeDeplacer(animaux: IAnimal[])` qui prend un tableau d’objets de type `IAnimal` et appelle `seDeplacer()` pour chacun.
function faireSeDeplacer(animaux: IAnimal[]){
    animaux.forEach(element => {
        element.seDeplacer();
        
    });
}
let animaux: IAnimal [] = [new chien("georges"), new chat("michou")];
faireSeDeplacer(animaux);