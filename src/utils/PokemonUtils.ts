import { AnotherPokemonType } from "../interfaces/interface";

//  a simple utility function that checks if a Pokémon is a fire type. Then, I'll write a unit test for this utility function.
export const isFireType: (
  pokemon: AnotherPokemonType
) => boolean | undefined = (pokemon: AnotherPokemonType) => {
  let isFire = pokemon?.types?.some((type) => type.type.name === "fire");
  return isFire;
};

export const hasHiddenAbility: (
  pokemon: AnotherPokemonType
) => boolean | undefined = (pokemon: AnotherPokemonType) => {
  return pokemon?.abilities?.some((ability) => ability.is_hidden);
};

// const hasHiddenAbility: (
//   pokemon: AnotherPokemonType
// ) => boolean | undefined = (pokemon: AnotherPokemonType) => {
//   const isHidden = pokemon?.abilities?.some((ability) => {
//     return ability.is_hidden === true;
//   });
//   return isHidden;
// };
