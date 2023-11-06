//Esercizio 1: Crea una arrow functio che accetta due numeri come parametri e
// restituisce la loro sottrazione.
// const sottrazioneNumeri = (a, b) => a - b;
// let risultato = sottrazioneNumeri(55, 10);
// console.log(risultato);

//Esercizio 2: Crea un oggetto chiamato 'studente'.
//Dovrebbe avere proprietà per 'nome' e 'età'.
//Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.

const studente = {
    nome: "Stefania",
    eta: 24,
    presentazioneBase: function () {
        return `Hello, my name is ${this.nome}, and I'm ${this.eta} years old.`;
    },

    incrementaEta: function (eta) {
        return (this.eta += eta);
    },
};

console.log(studente.presentazioneBase());
console.log(studente.incrementaEta(1));
