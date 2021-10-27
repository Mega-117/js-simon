//fare allert con 5 numeri casuali
//faccio cilco while * 5 volte per generare i numeri casuali 
//poi puscio in un nuovo arry
// -faccio un array con 5 num casuali
// fare funz num casuali
//fare countdown di 30s
//fare apparire il prompt
//fare il controllo (dire quanti e quali numeri ha indovinato l ut)
/******************************************************************/

//arr 5 numeri random
let listaNumeriDaIndovinare = [];
while (listaNumeriDaIndovinare.length <= 5) {
    let numeroDaIndovinare = numeriRandom();
    listaNumeriDaIndovinare.push(numeroDaIndovinare);
}
console.log(listaNumeriDaIndovinare);

//countdown di 30 sec




function numeriRandom() {
    return Math.floor(Math.random() * 100);
}
