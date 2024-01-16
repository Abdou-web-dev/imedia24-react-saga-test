import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust the import path based on your project structure

export const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemons);
  const loading = useSelector((state: RootState) => state.loading);
  //   const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [pokemons, setPokemons] = useState(pokemonData);

  useEffect(() => {
    // Initial fetch when the component mounts
    dispatch({
      type: "pokemon/fetchPokemons",
      payload: {
        limit: 20,
        offset: 0,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isBottom && !loading) {
        // Fetch next set of pokemons
        dispatch({
          type: "pokemon/fetchPokemons",
          payload: {
            limit: 20,
            offset: pokemons.length,
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, dispatch, pokemons.length]);

  useEffect(() => {
    // Update the displayed pokemons when pokemonData changes
    setPokemons(pokemonData);
  }, [pokemonData]);

  return (
    <div>
      <ul>
        {pokemons?.map((pokemon, index) => (
          <li key={pokemon.name}>{index + "  " + pokemon.name}</li>
        ))}
        {loading && <div>Loading...</div>}
      </ul>
    </div>
  );
};
