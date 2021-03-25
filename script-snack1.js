/**
 * Snack1
 * Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma in due versioni, con il for e con il while
 */

var size = 5;
var sum = 0;

//CICLO FOR
// for (var i = 1; i <= size; i++){
//     var number = parseInt( prompt('Inserisci il n.' + i + ' di ' + size) );
//     sum += number; 
// } 

// console.log('La somma dei numeri inseriti è: ' + sum);



//CICLO WHILE
var counter = 1;

while ( counter <= size){
    var number = parseInt( prompt('Inserisci il n.' + counter + ' di ' + size) );
    sum += number; 
    counter++;
}

console.log('La somma dei numeri inseriti è: ' + sum);