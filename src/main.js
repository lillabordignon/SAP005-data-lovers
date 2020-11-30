import {ordenarAZ, ordenarZA, ordenarType, ordenarNum} from './data.js';
import data from './data/pokemon/pokemon.js';


//console.log(example, data);

const showCards = () => {
  for (let pokemon of data.pokemon) {
    let cards = document.querySelector('.c-cards');
    let card = document.createElement('section');
    cards.appendChild(card);
    card.innerHTML = `<article class="card type-${pokemon.type[0]}" data-num="${pokemon.num}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><button>Detalhes</button></article>`;
  }
}

const showModal = (event) => {

  modal.classList.add('itemActive');

  let contentModal = modal.querySelector('.c-modal_content');
  
  let elClick = event.target;
  let cardClicked = elClick.closest('article.card');

  let pokeNum = cardClicked.dataset.num;
  console.log(pokeNum);

  let findCard = data.pokemon.find(pokemon =>  pokemon.num == pokeNum);

  
  contentModal.innerHTML = `<span class="close">&times;</span><img src="${findCard.img}" alt=""><h1>${findCard.name}<h1><h2>${findCard.type}</h2><p>${findCard.about}</p><p>${findCard.weaknesses}</p><p>${findCard['quick-move'][0].name}</p><p>${findCard['special-attack'][0].name}</p>`;

  let btClose = modal.querySelector('.close');
  btClose.addEventListener('click', hiddenModal);

}

const hiddenModal = () => {
  modal.classList.remove('itemActive');
}

window.addEventListener('load', () => {
    input.addEventListener("keyup", pokemonSearch);

    showCards();
    
    let cardsButtons = document.querySelectorAll('.card button');

    cardsButtons.forEach(button => {
      button.addEventListener('click', showModal);
    });

    input.addEventListener("keyup", pokemonSearch);
    

})

const modal = document.querySelector('.c-modal');
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
        if (pokemon.name.startsWith(search) || pokemon.type[0].startsWith(search)){
          let cards = document.querySelector('.c-cards');
          let card = document.createElement('section');
          cards.appendChild(card);
          card.innerHTML = `<article class="card type-${pokemon.type[0]}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><button>Detalhes</button></article>`;
        } else if (pokemon.type[1] != undefined){
          if(pokemon.type[1].startsWith(search)){
            let cards = document.querySelector('.c-cards');
            let card = document.createElement('section');
            cards.appendChild(card);
            card.innerHTML = `<article class="card type-${pokemon.type[0]}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><button>Detalhes</button></article>`;
          }
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
  } if (index == 0){
    pokemonCardsClear()
    showCards(ordenarNum(data.pokemon))
  }
}