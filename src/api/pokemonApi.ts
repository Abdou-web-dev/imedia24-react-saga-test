import axios from "axios";

const POKE_API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = (limit: number, offset: number): Promise<any> => {
  // return axios.get(`${POKE_API_URL}/pokemon`);
  return axios.get(`${POKE_API_URL}/pokemon?limit=${limit}&offset=${offset}`);
};

export const fetchPokemonDetails = (pokemonUrl: string): Promise<any> => {
  return axios.get(pokemonUrl);
};

// const api = {
//   fetchPokemons, // === fetchPokemons:fetchPokemons,
// };

// export default api;
