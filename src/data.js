export const orderNum = (pokemons) => {
  return pokemons.sort(function orderPokemon(a, b) {
    const numA = a.num.toUpperCase()
    const numB = b.num.toUpperCase()
    if (numA > numB) {
      return 1;
    }
    if (numA < numB) {
      return -1;
    }

  })
}

export const orderAZ = (pokemons) => {
  return pokemons.sort(function orderPokemon(a, b) {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

  })
}

export const orderZA = (pokemons) => {
  return pokemons.sort(function orderPokemon(a, b) {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

  })
}

export const orderType = (pokemons) => {
  return pokemons.sort(function orderPokemon(a, b) {
    const typeA = a.type[0].toUpperCase()
    const typeB = b.type[0].toUpperCase()
    if (typeA > typeB) {
      return 1;
    }
    if (typeA < typeB) {
      return -1;
    }

  })
}

export const getBaseAttackPercentage = (pokemons, singleBaseAttack) => {
  const calcAttack = pokemons.reduce((accumulator, pokemon) => {
    if (parseInt(singleBaseAttack.stats["base-attack"]) > parseInt(pokemon.stats["base-attack"])) {
      return accumulator + 1
    } else {
      return accumulator
    }
  }, 1)
  return ((calcAttack / pokemons.length) * 100).toFixed(2)
}

export const typeWithSpace = (type) => {
  if (type.length > 1){
    return `${type[0]}, ${type[1]}`
  } else {
    return `${type[0]}`
  }
}

