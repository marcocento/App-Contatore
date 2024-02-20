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


const counterContainer = document.createElement('div');
counterContainer.id = 'counter';


const displayContatore = document.createElement('p');
displayContatore.id = 'counterDisplay';
displayContatore.textContent = valoreContatore;


const incrementBtn = document.createElement('button');
incrementBtn.id = 'incrementBtn';
incrementBtn.textContent = '+';


const decrementBtn = document.createElement('button');
decrementBtn.id = 'decrementBtn';
decrementBtn.textContent = '-';


counterContainer.appendChild(displayContatore);


counterContainer.appendChild(incrementBtn);
counterContainer.appendChild(decrementBtn);


const footer = document.querySelector('footer');
footer.parentNode.insertBefore(counterContainer, footer);


incrementBtn.addEventListener('click', function() {
    incrementaContatore();
});

decrementBtn.addEventListener('click', function() {
    decrementaContatore();
});
