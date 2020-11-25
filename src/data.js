// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const ordenarAZ = (pokemons) => {
  return pokemons.sort(function orderPokemon (a, b){
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1;
    } if (nameA > nameB){
      return 1;
    }
      return 0;
    })
}

export const ordenarZA = (pokemons) => {
  return pokemons.sort(function orderPokemon (a, b){
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return 1;
    } if (nameA > nameB){
      return -1;
    }
      return 0;
    })
}

export const ordenarType = (pokemons) => {
  return pokemons.sort(function orderPokemon (a, b){
    const typeA = a.type[0].toUpperCase()
    const typeB = b.type[0].toUpperCase()
    if (typeA > typeB) {
      // const typeA2 = a.type[1].toUpperCase()
      // const typeB2 = b.type[1].toUpperCase()
      // if (typeA2 > typeB2){
      //   return 1;
      // } if (typeA2 < typeB2){
      //   return -1;
      // }
      return 1;
    } if (typeA < typeB){
      return -1;
    }
      return 0;
    })
}

export const ordenarRarity = (pokemons) => {
  return pokemons.sort(function orderPokemon (a, b){
    const rarityA = a.pokemon-rarity.toUpperCase()
    const rarityB = b.pokemon-rarity.toUpperCase()
    if (rarityA > rarityB) {
      return 1;
    } if (rarityA < rarityB){
      return -1;
    }
      return 0;
    })
}