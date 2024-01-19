import { Middleware, ThunkMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import rootReducer from "./features/pokemonSlice";
import rootSaga from "./features/sagas";

// Define state type
export type RootState = ReturnType<typeof rootReducer>;

// Create Saga middleware
const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

// Manually compose middleware
const middleware:
  | Middleware[]
  | (ThunkMiddleware | typeof sagaMiddleware)[]
  | any = [sagaMiddleware];

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: () => middleware,
  //`middleware` field must be a callback
});

sagaMiddleware.run(rootSaga);

export default store;
