const recuperationListeDeroulanteDevise= document.querySelector(".listeDeroulanteDevise")! as HTMLSelectElement
const recuperationListeDeroulanteDeviseAConvertir=document.querySelector(".listeDeroulanteDeviseAConvertir")! as HTMLSelectElement
const recuperationDeLinput = document.querySelector("#montant")! as HTMLInputElement;
let inputMontant:number;
let inputSelectPremier:string
let inputSelectDeuxieme:string

type DeviseType = {
    nom:string;
    code:string;
    symbole:string;
    taux:number;
}

const dollar:DeviseType = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1
}

const euro:DeviseType = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux:1.20
}

const livreSterling:DeviseType = {
    nom: "Livre",
    code:"Liv",
    symbole:"£",
    taux:1.39
}

const yuan:DeviseType = {
    nom:"Yuan",
    code:"Yua",
    symbole:"¥",
    taux: 0.15
}

const devises:DeviseType[] = [dollar,euro,livreSterling,yuan]


recuperationListeDeroulanteDevise.innerHTML=afficherLesDevises(devises)
recuperationListeDeroulanteDeviseAConvertir.innerHTML=afficherLesDevises(devises)

function afficherLesDevises(listeDesDevises:DeviseType[]) : string {
    let afficherListeDeroulante:string=""
    for(let uneListe of listeDesDevises){
        afficherListeDeroulante+=`<option value=${uneListe.code}>${uneListe.nom} - ${uneListe.symbole}</option>`
    }
    return afficherListeDeroulante
    
}

recuperationDeLinput.addEventListener("keyup",()=>{
    inputMontant =+recuperationDeLinput.value
})

recuperationListeDeroulanteDevise.addEventListener("change",()=>{
    inputSelectPremier=recuperationListeDeroulanteDevise.value
})

recuperationListeDeroulanteDeviseAConvertir.addEventListener("change",()=>{
    inputSelectDeuxieme=recuperationListeDeroulanteDeviseAConvertir.value
})

function calculResultat(){

}

// function obtenierDevise(){
//     if(inputSelectPremier===devises.code)
// }
