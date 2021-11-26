// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// const invited = ["alessio", "daniele" , "giandomenico", "giangiandomenico" , "domenico", "piergiandomenico"]

// let ask = prompt("come ti chiami?");
// let falso = false

// for (let i = 0; i < invited.length; i++) {
    
//     if (ask == invited[i]) {
//         falso = true
//     }
    
// }

// if (falso == true) {
//     console.log("belo potere entrare");
// } else {
//     console.log("no potere entrare belo");
// }


const container = document.querySelector(".container")

const invited = ["alessio", "daniele" , "giandomenico", "giangiandomenico" , "domenico", "piergiandomenico"]
let nome = "";
let falso = false
let ask = prompt("come ti chiami?");
let i = 0

while (i < invited.length && falso == false) {
    
    if (invited[i] == ask) {
        falso = true
        nome = invited[i]
    }
    i++
}

if (falso == true) {
    container.innerHTML = `<h1> daje puoi entrare ${nome} </h1>`
} else {
    container.innerHTML = `<h1> daje non puoi entrare ${ask}</h1>`
}



