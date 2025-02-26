"use strict";
function isVehicule(obj) {
    if (typeof obj.marque === "string" && typeof obj.annee === "number") {
        return true;
    }
    else {
        return false;
    }
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
let vehicule1 = { marque: "toyota", annee: 2024 };
let vehiculeerror = { marque: 2024, annee: "toyota" };
afficherVehicule(vehicule1);
afficherVehicule(vehiculeerror);
