import {
  orderNum,
  orderAZ,
  orderZA,
  orderType,
  getBaseAttackPercentage,
  typeWithSpace
} from '../src/data.js';

const nomePokemon = [{
  name: 'charmander'
}, {
  name: 'pikachu'
}, {
  name: 'bulbasaur'
}]
const numPokemon = [{
  num: '025'
}, {
  num: '001'
}, {
  num: '004'
}]
const typePokemon = [{
  type: ["bug", "flying"]
}, {
  type: ["fire"]
}, {
  type: ["electric"]
}]

const pokemon = [{
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    }
  },
  {
    "stats": {
      "base-attack": "116",
      "base-defense": "93",
      "base-stamina": "118",
      "max-cp": "980",
      "max-hp": "105"
    }
  },
  {
    "stats": {
      "base-attack": "112",
      "base-defense": "96",
      "base-stamina": "111",
      "max-cp": "938",
      "max-hp": "99"
    }
  }
]

describe('orderNum', () => {
  it('is a function', () => {
    expect(typeof orderNum).toBe('function');
  });

  it('should return in numerical order', () => {
    expect(orderNum(numPokemon)).toEqual([{
      num: '001'
    }, {
      num: '004'
    }, {
      num: '025'
    }]);
  });
});

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('should return in alphabetical order A-Z', () => {
    expect(orderAZ(nomePokemon)).toEqual([{
      name: 'bulbasaur'
    }, {
      name: 'charmander'
    }, {
      name: 'pikachu'
    }]);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('should return in alphabetical order Z-A', () => {
    expect(orderZA(nomePokemon)).toEqual([{
      name: 'pikachu'
    }, {
      name: 'charmander'
    }, {
      name: 'bulbasaur'
    }]);
  });
});

describe('ordenarType', () => {
  it('is a function', () => {
    expect(typeof orderType).toBe('function');
  });

  it('should return by type in alphabetical order', () => {
    expect(orderType(typePokemon)).toEqual([{
      type: ["bug", "flying"]
    }, {
      type: ["electric"]
    }, {
      type: ["fire"]
    }]);
  });
});

describe('getBaseAttackPercentage', () => {
  it('is a function', () => {
    expect(typeof getBaseAttackPercentage).toBe('function');
  });

  it('should return 100% of base-attack', () => {
    expect(getBaseAttackPercentage(pokemon, {
      stats: {
        "base-attack": "118"
      }
    })).toEqual("100.00");
  });

  it('should return 66.67% of base-attack', () => {
    expect(getBaseAttackPercentage(pokemon, {
      stats: {
        "base-attack": "116"
      }
    })).toEqual("66.67");
  });

  it('should return 33.33% of base-attack', () => {
    expect(getBaseAttackPercentage(pokemon, {
      stats: {
        "base-attack": "112"
      }
    })).toEqual("33.33");
  });
});

describe('typeWithSpace', () => {
  it('is a function', () => {
    expect(typeof typeWithSpace).toBe('function');
  });

  it('should return more than one type with a comma and space between them', () => {
    expect(typeWithSpace(["bug", "flying"])).toEqual("bug, flying");
  });

  it('should return the type when has only one', () => {
    expect(typeWithSpace(["electric"])).toEqual("electric");
  });
});