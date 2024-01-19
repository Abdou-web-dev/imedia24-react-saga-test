import { FunctionComponent, MouseEvent, useEffect, useRef } from "react";
import pokeballImage from "../assets/img/pokeball.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { PokemonType } from "../interfaces/interface";

interface PokemonProps {
  pokemon: PokemonType;
  handlePokemonClick: (pokemon: PokemonType, index: number) => void;
  index: number;
  isSelected: boolean;
  setSelectedPokemonIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isOpen: boolean;
}

export const SinglePokemon: FunctionComponent<PokemonProps> = ({
  pokemon,
  handlePokemonClick,
  index,
  isSelected,
  isOpen,
  setSelectedPokemonIndex,
}: PokemonProps) => {
  const isMobileScreen = useMediaQuery("(max-width: 640px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 350px)");
  const pokemonRef = useRef<HTMLLIElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // the combined condition is checking if the click happened outside the Pokemon item when the Pokemon item is rendered, and the modal is not open.
    if (
      pokemonRef.current &&
      !pokemonRef.current.contains(event.target as Node) &&
      !isOpen
    ) {
      // Clicked outside of the Pokemon item, remove the selection
      setSelectedPokemonIndex(null);
    }
  };

  useEffect(() => {
    const listener: any = (event: MouseEvent) => handleClickOutside(event);

    // Add event listener when the component mounts
    document.addEventListener("mousedown", listener);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handleClickOutside]);
  // console.log(isOpen, "isOpen from SinglePokemon component");

  return (
    <li
      data-testid="poke-elem-test"
      className={`single-poke p-8 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all group relative ${
        isMobileScreen ? "poke-mobile-screen" : ""
      } 
      ${isVerySmallScreen ? "poke-tiny-screen" : ""} 
      ${isSelected ? "border-2 border-blue-950 transition-none" : ""}`} //to ensure that the border changes happen without any transition effect.
      onClick={() => handlePokemonClick(pokemon, index)}
      ref={pokemonRef}
    >
      {isMobileScreen && (
        // Display Pokeball image for mobile screens
        <img
          src={pokeballImage}
          width={`40px`}
          alt="Pokeball"
          className="absolute top-2 right-2"
        />
      )}
      {/* Hidden Pokeball image for larger screens*/}
      <img
        src={pokeballImage}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isMobileScreen ? "hidden" : "hidden group-hover:block"
        }`}
        width={`40px`}
        alt="Pokeball"
      />
      {/* Content with index and name */}
      <div
        className={`poke-inner flex items-center justify-between mb-2 ${
          isMobileScreen ? "" : "group"
        }`}
      >
        <span
          className={`text-lg font-semibold ${
            isMobileScreen ? "" : "group-hover:opacity-0"
          }`}
        >
          {index + 1} &nbsp;
          <span>:</span>
        </span>

        <span
          className={`text-gray-500 ${
            isMobileScreen ? "" : "group-hover:opacity-0"
          } text-lg`}
        >
          {pokemon.name.length > 10
            ? `${pokemon.name.slice(0, 10).concat("...")}`
            : pokemon.name}
        </span>
      </div>
    </li>
  );
};
