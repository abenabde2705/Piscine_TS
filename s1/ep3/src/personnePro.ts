/*Une interface Employe avec :
nom: string
poste: string
Une interface Client avec :
nom: string
entreprise: string
 */


interface Employe{
    nom : string;
    poste: string;
}
interface Client {
    nom: string;
    entreprise: string;
}
type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(params:PersonnePro) {
    
    if('poste' in params){
        console.log('Je suis '+params.nom+' et je suis '+params.poste);
    }else{
        console.log('Je suis '+params.nom+' et je suis '+params.entreprise);
    }
}
let PersonnePro1:PersonnePro = {nom:"Alice", poste:"Developpeur freelance"};
let PersonnePro2:PersonnePro = {nom:"Amrou",entreprise:"Societe zbi"};
afficherInfoProfessionnelle(PersonnePro1);
afficherInfoProfessionnelle(PersonnePro2);