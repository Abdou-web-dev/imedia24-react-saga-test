import { FunctionComponent } from "react";
import bugLogo from "../assets/img/bug.jpg";
import darkLogo from "../assets/img/dark.png";
import dragonLogo from "../assets/img/dragon.png";
import electricLogo from "../assets/img/electric.png";
import fairyLogo from "../assets/img/fairy.png";
import fightingLogo from "../assets/img/fighting.png";
import fireLogo from "../assets/img/fire.png";
import flyingLogo from "../assets/img/flying.png";
import ghostLogo from "../assets/img/ghost.png";
import grassLogo from "../assets/img/grass.png";
import groundLogo from "../assets/img/ground.png";
import iceLogo from "../assets/img/ice.png";
import normalLogo from "../assets/img/normal.png";
import poisonLogo from "../assets/img/poison.png";
import psychicLogo from "../assets/img/psychic.png";
import rockLogo from "../assets/img/rock.png";
import steelLogo from "../assets/img/steel.png";
import waterLogo from "../assets/img/water.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SinglePokemonType } from "../interfaces/interface";
import Divider from "./Divider";

interface PokeExtraDetailsProps {
  singlePokemonDetails: SinglePokemonType | null;
}

export const PokeExtraDetails: FunctionComponent<PokeExtraDetailsProps> = ({
  singlePokemonDetails,
}: PokeExtraDetailsProps) => {
  //This code defines a function called getPokeTypeLogo that takes a Pokemon type name as an argument and returns a string representing the corresponding logo image file path
  function getPokeTypeLogo(name: string): string {
    const logoMappings: Record<string, string> = {
      // Each key represents a Pokemon type (e.g., "fire," "water"), and the corresponding value is the path to the logo image for that type.
      fire: fireLogo,
      water: waterLogo,
      electric: electricLogo,
      grass: grassLogo,
      bug: bugLogo,
      dark: darkLogo,
      dragon: dragonLogo,
      fairy: fairyLogo,
      fighting: fightingLogo,
      flying: flyingLogo,
      ground: groundLogo,
      ice: iceLogo,
      normal: normalLogo,
      poison: poisonLogo,
      psychic: psychicLogo,
      rock: rockLogo,
      steel: steelLogo,
      ghost: ghostLogo,
      // Add more mappings for other types
    };

    return logoMappings[name] || "default.jpg";
  }
  // const loading = useSelector((state: RootState) => state.loading);
  const isMediumScreen = useMediaQuery(
    "(min-width: 400px) and (max-width: 830px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width: 0px) and (max-width: 600px)"
  );
  const isTinyScreen = useMediaQuery("(max-width: 430px)");
  const is_screen_less_800px = useMediaQuery("(max-width: 800px)");

  //
  if (singlePokemonDetails) {
    return (
      <>
        <div
          className={`ps-24 poke-extra-details-grp-0 ${
            isTinyScreen ? "ps-10" : ""
          }`}
        >
          <h2
            style={{ position: "relative", right: "2rem" }}
            className="italic text-2xl font-bold mb-2 flex items-center me-10"
          >
            <span className="text-5xl text-yellow-900 font-light">[</span>
            <span className="">{singlePokemonDetails.name}</span>
            <span className="text-5xl text-yellow-900 font-light">]</span>
          </h2>
          {singlePokemonDetails?.abilities?.map((ability, index) => (
            <div key={index} className="mb-2">
              <span className="roboto-medium text-gray-600">
                Ability {index + 1}:
              </span>
              <span className="roboto-light border-b-2 text-black-600 ml-2">
                {ability.ability.name}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        <div
          className={`ps-24 flex flex-col poke-extra-details-grp-1 gap-2 ${
            isTinyScreen ? "ps-10" : ""
          }`}
        >
          {singlePokemonDetails.id && (
            <div className="poke-info">
              <span className="roboto-medium-italic text-yellow-900 ">
                Id : &nbsp;
              </span>
              <span className="marhey-bold text-xl">
                {singlePokemonDetails.id}
              </span>
            </div>
          )}

          {singlePokemonDetails.weight && (
            <div className="poke-info">
              <span className="roboto-medium-italic text-yellow-900">
                Weight : &nbsp;
              </span>
              <span className="marhey-bold text-lg">
                {singlePokemonDetails.weight}
              </span>
            </div>
          )}

          {singlePokemonDetails.width && (
            <div className="poke-info">
              <span className="roboto-medium-italic text-yellow-900">
                Width : &nbsp;
              </span>
              <span className="marhey-bold text-xl">
                {singlePokemonDetails.width}
              </span>
            </div>
          )}

          {singlePokemonDetails.height && (
            <div className="poke-info">
              <span className="roboto-medium-italic text-yellow-900">
                Height : &nbsp;
              </span>
              <span className="marhey-bold text-lg">
                {singlePokemonDetails.height}
              </span>
            </div>
          )}

          {singlePokemonDetails.base_experience && (
            <div className="poke-info">
              <span className="roboto-medium-italic text-yellow-900">
                Experience : &nbsp;
              </span>
              <span className="marhey-bold text-xl">
                {singlePokemonDetails.base_experience}
              </span>
            </div>
          )}
        </div>

        <Divider />

        <div
          className={`poke-extra-details-grp-2 gap-2 ${
            singlePokemonDetails?.moves?.length <= 20
              ? "grp-2-flex"
              : "grp-2-grid"
          }
          ${isMediumScreen ? "grp-2-medium-screen" : ""}
          ${isSmallScreen ? "grp-2-small-screen" : ""}
          
          `}
        >
          <h3 className="text-center roboto-medium mb-2">Moves : </h3>
          <div
            className={`grp-2-inner ${
              singlePokemonDetails?.moves?.length <= 20
                ? "grp-2-inner-flex"
                : "grp-2-inner-grid"
            }`}
          >
            {singlePokemonDetails?.moves?.map((move, index) => (
              <div key={index} className="mb-2">
                <span className="move text-sky-950 roboto-light border-y-teal-300  ml-2">
                  <span className="sm-txt">{index} : </span>
                  <span className="text-sm text-blue-900">
                    {move?.move?.name}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div
          className={`poke-extra-details-grp-3 flex items-center justify-center flex-col`}
          // ${isSmallScreen ? "grp-2-small-screen" : ""}
        >
          <h3 className="text-center roboto-medium mb-2">Types : </h3>
          <div
            className={`grp-3-inner border-4 w-1/2 gap-2 p-6
                    `}
          >
            {singlePokemonDetails?.types?.map((type, index) => (
              <div
                key={index}
                className={`mb-2 flex justify-center flex-row items-center gap-4
                    ${
                      is_screen_less_800px
                        ? "grp-3-inner-less__800px flex flex-col gap-0"
                        : ""
                    }
                    `} //responsive design adjustment for screens less than 800 pixels wide
              >
                <span className="text-lg text-blue-900 roboto-bold">
                  {type?.type?.name}
                </span>
                {/* <VerticalDivider /> */}
                {/* bullet */}
                <span>&#8226;</span>
                <span>&#8226;</span>
                <span>&#8226;</span>

                <img
                  src={getPokeTypeLogo(type?.type?.name)}
                  width={`45px`}
                  alt="LOGO"
                />
                {index === 0 && is_screen_less_800px && (
                  <Divider smallDivider={true}></Divider>
                )}
                {/* The line {index === 0 && <Divider smallDivider={true}></Divider>} ensures that the <Divider> component is rendered only for the first type in the array. This helps create a visual separation between different types, but it's applied only once for the first type. */}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};
