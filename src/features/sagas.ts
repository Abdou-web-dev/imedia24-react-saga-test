import { AxiosResponse } from "axios"; // Import AxiosResponse type
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchPokemonDetails, fetchPokemons } from "../api/pokemonApi";
import {
  FetchPokemonDetailsAction,
  FetchPokemonsAction,
  PokemonListResponse,
  SinglePokemonType,
} from "../interfaces/interface";
import { setLoading, setPokemonDetails, setPokemons } from "./pokemonSlice";

function* fetchPokemonsSaga(action: FetchPokemonsAction) {
  try {
    const { limit, offset } = action.payload || {}; // Assuming action.payload contains limit and offset

    yield put(setLoading(true));

    //  type annotation for response
    const response: AxiosResponse<PokemonListResponse> = yield call(
      fetchPokemons,
      limit,
      offset
    );
    console.log(response, "pokes List response");

    yield put(setPokemons(response.data.results));
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchPokemonDetailsSaga(action: FetchPokemonDetailsAction) {
  try {
    const { url } = action.payload || {};
    yield put(setLoading(true)); // updating the loading state to true before starting the data fetching operation, ensuring that the loading indicator is displayed during the fetch.

    const response: AxiosResponse<SinglePokemonType> = yield call(
      fetchPokemonDetails,
      url
    );
    console.log(response, "single poke response");

    // Dispatch action to set detailed information for the selected Pokémon
    yield put(setPokemonDetails(response.data));
  } catch (error) {
    console.error("Error fetching pokemon details:", error);
  } finally {
    yield put(setLoading(false)); // updating the loading state to false after the fetch, to indicate that the details data is ready
  }
}

function* watchFetchPokemons() {
  yield takeEvery("pokemon/fetchPokemons", fetchPokemonsSaga);
}

function* watchFetchPokemonDetails() {
  yield takeEvery("pokemon/fetchPokemonDetails", fetchPokemonDetailsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchPokemons(), watchFetchPokemonDetails()]);
}
