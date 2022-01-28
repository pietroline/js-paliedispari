/* La funzione palindroma() verifica se una parola o una frase, passata come argomento, è palindroma. 
    Lancia un alert con il risultato */
function palindroma(argomento){

    let check = 0;
    
    //imposto tutti i caratteri in minuscolo, cosi evito l'errore nel caso in cui l'utente inserisca alcuni caratteri minuscoli e altri maiuscoli
        let stringa = argomento.toLowerCase(); 

        
    //rimuovo tutti gli spazi, nel caso in cui venga in serita una frase
        stringa = stringa.replaceAll(" ", "");
      

    stringa = stringa.split();
    let stringaInversa = stringa.reverse();
    console.log(stringa);
    console.log(stringaInversa);


/*

    //  verifico se la stringa inserita dall'utente è un array di caratteri pari o dispari
    // se l'array ha un numero di elementi pari tutti gli elementi saranno oggetto di confronto 
    // se l'array ha un numero di elementi dispari l'elemento centrale non sarà soggetto al confronto, lo elimino, non importa quale valore sia 
        if(stringa % 2 != 0){ //caso dispari
            // stringa.splice(stringa.lenght+1, 1);
        }

        console.log(stringa);
    // confronto caratteri il primo con l'ultimo, il secondo con il penultimo, il terzo con il terzultimo ...                                                     
    for(let i=0, let j=stringa.length-1; i<stringa.length/2; i++){
        if (stringa[i] == stringa[j]){
            check++;
            j--;
        } 
    }

    // se la stringa è palindroma significa che la prima metà degli elementi è uguale alla seconda meta degli elementi inversi
    if(check == argomento.length/2){
        alert(`"${argomento}" è palindroma` );
    }else{
        alert(`"${argomento}" NON è palindroma`);
    }

*/

}

const stringaInserita = prompt("Inserisci una parola o una frase");


palindroma(stringaInserita);