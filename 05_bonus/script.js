/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(name, hour) {
    if ( hour <= 13 ) {
        return "Buongiorno " + name;
    } else if ( hour <= 17 ) {
        return "Buon pomeriggio " + name;
    } else if ( hour > 17 ) {
        return "Buonasera " + name;
    }
}

// Invoca la funzione qui e stampa il risultato in console
let hour = parseInt(prompt("Inserire l'orario:"));
if ( hour < 0 || hour > 23 ) {
    console.log("Errore");
} else {
    console.log(saluto(name, hour));
}


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.