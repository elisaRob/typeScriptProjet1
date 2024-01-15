"use strict";
const recuperationListeDeroulanteDevise = document.querySelector(".listeDeroulanteDevise");
const recuperationListeDeroulanteDeviseAConvertir = document.querySelector(".listeDeroulanteDeviseAConvertir");
const recuperationDeLinput = document.querySelector("#montant");
const recuperationARemplirResultat = document.querySelector(".aRemplir");
let inputMontant;
let inputSelectPremier;
let inputSelectDeuxieme;
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 1.20
};
const livreSterling = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    taux: 1.39
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "¥",
    taux: 0.15
};
const devises = [dollar, euro, livreSterling, yuan];
recuperationListeDeroulanteDevise.innerHTML = afficherLesDevises(devises);
recuperationListeDeroulanteDeviseAConvertir.innerHTML = afficherLesDevises(devises);
function afficherLesDevises(listeDesDevises) {
    let afficherListeDeroulante = "";
    for (let uneListe of listeDesDevises) {
        afficherListeDeroulante += `<option value=${uneListe.code}>${uneListe.nom} - ${uneListe.symbole}</option>`;
    }
    return afficherListeDeroulante;
}
recuperationDeLinput.addEventListener("keyup", () => {
    inputMontant = +recuperationDeLinput.value;
});
recuperationListeDeroulanteDevise.addEventListener("change", updateResultat);
recuperationListeDeroulanteDeviseAConvertir.addEventListener("change", updateResultat);
function updateResultat() {
    inputSelectPremier = recuperationListeDeroulanteDevise.value;
    inputSelectDeuxieme = recuperationListeDeroulanteDeviseAConvertir.value;
    // recuperationARemplirResultat.innerHTML=inputSelectPremier
    recuperationARemplirResultat.innerHTML = `${calculResultat(inputSelectPremier, inputSelectDeuxieme)}`;
}
// function afficherResultat(){
//     recuperationARemplirResultat.innerHTML=`${calculResultat()}`
// }
function calculResultat(in_inputSelectPremier, in_inputSelectDeuxieme) {
    let recuperationDeLinputPourCalculTaux = Number(recuperationDeLinput.value);
    let tauxDeLaDevise;
    let tauxDeLaDeuxiemeDevise;
    let resultat;
    const deviseCorrespondante = devises.find(devise => devise.code === in_inputSelectPremier);
    const deuxiemeDeviseCorrespondante = devises.find(devise => devise.code === in_inputSelectDeuxieme);
    if (deviseCorrespondante) {
        tauxDeLaDevise = deviseCorrespondante.taux;
    }
    if (deuxiemeDeviseCorrespondante) {
        tauxDeLaDeuxiemeDevise = deuxiemeDeviseCorrespondante.taux;
    }
    if (typeof tauxDeLaDevise === "number" && typeof tauxDeLaDeuxiemeDevise === "number") {
        resultat = (tauxDeLaDevise * recuperationDeLinputPourCalculTaux) / tauxDeLaDeuxiemeDevise;
        resultat = parseFloat(resultat.toFixed(2));
    }
    if (resultat) {
        return resultat;
    }
}
//in_montant:number,in_deviseInitValue:string,in_deviseFinalValeur:string
// function calculResultat(){
// }
// function obtenierDevise(){
//     alert(premierListeDeroulante)
// }
//# sourceMappingURL=main.js.map