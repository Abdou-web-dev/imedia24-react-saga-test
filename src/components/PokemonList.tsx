import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { SinglePokemon } from "../components/SinglePokemon";
import { PokemonType, SinglePokemonType } from "../interfaces/interface";
import { RootState } from "../store";
import { CustomSpin } from "./CustomSpinner";
import { PokemonModal } from "./PokemonModal";
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
  const [loadingVisible, setLoadingVisible] = useState(false);
  //loading state retrieved from the Redux store (through useSelector) is used to manage the loading state related to data fetching from the POKE API,
  // and loadingVisible state variable is used locally in this component to manage the visibility of the loading spinner separately.

  useEffect(() => {
    setLoadingVisible(true); // Set loadingVisible to true during initial fetch

    // Introducing a delay of 800 milliseconds before fetching initial pokemons
    const initialFetchTimeout = setTimeout(() => {
      dispatch({
        type: "pokemon/fetchPokemons",
        payload: {
          limit: 50,
          offset: 0,
        },
      });
      setLoadingVisible(false);
    }, 800);

    // Cleanup the timeout when the component unmounts or when the fetch is successful
    return () => {
      clearTimeout(initialFetchTimeout);
    };
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      const isBottom = windowHeight + scrollY + 1 >= bodyHeight;
      // This condition is used to determine if the user has scrolled to the bottom of the page.

      if (isBottom && !loadingVisible && !loading) {
        setLoadingVisible(true);

        // Fetch next set of pokemons
        setTimeout(() => {
          // Fetch next set of pokemons
          dispatch({
            type: "pokemon/fetchPokemons",
            payload: {
              limit: 20,
              offset: pokemons.length,
            },
          });
          setLoadingVisible(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, dispatch, pokemons.length]);

  useEffect(() => {
    // Update the displayed pokemons when pokemonData changes
    const uniquePokemons = removeDuplicatesByName(pokemonData);
    setPokemons(uniquePokemons);
  }, [pokemonData]);

  // Function to remove duplicates from the array based on Pokemon names
  // the function iterates through the pokemonArray, keeping track of unique names using the uniquePokemonNames object. It uses the filter function to create a new array containing only the first occurrence of each unique Pokemon name.
  const removeDuplicatesByName = (
    pokemonArray: PokemonType[]
  ): PokemonType[] => {
    const uniquePokemonNames: Record<string, boolean> = {};

    // Use filter to keep only the first occurrence of each unique name
    const uniquePokemons = pokemonArray.filter((pokemon) => {
      if (!uniquePokemonNames[pokemon.name]) {
        //This condition checks if the current Pokemon's name (pokemon.name) is not present as a key in the uniquePokemonNames object.
        uniquePokemonNames[pokemon.name] = true; // true serves as a placeholder to indicate the presence of the Pokemon name in the set. //The ! (logical NOT) operator negates the result, so the condition is true when the name is not in the object.
        return true;
      }
      return false;
    });

    return uniquePokemons;
  };

  const handlePokemonClick = (pokemon: PokemonType) => {
    setIsOpen(true);
    dispatch({
      type: "pokemon/fetchPokemonDetails",
      payload: {
        url: pokemon.url,
      },
    });
  };

  useEffect(() => {
    // Set the app element for react-modal
    Modal.setAppElement("#root");
    //react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened.
  }, []);

  return (
    <div className="pokemon-list">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {pokemons?.map((pokemon: PokemonType, index) => (
          <SinglePokemon
            key={pokemon.name}
            {...{ handlePokemonClick, pokemon, index }}
          ></SinglePokemon>
        ))}
      </ul>

      {loadingVisible && (
        <div className="text-center my-8">
          <CustomSpin />
        </div>
      )}

      <PokemonModal {...{ isOpen, loading, setIsOpen, singlePokemonDetails }} />
    </div>
  );
};
