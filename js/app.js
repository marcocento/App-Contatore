let valoreContatore = 0;

function aggiornaVisualizzazioneContatore() {
    const displayContatore = document.getElementById('counterDisplay');
    displayContatore.textContent = valoreContatore;
}

function incrementaContatore() {
    valoreContatore++;
    aggiornaVisualizzazioneContatore();
}

function decrementaContatore() {
    valoreContatore--;
    aggiornaVisualizzazioneContatore();
}

document.getElementById('incrementBtn').addEventListener('click', function() {
    incrementaContatore();
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    decrementaContatore();
});

aggiornaVisualizzazioneContatore();


/* 
SPEGAZIONE:
Dichiarazione delle variabili: 
Abbiamo una variabile chiamata valoreContatore che tiene traccia del valore del contatore. Inizialmente è impostato su 0.

Definizione delle funzioni:

aggiornaVisualizzazioneContatore(): Questa funzione aggiorna il testo che mostra il valore del contatore nell'elemento HTML con id "counterDisplay".
incrementaContatore(): Questa funzione aumenta di uno il valore del contatore e poi chiama la funzione aggiornaVisualizzazioneContatore() per riflettere il cambiamento nella visualizzazione.
decrementaContatore(): Questa funzione diminuisce di uno il valore del contatore e poi chiama la funzione aggiornaVisualizzazioneContatore() per riflettere il cambiamento nella visualizzazione.
Gestione degli eventi:

Aggiungiamo event listeners ai pulsanti + e -.
Quando uno dei pulsanti viene cliccato, viene chiamata la funzione corrispondente (incrementaContatore() per il pulsante + e decrementaContatore() per il pulsante -).
Inizializzazione iniziale:

Chiamiamo aggiornaVisualizzazioneContatore() all'avvio per assicurarci che il valore iniziale del contatore (0) venga visualizzato correttamente.
In sostanza, questo codice gestisce il comportamento del contatore quando vengono cliccati i pulsanti + e -, mantenendo traccia del suo valore e aggiornando la visualizzazione per riflettere eventuali cambiamenti.
*/
