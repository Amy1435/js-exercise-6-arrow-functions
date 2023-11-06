//Esercizio 1: Crea una arrow functio che accetta due numeri come parametri e
// restituisce la loro sottrazione.
// const sottrazioneNumeri = (a, b) => a - b;
// let risultato = sottrazioneNumeri(55, 10);
// console.log(risultato);

//Esercizio 2: Crea un oggetto chiamato 'studente'.
//Dovrebbe avere proprietà per 'nome' e 'età'.
//Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.

// const studente = {
//     nome: "Stefania",
//     eta: 24,
//     presentazioneBase: function () {
//         return `Hello, my name is ${this.nome}, and I'm ${this.eta} years old.`;
//     },

//     incrementaEta: function (eta) {
//         return (this.eta += eta);
//     },
// };

// console.log(studente.presentazioneBase());
// console.log(studente.incrementaEta(1));

//Esercizio 3: Crea una semplice pagina HTML con un elemento div.
//Usa JavaScript per cambiare l'innerHTML e l'innerText del div.

// window.addEventListener("load", () => {
//     const divContainer = document.getElementById("container");
//     divContainer.innerHTML = "Inner Html";
//     divContainer.innerText = "Inner Text";
//     console.log(divContainer.innerHTML);
//     console.log(divContainer.innerText);
// });

//Esercizio 4: Crea una lista non ordinata con tre elementi di lista.
//Usa JavaScript per aggiungere un nuovo elemento di lista alla fine della lista usando appendChild.
//Poi usa insertBefore per aggiungere un elemento di lista all'inizio della lista.

// window.addEventListener("load", () => {
//     const container = document.getElementById("lista");
//     const firstLi = container.querySelector("li");
//     const ultimoLi = document.createElement("li");
//     const primoLi = document.createElement("li");
//     ultimoLi.innerText = "pomodoro*ultimo";
//     primoLi.innerText = "mela*primo";
//     container.appendChild(ultimoLi);
//     container.insertBefore(primoLi, firstLi);
// });

//Esercizio 5: Crea un elemento div con class 'blu'.
//Usa JavaScript per controllare al click se il div ha la classe 'blu' usando classList.includes().
//Poi usa classList.add() per aggiungere una classe 'rosso' e classList.remove() per rimuovere la classe 'blu'.
// window.addEventListener("click", () => {
//     const divBlue = document.querySelector(".blu");
//     divBlue.style.color = "blue";
//     let verificaDiv = divBlue.classList.contains("blu");
//     if (verificaDiv) {
//         console.log("si, blu è una classe di div");
//     } else {
//         console.log("no, blu non è una classe di div");
//     }

//     divBlue.classList.add("rosso");
//     divBlue.classList.remove("blu");
//     console.log(divBlue);
// });

//Esercizio 6: Crea un pulsante in HTML.
//Usa JavaScript per impostare un attributo 'disabled' sul pulsante usando setAttribute().

// window.addEventListener("load", () => {
//     const bottone = document.getElementById("btn");
//     bottone.setAttribute("class", "disabled");
//     console.log(bottone);
// });

//Esercizio 7: Crea un elemento div.
//Aggiungi un evento onmouseover che cambia il colore del div.
//Aggiungi un evento onmouseout che cambia il colore del div indietro.
//Aggiungi un evento click che stampa un messaggio in console.

// window.addEventListener("onmouseover", () => {
//     const div = document.getElementById("container");
//     div.style.color = "red";
// });

const divRosso = () => {
    const div = document.getElementById("container");
    div.style.color = "red";
};
const divBackToNormal = () => {
    const div = document.getElementById("container");
    div.style.color = "black";
};

const handleClick = () => {
    const div = document.getElementById("container");
    console.log("hello world");
};
