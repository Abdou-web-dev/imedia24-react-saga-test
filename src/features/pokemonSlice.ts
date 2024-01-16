import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemons: any[]; // Define the type based on the API response
  loading: boolean;
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<any>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
      // state.pokemons = action.payload; // Replace the existing list

      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setPokemons, setLoading } = pokemonSlice.actions;

export default pokemonSlice.reducer;
