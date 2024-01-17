import { FunctionComponent } from "react";
import pokeballImage from "../assets/img/pokeball.svg";
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
  return (
    <li
      onClick={() => handlePokemonClick(pokemon)}
      className="p-8 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all group relative"
    >
      {/* Hidden Pokeball image */}
      <img
        src={pokeballImage}
        width={`40px`}
        alt="Pokeball"
        className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      {/* Content with index and name */}
      <div className="flex items-center justify-between mb-2 group">
        <span className="text-lg font-semibold group-hover:opacity-0">
          {index + 1} &nbsp;
          <span>:</span>
        </span>

        <span className="text-gray-500 group-hover:opacity-0 text-lg">
          {pokemon.name.length > 10
            ? `${pokemon.name.slice(0, 10).concat("...")}`
            : pokemon.name}
        </span>
      </div>
    </li>
  );
};
