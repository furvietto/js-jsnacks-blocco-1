// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// con array
// const container = document.querySelector(".container");

// const arrayNumber = [];
// let result = 0;

// for (let i = 0; i < 10; i++) {

//     const ask = parseInt(prompt("dimmi un numero"));
//     arrayNumber.push(ask)
//     result += arrayNumber[i]
// }

// container.innerHTML = `il risultato è di ${result}`;



// senza array
// const container = document.querySelector(".container");

// let result = 0;

// for (let i = 0; i < 10; i++) {

//     const ask = parseInt(prompt("dimmi un numero"));
//     result += ask
// }

// container.innerHTML = `il risultato è di ${result}`;




const container = document.querySelector(".container");

let contatore = 0;
let result = 0;

while (contatore < 10) {
    const ask = parseInt(prompt("dimmi un numero"));
    result += ask ;
    contatore++
}

container.innerHTML = `il risultato è di ${result}`;




