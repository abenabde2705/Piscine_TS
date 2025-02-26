interface vehicule {
    marque: string;
    annee: number;
}
function isVehicule(obj:any): obj is vehicule {
    if(typeof obj.marque === "string" && typeof obj.annee === "number"){
        return true;}else{
            return false;
        }
    
}
function afficherVehicule(obj: any) {
    if(isVehicule(obj)){
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    
}else{
     console.log( "Objet invalide pour un véhicule.");
}
}
let vehicule1 = {marque: "toyota", annee: 2024};
let vehiculeerror = {marque: 2024, annee: "toyota"};
afficherVehicule(vehicule1);
afficherVehicule(vehiculeerror);
