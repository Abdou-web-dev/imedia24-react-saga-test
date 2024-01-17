import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonType, SinglePokemonType } from "../interfaces/interface";

export interface PokemonState {
  pokemons: PokemonType[]; // Define the type based on the API response
  loading: boolean;
  pokemonDetails: SinglePokemonType | null; // Change to a single object or null if no details
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  pokemonDetails: null, // Add the pokemonDetails property
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonType[]>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPokemonDetails: (state, action: PayloadAction<SinglePokemonType>) => {
      state.pokemonDetails = action.payload;
    },
  },
});

export const { setPokemons, setLoading, setPokemonDetails } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
