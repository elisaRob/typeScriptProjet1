"use strict";
const recuperationListeDeroulanteDevise = document.querySelector(".listeDeroulanteDevise");
const recuperationListeDeroulanteDeviseAConvertir = document.querySelector(".listeDeroulanteDeviseAConvertir");
const recuperationDeLinput = document.querySelector("#montant");
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
recuperationListeDeroulanteDevise.addEventListener("change", () => {
    inputSelectPremier = recuperationListeDeroulanteDevise.value;
});
recuperationListeDeroulanteDeviseAConvertir.addEventListener("change", () => {
    inputSelectDeuxieme = recuperationListeDeroulanteDeviseAConvertir.value;
});
function calculResultat() {
}
// function obtenierDevise(){
//     if(inputSelectPremier===devises.code)
// }
//# sourceMappingURL=main.js.map