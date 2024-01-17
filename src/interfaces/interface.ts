export interface SinglePokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  width: number;
  base_experience: number;
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      "official-artwork": {
        front_shiny: string;
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
    };
  }[];
  species: {
    name: string;
  };
}
export interface PokemonType {
  url: string;
  name: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}
export interface FetchPokemonsAction {
  type: "pokemon/fetchPokemons";
  payload: {
    limit: 20;
    offset: 0;
  };
}
export interface FetchPokemonDetailsAction {
  type: "pokemon/fetchPokemonDetails";
  payload: {
    url: string;
  };
}
