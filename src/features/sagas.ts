import { AxiosResponse } from "axios"; // Import AxiosResponse type
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchPokemons } from "../api/pokemonApi";

import { setLoading, setPokemons } from "./pokemonSlice";
interface FetchPokemonsAction {
  type: "pokemon/fetchPokemons";
  payload: {
    limit: 20;
    offset: 0;
  };
}

function* fetchPokemonsSaga(action: FetchPokemonsAction) {
  try {
    const { limit, offset } = action.payload || {}; // Assuming action.payload contains limit and offset

    yield put(setLoading(true));

    //  type annotation for response
    const response: AxiosResponse<any> = yield call(
      fetchPokemons,
      limit,
      offset
    );
    console.log(response, "response");

    yield put(setPokemons(response.data.results));
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  } finally {
    yield put(setLoading(false));
  }
}

function* watchFetchPokemons() {
  yield takeEvery("pokemon/fetchPokemons", fetchPokemonsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchPokemons()]);
}
