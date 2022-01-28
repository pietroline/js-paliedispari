// verificaPariDispari(valore) verifica se il valore è uguale a "pari" o "dispari" 
// ritorna 1 in caso sia "pari" o "dispari", altrimenti 0
function verificaPariDispari(valore){
    valore = valore.toLowerCase();
    let check = 0;
    if(valore == "pari" || valore == "dispari"){
        check = 1;
    }else{
        check = 0;
    }

    return check;
}

// verificaNumero(valore) verifica se il valore è compreso tra 1 e 5 
// ritorna 1 in caso sia compreso, altrimenti 0
function verificaNumero(valore){
    valore = parseInt(valore);
    let check = 0;

    if(valore > 0 && valore < 6){
        check = 1;
    }else{
        check = 0;
    }

    return check;
}


// random(min,max) ritorna un numero random tra min e max 
function random(min, max){
    return Math.floor(Math.random() * (max - min +1) +min);
}

// somma2Numeri(numero1, numero2) ritorna la somma di due numeri
function somma2Numeri(numero1, numero2){
    return numero1 + numero2;
}

// pariDispari(valore) ritorna se il valore è pari o dispari
function pariDispari(valore){
    
    let ritorno = "";

    if (valore % 2 == 0){
        ritorno = "pari";
    }else{
        ritorno = "dispari";
    }

    return ritorno;
}




let sceltaPariDispari = "";
let checkPariDispari = 0;
do{
    sceltaPariDispari = prompt("Scegli pari o dispari");
    checkPariDispari = verificaPariDispari(sceltaPariDispari);
}while(checkPariDispari == 0);

console.log("L'utente ha scelto: " + sceltaPariDispari);




let numeroUtente;
let checkNumero = 0;
do{
    numeroUtente = prompt("Inserisci un numero da 1 a 5");
    checkNumero = verificaNumero(numeroUtente);
}while(checkNumero == 0);
console.log("Numero utente: " + numeroUtente);




const numeroPC = random(1,5);
console.log("Numero PC: " + numeroPC);

const somma = somma2Numeri(numeroUtente, numeroPC);
console.log("somma numeri: " + somma);


if(pariDispari(somma) == sceltaPariDispari){
    console.log("Ha vinto l'utente");
}else{
    console.log("Ha vinto il PC");
}