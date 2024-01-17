import { FunctionComponent } from "react";
import Modal from "react-modal";
import closex from "../assets/img/closex.svg";
import { SinglePokemonType } from "../interfaces/interface";
import { CustomSpin } from "./CustomSpinner";

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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Poke Modal"
      style={{
        content: {
          width: "50%",
          margin: "0 auto",
        },
      }}
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
              <div className="ps-24">
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

                <div className="flex items-center justify-center my-10">
                  <hr className="w-60 border-t border-gray-300" />
                </div>

                <div className="flex flex-col poke-extra-details gap-2">
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
