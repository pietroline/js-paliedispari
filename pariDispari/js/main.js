
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







const sceltaPariDispari = prompt("Scegli pari o dispari");
console.log("L'utente ha scelto: " + sceltaPariDispari);

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
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