import {
  Middleware,
  ThunkAction,
  ThunkMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./features/pokemonSlice";
import rootSaga from "./features/sagas";

// Define state type
export type RootState = ReturnType<typeof rootReducer>;

// Define root action type
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>;

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Manually compose middleware
const middleware:
  | Middleware[]
  | (ThunkMiddleware | typeof sagaMiddleware)[]
  | any = [sagaMiddleware];

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => middleware,
  //  reducer: {
  //   pokemon: pokemonReducer, // Use the imported slice reducer directly
  // },
});

sagaMiddleware.run(rootSaga);

export default store;
