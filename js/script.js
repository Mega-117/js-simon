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
while (listaNumeriDaIndovinare.length <= 4) {
    let numeroDaIndovinare = numeriRandom();
    listaNumeriDaIndovinare.push(numeroDaIndovinare);
}
console.log(listaNumeriDaIndovinare);

//per visulizare tutti gli oggetti dell arr senza le virvole
//let alertText = virgolaRemove(listaNumeriDaIndovinare);



alert("Ricoda questi numeri : " + listaNumeriDaIndovinare.join(" "));

//countdown di 30 sec
//dichiaro una variabile con i sec per il time
let tempoTimer = 30;
let arrNumInseriti = [];
let arrNumIndovinati = [];

let interval = setInterval(function () {

    tempoTimer--;
    console.log("Secondi " + tempoTimer);
    if (tempoTimer <= 0) {
        clearInterval(interval);
        while (arrNumInseriti.length <= 4) {
            const boxNumInsetiti = parseInt(prompt("Ciao ti ricordi i 5 numeri scrivine uno"));
            arrNumInseriti.push(boxNumInsetiti);
            //console.log("stringa num inseriti " + boxNumInsetiti);
            //console.log(arrNumInseriti);
        }

        console.log(arrNumInseriti);
        console.log(listaNumeriDaIndovinare);

        //fare confronto tra array
        for (let i = 0; i < arrNumInseriti.length; i++) {
            let numeroUtente = arrNumInseriti[i];
            if (listaNumeriDaIndovinare.includes(numeroUtente)) {
                arrNumIndovinati.push(numeroUtente);
                console.log(arrNumIndovinati);
                console.log(parseInt(arrNumIndovinati.length));
            }
        }
        if (arrNumIndovinati.length === arrNumInseriti.length) {
            alert("hai vinto");
            alert("hai indovinato " + arrNumIndovinati.length + " numeri su " + parseInt(listaNumeriDaIndovinare.length));
            alert("numeri indovinati: " + arrNumIndovinati.join(" ") + " Numeri dai indovinare: " + listaNumeriDaIndovinare.join(" "));

        } else if (arrNumIndovinati.length < arrNumInseriti.length) {

            alert("hai indovinato " + arrNumIndovinati.length + "<br> numeri su " + parseInt(listaNumeriDaIndovinare.length));
            alert("numeri indovinati: " + arrNumIndovinati.join(" ") + " Numeri dai indovinare: " + listaNumeriDaIndovinare.join(" "));
        }

    }


}, 1000);






function numeriRandom() {
    return Math.floor(Math.random() * 100);
}

//funz che splitta
function stringSplit(parola) {
    let wordSplit = parola.split(",");
    return wordSplit;
}
//per visulizare tutti gli oggetti dell arr senza le virvole in stringa
function virgolaRemove(lista) {
    let arrConVirgole = lista.toString();
    let arrStinga = arrConVirgole.replace(/\,/g, " ");
    return arrStinga;
}