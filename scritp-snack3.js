/**
 * Snack3
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
 */

var nomi = ['Daniele', 'Alessandro', 'Michele', 'Claudio'];
var cognomi = ['Bruno', 'Degasperi', 'Zaccagnino','Moretto']
var invitati = 50;
var listaFalsi = [];

for (var i = 0; i < invitati; i++){
  
    var invitatoFalso = nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)]; 
    listaFalsi[i] = invitatoFalso;

    console.log('Invitato ' + invitatoFalso );
}

console.log(listaFalsi);


