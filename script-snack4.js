/**
 * Snack4
 * Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */

var listNumber = [1, 5, 100, 5, 100, 5, 1000]
var sommaIndDispari = 0;

console.log(listNumber)

for (var i = 0; i < listNumber.length; i++){
    console.log(listNumber[i]);
    if ( i % 2 !== 0){
    sommaIndDispari += listNumber[i];
    }
}

console.log('La somma dei numeri nell\' indice dispari è ' + sommaIndDispari);

/**
 * CON METODO WHILE FUNZIONANETE
*/
// var counter = 0;

// while ( counter < listNumber.length){
    
//     if ( counter % 2 != 0){
//         sommaIndDispari += listNumber[counter];
//     }
//     counter++;
// }