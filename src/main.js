import {
  example
} from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(example, data);

const showCards = () => {
  for (let pokemon of data.pokemon) {
    let cards = document.querySelector('.c-cards');
    let card = document.createElement('section');
    cards.appendChild(card);
    card.innerHTML = `<section class="card"><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><button>Detalhes</button></section>`;
  }

}

window.addEventListener('load', () => {
  showCards();
})
