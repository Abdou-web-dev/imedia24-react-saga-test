import { FunctionComponent } from "react";
import Modal from "react-modal";
import closex from "../assets/img/closex.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SinglePokemonType } from "../interfaces/interface";
import { CustomSpin } from "./CustomSpinner";
import Divider from "./Divider";
import { PokeExtraDetails } from "./PokeExtraDetails";
// I have separated concerns into smaller components, such as CustomSpin, Divider, and PokeExtraDetails, making the code more organized and easier to understand.
// This modular approach makes it simpler to maintain and update each part of the modal independently.
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
  const isMobileScreen = useMediaQuery("(max-width: 640px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 310px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 640px) and (max-width: 1070px)"
  );

  return (
    <Modal
      data-testid="poke-modal-test"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Poke Modal"
      style={{
        content: {
          width: isMobileScreen
            ? "83%"
            : isMediumScreen
            ? "65%"
            : isVerySmallScreen
            ? ""
            : "50%", //: largerScreen
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
        {/* modal close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="close-x-btn absolute top-2 right-2 cursor-pointer"
        >
          <img width={`25px`} src={closex} alt="" />
        </button>
        <>
          {!loading && singlePokemonDetails && (
            <div>
              <h2 className="text-center text-2xl mb-4 font-bold">
                Pokemon Details :
              </h2>
              <div className="poke-details-section">
                <PokeExtraDetails {...{ singlePokemonDetails }} />
              </div>

              <Divider />

              <div className="poke-image flex justify-center">
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
                />
              </div>
            </div>
          )}
        </>
      </div>
    </Modal>
  );
};
// singlePokemonDetails.sprites?.other["official-artwork"].front_shiny
// src={singlePokemonDetails.sprites?.front_default} // low quality image
