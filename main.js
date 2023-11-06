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

window.addEventListener("load", () => {
    const container = document.getElementById("lista");
    const firstLi = container.querySelector("li");
    const ultimoLi = document.createElement("li");
    const primoLi = document.createElement("li");
    ultimoLi.innerText = "pomodoro*ultimo";
    primoLi.innerText = "mela*primo";
    container.appendChild(ultimoLi);
    container.insertBefore(primoLi, firstLi);
});
