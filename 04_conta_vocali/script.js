/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocals(word) {
    let vocalNumber = 0;
    for ( let i = 0; i < word.length; i++ ) {
        if ( word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" ) {
            vocalNumber += 1;
        }
    }
    return vocalNumber;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocals(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)