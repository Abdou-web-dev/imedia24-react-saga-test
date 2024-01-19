// // pokemonUtils.test.ts

// import { waitFor } from "@testing-library/react";
// import axios from "axios";
// import { runSaga } from "redux-saga";
// import { setPokemonDetails } from "../src/features/pokemonSlice"; // Import the action creators
// import { watchFetchPokemonDetails } from "../src/features/sagas";
// import { SinglePokemonType } from "../src/interfaces/interface";
// import { hasHiddenAbility } from "../src/utils/PokemonUtils";
// // import { hasHiddenAbility } from "../utils/pokemonUtils";

// jest.mock("axios");

// describe("Pokemon Saga", () => {
//   it("fetches a single Pokemon and checks for hidden ability", async () => {
//     // Sample data structure adhering to SinglePokemonType
//     const dynamicPokemonData: SinglePokemonType = {
//       id: 54,
//       name: "psyduck",
//       height: 8,
//       weight: 69,
//       width: 196,
//       base_experience: 64,
//       sprites: {
//         front_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
//         back_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
//         other: {
//           "official-artwork": {
//             front_shiny:
//               "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/54.png",
//             front_default:
//               "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
//           },
//         },
//       },
//       types: [
//         {
//           type: {
//             name: "water",
//           },
//         },
//       ],
//       abilities: [
//         {
//           ability: {
//             name: "damp",
//           },
//           is_hidden: false,
//         },
//         {
//           ability: {
//             name: "cloud-nine",
//           },
//           is_hidden: false,
//         },
//         {
//           ability: {
//             name: "swift-swim",
//           },
//           is_hidden: true,
//         },
//       ],
//       held_items: [], //empty array
//       species: {
//         name: "psyduck",
//       },
//       moves: [
//         {
//           move: {
//             name: "mega-punch",
//             url: "https://pokeapi.co/api/v2/move/5/",
//           },
//         },
//       ],
//     };

//     // Mocking axios:  mocking the axios.get method to simulate a successful API response with dynamicPokemonData.
//     (axios.get as jest.Mock).mockResolvedValueOnce({
//       data: dynamicPokemonData,
//     });

//     const dispatched: any[] = [];

//     // Run the saga
//     await runSaga(
//       {
//         dispatch: (action) => dispatched.push(action),
//       },
//       watchFetchPokemonDetails
//     ).toPromise();

//     // Use waitFor to wait for asynchronous actions to complete
//     await waitFor(() => {
//       // Assert the dispatched actions
//       expect(dispatched).toContainEqual(setPokemonDetails(dynamicPokemonData));
//       expect(hasHiddenAbility(dynamicPokemonData)).toBe(true);
//     });
//   }, 20000);

//   // Add more test cases as needed
// });

// // it("fetches a single Pokemon and checks for hidden ability", async () => {
// //   // ... test code
// // }, 20000); // Increase the timeout to 20000 ms (20 seconds)
