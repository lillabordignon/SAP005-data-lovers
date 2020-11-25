import {ordenarAZ, ordenarZA, ordenarType, ordenarRarity} from './data.js';
import data from './data/pokemon/pokemon.js';


//console.log(example, data);

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

function pokemonCardsClear(){
  let cards = document.querySelector('.c-cards')
    while (cards.firstChild){
        cards.removeChild(cards.firstChild);
    }
}

function pokemonSearch(){
    pokemonCardsClear()
    data.pokemon.filter((pokemon) =>{
        const search = document.getElementById("search").value
        if (pokemon.name.startsWith(search)){
          let cards = document.querySelector('.c-cards');
          let card = document.createElement('section');
          cards.appendChild(card);
          card.innerHTML = card.innerHTML = `<article class="card type-${pokemon.type[0]}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><button>Detalhes</button></article>`;
        }
    })
}
btnsearch.addEventListener("click", pokemonSearch)

const pokemonOrder = document.getElementById("ordenar")
pokemonOrder.addEventListener("change", qualquer)
function qualquer(){
  const index = pokemonOrder.selectedIndex;
  if (index == 1){
    pokemonCardsClear();
    showCards(ordenarAZ(data.pokemon))
  } if (index == 2){
    pokemonCardsClear();
    showCards(ordenarZA(data.pokemon))
  } if (index == 3){
    pokemonCardsClear();
    showCards(ordenarType(data.pokemon))
  } if (index == 4){
    pokemonCardsClear();
    showCards(ordenarRarity(data.pokemon))
  } else {
    showCards(data.pokemon)
  }
  console.log(index)
}

console.log(data.pokemon[1])

