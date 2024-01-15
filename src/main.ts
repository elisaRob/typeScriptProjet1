const recuperationListeDeroulanteDevise= document.querySelector(".listeDeroulanteDevise")! as HTMLSelectElement
const recuperationListeDeroulanteDeviseAConvertir=document.querySelector(".listeDeroulanteDeviseAConvertir")! as HTMLSelectElement
const recuperationDeLinput = document.querySelector("#montant")! as HTMLInputElement;
const recuperationARemplirResultat = document.querySelector(".aRemplir")! as HTMLDivElement;
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

recuperationListeDeroulanteDevise.addEventListener("change",updateResultat);

recuperationListeDeroulanteDeviseAConvertir.addEventListener("change",updateResultat)

function updateResultat(){
    inputSelectPremier=recuperationListeDeroulanteDevise.value;
    inputSelectDeuxieme=recuperationListeDeroulanteDeviseAConvertir.value
    // recuperationARemplirResultat.innerHTML=inputSelectPremier
    recuperationARemplirResultat.innerHTML=`${calculResultat(inputSelectPremier, inputSelectDeuxieme)}`;
}

// function afficherResultat(){
//     recuperationARemplirResultat.innerHTML=`${calculResultat()}`
// }

function calculResultat(in_inputSelectPremier :string, in_inputSelectDeuxieme:string) {
    let recuperationDeLinputPourCalculTaux:number=Number(recuperationDeLinput.value);
    let tauxDeLaDevise:number | undefined ;
    let tauxDeLaDeuxiemeDevise:number | undefined;
    let resultat;
    
    const deviseCorrespondante = devises.find(devise => devise.code === in_inputSelectPremier)
    const deuxiemeDeviseCorrespondante = devises.find(devise => devise.code === in_inputSelectDeuxieme )
    if(deviseCorrespondante){
        tauxDeLaDevise = deviseCorrespondante.taux
    }

    if(deuxiemeDeviseCorrespondante){
        tauxDeLaDeuxiemeDevise = deuxiemeDeviseCorrespondante.taux
    }


    if(typeof tauxDeLaDevise==="number" && typeof tauxDeLaDeuxiemeDevise==="number"){
        resultat = (tauxDeLaDevise * recuperationDeLinputPourCalculTaux) / tauxDeLaDeuxiemeDevise;
        resultat = parseFloat(resultat.toFixed(2))
    }

    if(resultat){
        return resultat;
    }
   
}



//in_montant:number,in_deviseInitValue:string,in_deviseFinalValeur:string


// function calculResultat(){

// }


// function obtenierDevise(){
//     alert(premierListeDeroulante)
// }


