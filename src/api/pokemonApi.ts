import axios, { AxiosResponse } from "axios";
import {
  PokemonListResponse,
  SinglePokemonType,
} from "../interfaces/interface";

const POKE_API_URL = "https://pokeapi.co/api/v2";

const fetchPokemons = (
  limit: number,
  offset: number
): Promise<AxiosResponse<PokemonListResponse>> => {
  const pokeResponse: Promise<AxiosResponse<PokemonListResponse>> = axios.get(
    `${POKE_API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  // pokeRequest is a Promise representing the asynchronous request being made to the Pokemon API using Axios. The response itself will be available once the request is fulfilled.
  return pokeResponse;
};

const fetchPokemonDetails = (
  pokemonUrl: string
): Promise<AxiosResponse<SinglePokemonType>> => {
  // for better readability
  const pokemonDetailsResponse: Promise<AxiosResponse<SinglePokemonType>> =
    axios.get(pokemonUrl);
  // console.log(pokemonDetailsResponse, "pokemonDetailsResponse");
  return pokemonDetailsResponse;
};

export { fetchPokemonDetails, fetchPokemons };
