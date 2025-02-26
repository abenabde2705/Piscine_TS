
interface Personne{
    nom: String;
    age: Number;
    readonly id: Number;
    adresse?: Adresse;
   
}
interface Adresse{
    rue: String;
    ville: String;
}

function afficherPersonne(params:Personne) {
    console.log('Bonjour, je m\'appelle '+params.nom+' et j\'ai '+params.age+' ans.');
    
}

function afficherPersonneAvancee(params:Personne) {
    if(params.adresse){
        console.log('Bonjour, je m\'appelle '+params.nom+' et j\'ai '+params.age+' ans et j\'habite au '+ params.adresse.rue+' , '+params.adresse.ville);
    }else{
        console.log('Bonjour, je m\'appelle '+params.nom+' et j\'ai '+params.age+' ans.');

     }
    
}

let personne2:Personne = {nom:"Alice", age:25, id:1, adresse:{rue:"rue de la paix",ville:"Paris"}};
let personne3: Personne = {nom:"Amrou",age:21,id:2};
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);