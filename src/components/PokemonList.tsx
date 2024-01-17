import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { PokemonType, SinglePokemonType } from "../interfaces/interface";
import { RootState } from "../store";
import "./styles.css";

export const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemons);
  const loading = useSelector((state: RootState) => state.loading);
  const singlePokemonDetails: SinglePokemonType | null = useSelector(
    (state: RootState) => state.pokemonDetails
  );
  const [pokemons, setPokemons] = useState(pokemonData);
  const [isOpen, setIsOpen] = useState(false);

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

  const handlePokemonClick = (pokemon: PokemonType) => {
    setIsOpen(true);
    dispatch({
      type: "pokemon/fetchPokemonDetails",
      payload: {
        url: pokemon.url,
      },
    });
  };

  return (
    <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemons?.map((pokemon: PokemonType, index) => (
          <li
            key={pokemon.name}
            onClick={() => handlePokemonClick(pokemon)}
            className="p-4 rounded bg-gray-200 cursor-pointer hover:bg-gray-300"
          >
            {index + " " + pokemon.name}
          </li>
        ))}
        {loading && <div>Loading...</div>}
      </ul>

      {/* Display modal or additional information */}
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className={`w-2/3`}
      >
        <h2>Pokemon Details : </h2>
        {singlePokemonDetails && (
          <div>
            <h2>{singlePokemonDetails.name}</h2>
            {singlePokemonDetails.abilities.map((ability, index) => (
              <div key={index}>
                ability no {index} :
                <span className="text-red-600"> {ability.ability.name}</span>
              </div>
            ))}
            <img
              src={singlePokemonDetails.sprites?.front_default}
              alt={singlePokemonDetails.name}
              className="mb-4"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};
