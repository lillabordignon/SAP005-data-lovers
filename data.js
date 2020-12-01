// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const ordenarNum = (pokemons) => {
  return pokemons.sort(function orderPokemon (a, b){
      const numA = a.num.toUpperCase()
      const numB = b.num.toUpperCase()
      if (numA > numB) {
        return 1;
      } if (numA < numB){
        return -1;
      }
        return 0;
    })
}

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
       return 1;
    } if (typeA < typeB){
      return -1;
    }
      return 0;
    })
}

export const getBaseAttackPercentage = (pokemons, singleBaseAttack) => {
  const calcAttack = pokemons.reduce((accumulator, pokemon) =>{
    if (parseInt(singleBaseAttack.stats["base-attack"]) > parseInt(pokemon.stats["base-attack"])){
      return accumulator + 1
    } else {
      return accumulator
    }
  }, 1)
  console.log(calcAttack)
  return ((calcAttack / pokemons.length) * 100).toFixed(2)
}