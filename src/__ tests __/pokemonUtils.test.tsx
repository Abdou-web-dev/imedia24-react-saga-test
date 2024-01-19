import { hasHiddenAbility } from "../utils/PokemonUtils";
const pokemonWithHiddenAbility: any = {
  abilities: [
    {
      ability: {
        name: "intimidate",
        url: "https://pokeapi.co/api/v2/ability/22/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "shed-skin",
        url: "https://pokeapi.co/api/v2/ability/61/",
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: "unnerve",
        url: "https://pokeapi.co/api/v2/ability/127/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
};

const pokemonWithoutHiddenAbility: any = {
  abilities: [
    {
      ability: {
        name: "intimidate",
        url: "https://pokeapi.co/api/v2/ability/22/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "shed-skin",
        url: "https://pokeapi.co/api/v2/ability/61/",
      },
      is_hidden: false,
      slot: 2,
    },
  ],
};

// import { isFireType } from "../utils/pokemonUtils";
const { isFireType } = require("../utils/PokemonUtils");

test("returns true for a fire type Pokemon", () => {
  const fireTypePokemon = {
    types: [{ type: { name: "fire" } }], // an array of objects , this array is named types, each object of the array has a nested sub-object called type with a key "name" and a string value
  };

  expect(isFireType(fireTypePokemon)).toBe(true);
});

test("returns false for a non-fire type Pokemon", () => {
  const waterTypePokemon = {
    types: [{ type: { name: "water" } }],
  };

  expect(isFireType(waterTypePokemon)).toBe(false);
});

test("Pokemon with hidden ability", () => {
  expect(hasHiddenAbility(pokemonWithHiddenAbility)).toBe(true);
});

test("Pokemon without hidden ability", () => {
  expect(hasHiddenAbility(pokemonWithoutHiddenAbility)).toBe(false);
});
