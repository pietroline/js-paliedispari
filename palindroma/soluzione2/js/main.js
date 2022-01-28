function palindroma(argomento){

    let check = 0;

    //imposto tutti i caratteri in minuscolo, cosi evito l'errore nel caso in cui l'utente inserisca alcuni caratteri minuscoli e altri maiuscoli
        let stringa = argomento.toLowerCase(); 


    //rimuovo tutti gli spazi, nel caso in cui venga in serita una frase
        stringa = stringa.replaceAll(" ", "");

    /* verifico se la stringa inserita dall'utente è un array di caratteri pari o dispari
    se l'array ha un numero di elementi pari tutti gli elementi saranno oggetto di confronto 
    se l'array ha un numero di elementi dispari l'elemento centrale non sarà soggetto al confronto, lo elimino, non importa quale valore sia */
        if(stringa.length % 2 != 0){ //caso dispari
            stringa = stringa.split('');
            stringa.splice(Math.floor(stringa.length/2), 1);
            stringa = stringa.join('');
        }

    // confronto caratteri il primo con l'ultimo, il secondo con il penultimo, il terzo con il terzultimo ...
    for(let i=0; i<stringa.length/2; i++){
        if (stringa[i] == stringa[(stringa.length -1) - i]){
            check++;
        } 
    }

    // se la stringa è palindroma significa che la prima metà degli elementi è uguale alla seconda meta degli elementi inversi
    if(check == stringa.length/2){
        alert(`"${argomento}" è palindroma` );
    }else{
        alert(`"${argomento}" NON è palindroma`);
    }
}

const stringaInserita = prompt("Inserisci una parola o una frase");
palindroma(stringaInserita);