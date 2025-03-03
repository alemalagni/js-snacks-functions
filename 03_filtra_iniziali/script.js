/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function namesLetter(letter, names) {
    const letterNames = [];
    for ( let i = 0; i < names.length; i++ ) {
        const a = names[i];
        if ( a[0] === letter ){
            letterNames.push(a);
        }
    }

    return letterNames;
}

// Invoca la funzione qui e stampa il risultato in console
const letter = prompt("Inserire una lettera:");
if ( letter.length > 1 ) {
    console.log("Errore")
} else {
    console.log(namesLetter(letter, names));
}

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]