interface Personne{
    nom: String;
    age: Number;
}

function afficherPersonne(params:Personne) {
    console.log('Bonjour, je m\'appelle '+params.nom+' et j\'ai '+params.age+' async.');
    
}

let personne1:Personne = {nom:"Alice", age:25};
afficherPersonne(personne1);
