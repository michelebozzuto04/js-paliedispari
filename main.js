/*
Palidroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma.
*/

/*
//Dichiariamo una variabile per memorizzare la parola inserita dall'utente.
const userString = String(prompt("Inserisci una parola:"));

//Creiamo la funzione per controllare se la parola inserita è palindroma. La funzione accetta un parametro in entrata, ovvero la stringa inserita dall'utente.
function isPalindroma(userString) {
    // Creiamo una variabile booleana per stabilire il risultato del controllo.
    let palindroma = false;

    //Creiamo un ciclo for per scorrere la stringa dalla prima lettera fino all'ultima.
    for (let i = 0; i < userString.length; i++) {
        //Creiamo due variabili all'interno del ciclo: 
        // una per memorizzare la lettera corrente partendo dall'indice 0. 
        // L'altra per memorizzare la lettera opposta rispetto alla variabile precedente.
        // esempio: se la stringa è lunga 6 caratteri la variabile currentLetter partirà dal primo indice (0, poi 1, poi 2...), mentre la variabile oppositeLetter partirà dall'indice lunghezza della stringa - 1 (perchè l'ultimo indice sarebbe il 5) e poi - i (5, poi 4, poi 3...)
        const currentLetter = userString[i];
        const oppositeLetter = userString[(userString.length - 1) - i];

        //Creiamo una condizione per verificare se la variabile currentLetter è uguale a oppositeLetter.
        if (currentLetter === oppositeLetter) {
            // Se la condizione è vera allora isPalindroma diventerà vero;
            palindroma = true;
        } else {
            // Altrimenti diventerà falso e potrà uscire dal ciclo;
            palindroma = false;
            break;
        }

        // La funzione ritornerà il valore della variabile isPalindroma (vero o falso).
        return palindroma;
    }
}

//Mostriamo il risultato all'utente.
if (isPalindroma(userString)) {
    console.log("Palindroma");
} else {
    console.log("Non Palindroma");
} 
*/


/*Pari e Dispari: 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/

// Creiamo una variabile per memorizzare se l'utente ha scelto pari o dispari.
const userPariDispari = prompt("Scegli pari o dispari:");
// Creiamo una variabile per memorizzare il numero scelto dall'utente.
const userNumber = Number(prompt("Scegli un numero da 1 a 5:"));

// Creiamo una funzione che generi un numero random prendendo in entrata due parametri: numero minimo e numero massimo.
function randomNumber(min, max) {
    // La funzione ritorna un valore numerico random e arrotondato con Math.
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Numero generato:", number);
    return number;
}

// Creiamo una variabile per memorizzare il numero generato per il computer.
const computerNumber = randomNumber(1, 5);

// Creiamo una funzione per calcolare la somma dei due numeri e controllare se è pari o dispari.
function sommaPariDispari(num1, num2) {
    const sum = num1 + num2;

    console.log("Somma:", sum);

    if (sum % 2 === 0) {
        return "pari";
    } else {
        return "dispari"
    }
}

// Creiamo una variabile per memorizzare il risultato dato dalla funzione sommaPariDispari.
const somma = sommaPariDispari(userNumber, computerNumber);

// Mostriamo il risultato all'utente.
if (userPariDispari === somma) {
    console.log(somma, "Hai vinto :)");
} else {
    console.log(somma, "Hai perso :(");

}