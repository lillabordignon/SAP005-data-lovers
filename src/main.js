import {
  orderAZ,
  orderZA,
  orderType,
  orderNum,
  getBaseAttackPercentage,
  typeWithSpace,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const showCards = () => {
  for (let pokemon of data.pokemon) {
    let cards = document.querySelector('.c-cards');
    let card = document.createElement('section');
    cards.appendChild(card);
    card.innerHTML = `<article class="card type-${pokemon.type[0]}" data-num="${pokemon.num}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${typeWithSpace(pokemon.type)}</h2><button>Detalhes</button></article>`;
    let cardsButtons = document.querySelectorAll('.card button');
    cardsButtons.forEach(button => {
      button.addEventListener('click', showModal);
    });
  }
}

const showModal = (event) => {
  modal.classList.add('itemActive');
  let contentModal = modal.querySelector('.c-modal_content');
  contentModal.removeAttribute('id');
  let elClick = event.target;
  let cardClicked = elClick.closest('article.card');
  let pokeNum = cardClicked.dataset.num;
  let findCard = data.pokemon.find(pokemon => pokemon.num == pokeNum);
  let boxType = `type-${findCard.type[0]}`;
  contentModal.setAttribute('id', boxType);
  contentModal.innerHTML = `
    <span class="close">&times;</span>
    <div class="c-modal-header"><img src="${findCard.img}" alt="">
      <h1>${findCard.name}</h1>
      <h2><strong>Type:</strong> ${typeWithSpace(findCard.type)}</h2>
    </div>
    <div class="c-modal-container">
      <p><strong>Height:</strong> ${findCard.size.height}</p>
      <p><strong>Weight:</strong> ${findCard.size.weight}</p>
      <p><strong>About:</strong> ${findCard.about}</p>
    </div>
    <div class="c-modal-footer">
      <p><strong>Quick Move:</strong> ${findCard['quick-move'][0].name}</p>
      <p><strong>Special-Attack:</strong> ${findCard['special-attack'][0].name}</p>
      <p>${findCard.name.toUpperCase()} has base-attack greater than ${getBaseAttackPercentage(data.pokemon, findCard)}% of Pokémons.</p>
    </div>`;
  let btClose = modal.querySelector('.close');
  btClose.addEventListener('click', hiddenModal);
}

const hiddenModal = () => {
  modal.classList.remove('itemActive');
}

window.addEventListener('load', () => {
  input.addEventListener("keyup", pokemonSearch);
  showCards();
})

const modal = document.querySelector('.c-modal');
const input = document.getElementById("search")

function pokemonCardsClear() {
  let cards = document.querySelector('.c-cards')
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}

function pokemonSearch() {
  pokemonCardsClear()
  data.pokemon.filter((pokemon) => {
    const search = document.getElementById("search").value.toLowerCase()
    if (pokemon.name.startsWith(search) || pokemon.type[0].startsWith(search)) {
      let cards = document.querySelector('.c-cards');
      let card = document.createElement('section');
      cards.appendChild(card);
      card.innerHTML = `<article class="card type-${pokemon.type[0]}" data-num="${pokemon.num}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${typeWithSpace(pokemon.type)}</h2><button>Detalhes</button></article>`;
      let cardsButtons = document.querySelectorAll('.card button');
      cardsButtons.forEach(button => {
        button.addEventListener('click', showModal);
      });
    } else if (pokemon.type[1] != undefined) {
      if (pokemon.type[1].startsWith(search)) {
        let cards = document.querySelector('.c-cards');
        let card = document.createElement('section');
        cards.appendChild(card);
        card.innerHTML = `<article class="card type-${pokemon.type[0]}" data-num="${pokemon.num}"><span class='card-number'>${pokemon.num}</span><img src="${pokemon.img}" alt=""><h1>${pokemon.name}</h1><h2>${typeWithSpace(pokemon.type)}</h2><button>Detalhes</button></article>`;
        let cardsButtons = document.querySelectorAll('.card button');
        cardsButtons.forEach(button => {
          button.addEventListener('click', showModal);
        });
      }
    }
  })
}

const pokemonOrder = document.getElementById("ordenar")
pokemonOrder.addEventListener("change", selectOrder)

function selectOrder() {
  const index = pokemonOrder.selectedIndex;
  if (index == 1) {
    pokemonCardsClear();
    showCards(orderAZ(data.pokemon))
  }
  if (index == 2) {
    pokemonCardsClear();
    showCards(orderZA(data.pokemon))
  }
  if (index == 3) {
    pokemonCardsClear();
    showCards(orderType(data.pokemon))
  }
  if (index == 0) {
    pokemonCardsClear()
    showCards(orderNum(data.pokemon))
  }
}
