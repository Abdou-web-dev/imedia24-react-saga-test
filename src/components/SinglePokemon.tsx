import { FunctionComponent } from "react";
import pokeballImage from "../assets/img/pokeball.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { PokemonType } from "../interfaces/interface";

interface PokemonProps {
  pokemon: PokemonType;
  handlePokemonClick: (pokemon: PokemonType) => void;
  index: number;
}

export const SinglePokemon: FunctionComponent<PokemonProps> = ({
  pokemon,
  handlePokemonClick,
  index,
}: PokemonProps) => {
  const isMobileScreen = useMediaQuery("(max-width: 640px)");

  return (
    <li
      className={`single-poke p-8 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all group relative ${
        isMobileScreen ? "poke-mobile-screen" : ""
      }`}
      onClick={() => handlePokemonClick(pokemon)}
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
