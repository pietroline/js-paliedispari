/* La funzione palindroma() verifica se una parola o una frase, passata come argomento, è palindroma. 
    Lancia un alert con il risultato */
function palindroma(argomento){

    let check = 0;
    
    let stringa = argomento.toLowerCase();

    for(let i=0; i<stringa.length/2; i++){
        if (stringa[i] == stringa[(stringa.length -1) - i]){
            check++;
        } 
    }

    if(check == argomento.length/2){
        alert(`"${argomento}" è palindroma` );
    }else{
        alert(`"${argomento}" NON è palindroma`);
    }

}

const stringaInserita = prompt("Inserisci una parola o una frase");


palindroma(stringaInserita);