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
    card.innerHTML = `<article class="card type-${pokemon.type[0]}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><button>Detalhes</button></article>`;
  }

}

window.addEventListener('load', () => {
    input.addEventListener("keyup", pokemonSearch)
    showCards();
})

const btnsearch = document.getElementById("btnsearch")
const input = document.getElementById("search")

function pokemonSearch(){
    let cards = document.querySelector('.c-cards')
    while (cards.firstChild){
        cards.removeChild(cards.firstChild);
    }
    data.pokemon.filter((pokemon) =>{
        const search = document.getElementById("search").value
        if (pokemon.name.startsWith(search)){
            let cards = document.querySelector('.c-cards');
            let card = document.createElement('section');
            cards.appendChild(card);
            card.innerHTML = `<section class="card"><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><button>Detalhes</button></section>`;
        }
    })
}
btnsearch.addEventListener("click", pokemonSearch)
