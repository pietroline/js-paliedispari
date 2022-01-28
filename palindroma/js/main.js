/* La funzione palindroma() verifica se una parola o una frase, passata come argomento, è palindroma. 
    Lancia un alert con il risultato */
function palindroma(argomento){

    let check = 0;
    
    //imposto tutti i caratteri in minuscolo, cosi evito l'errore nel caso in cui l'utente inserisca alcuni caratteri minuscoli e altri maiuscoli
        let stringa = argomento.toLowerCase(); 

        
    //rimuovo tutti gli spazi, nel caso in cui venga in serita una frase
        stringa = stringa.replaceAll(" ", "");
      
    //determino la stringa inversa, al fine di effettuare la verifica 
        let stringaInversa = stringa.split('').reverse('').join('');

    //se la stringa è palindroma significa che stringa è uguale a stringaInversa
        for(i=0; i<stringa.length; i++){
            if(stringa[i] == stringaInversa[i]){
                check++;
            }
        }

        if(check == stringa.length){
            alert(`"${argomento}" è palindroma` );
        }else{
            alert(`"${argomento}" NON è palindroma`);
        }
                
}

const stringaInserita = prompt("Inserisci una parola o una frase");


palindroma(stringaInserita);