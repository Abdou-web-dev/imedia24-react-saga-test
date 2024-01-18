import { FunctionComponent } from "react";
import Modal from "react-modal";
import bugLogo from "../assets/img/bug.jpg";
import closex from "../assets/img/closex.svg";
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
import { CustomSpin } from "./CustomSpinner";
import Divider from "./Divider";
import { VerticalDivider } from "./VerticalDivider";
// import waterLogo from "../assets/img/.png";

interface PokemonModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  singlePokemonDetails: SinglePokemonType | null;
}

export const PokemonModal: FunctionComponent<PokemonModalProps> = ({
  isOpen,
  setIsOpen,
  loading,
  singlePokemonDetails,
}: PokemonModalProps) => {
  //
  function getPokeTypeLogo(name: string): string {
    const logoMappings: Record<string, string> = {
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
  const isMobileScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 640px) and (max-width: 1070px)"
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Poke Modal"
      style={{
        content: {
          width: isMobileScreen ? "83%" : isMediumScreen ? "65%" : "50%", //: largerScreen
          margin: "0 auto",
        },
      }}
      // className={isMobileScreen ? "modal-small-screen" : ""}
    >
      <div className="modal-content">
        {/* Show a spinner or loading indicator while waiting for data */}
        {loading && (
          <div className="text-center">
            <CustomSpin />
          </div>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="close-x-btn absolute top-2 right-2 cursor-pointer"
        >
          {/* <span className="block close-x">&times;</span> */}
          <img width={`25px`} src={closex} alt="" />
          {/* Close symbol (X) */}
        </button>
        <>
          {!loading && singlePokemonDetails && (
            <div>
              <h2 className="text-center text-2xl mb-4 font-bold">
                Pokemon Details :
              </h2>
              <div className="poke-details-section">
                <div className="ps-24 poke-extra-details-grp-0">
                  <h2
                    style={{ position: "relative", right: "2rem" }}
                    className="italic text-2xl font-bold mb-2 flex items-center me-10"
                  >
                    <span className="text-5xl text-yellow-900 font-light">
                      [
                    </span>
                    <span className="">{singlePokemonDetails.name}</span>
                    <span className="text-5xl text-yellow-900 font-light">
                      ]
                    </span>
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
                <div className="ps-24 flex flex-col poke-extra-details-grp-1 gap-2">
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
                  }`}
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
                  className={`poke-extra-details-grp-4 flex items-center justify-center flex-col`}
                >
                  <h3 className="text-center roboto-medium mb-2">Types : </h3>
                  <div className={`grp-4-inner border-4 w-1/2 gap-2  p-6`}>
                    {singlePokemonDetails?.types?.map((type, index) => (
                      <div
                        key={index}
                        className="mb-2 flex justify-center flex-row items-center gap-10"
                      >
                        <span className="text-sm text-blue-900">
                          {type?.type?.name}
                        </span>
                        <VerticalDivider />
                        <img
                          src={getPokeTypeLogo(type?.type?.name)}
                          // src={bug}
                          // style={{ backgroundColor: "none" }}
                          width={`45px`}
                          alt="LOGO"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                {/* Centered container for the image */}
                <img
                  width={`260px`}
                  src={
                    singlePokemonDetails.sprites?.other["official-artwork"]
                      .front_default
                  }
                  alt={singlePokemonDetails.name}
                  className="mb-4"
                  style={{ imageRendering: "auto" }}
                  // singlePokemonDetails.sprites?.other["official-artwork"].front_shiny
                  // src={singlePokemonDetails.sprites?.front_default} // low quality image
                />
              </div>
            </div>
          )}
        </>
      </div>
    </Modal>
  );
};
