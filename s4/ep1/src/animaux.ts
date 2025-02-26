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