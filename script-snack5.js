/**
 * Snack5
 * Crea due array di numeri che hanno un numero di elementi diversi.
 * Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
 */

var listNumber1 = [2, 5, 12, 6, 7, 20, 33];
var listNumber2 = [3, 4, 7, 8, 9];

console.log('Dimensione iniziale 1°lista: ' + listNumber1.length + ' >>> ' + listNumber1);
console.log('Dimensione iniziale 2°lista: ' + listNumber2.length + ' >>> ' + listNumber2);


// CONTROLLO IF - CODICE "PARLANTE" ponendo a monte un controllo logico di selezione
// if (listNumber1.length < listNumber2.length){
//     while( listNumber1.length < listNumber2.length){
//         listNumber1.push( Math.floor(Math.random() * 100) +1 );
//     }
// } else {
//     while( listNumber1.length > listNumber2.length){
//         listNumber2.push( Math.floor(Math.random() * 100) +1 );
//     }
// }


while( listNumber1.length < listNumber2.length){
    listNumber1.push( Math.floor(Math.random() * 100) +1 );
}

while( listNumber1.length > listNumber2.length){
    listNumber2.push( Math.floor(Math.random() * 100) +1 );
}

console.log('Dimensione finale 1°lista: ' + listNumber1.length + ' >>> ' + listNumber1);
console.log('Dimensione finale 2°lista: ' + listNumber2.length + ' >>> ' + listNumber2);

