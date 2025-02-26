"use strict";
/*Une interface Employe avec :
nom: string
poste: string
Une interface Client avec :
nom: string
entreprise: string
 */
function afficherInfoProfessionnelle(params) {
    if ('poste' in params) {
        console.log('Je suis ' + params.nom + ' et je suis ' + params.poste);
    }
    else {
        console.log('Je suis ' + params.nom + ' et je suis ' + params.entreprise);
    }
}
let PersonnePro1 = { nom: "Alice", poste: "Developpeur freelance" };
let PersonnePro2 = { nom: "Amrou", entreprise: "Societe zbi" };
afficherInfoProfessionnelle(PersonnePro1);
afficherInfoProfessionnelle(PersonnePro2);
