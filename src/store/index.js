import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/api";
import { pokemonImageApi } from "../api/imageApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonImageApi.reducerPath]: pokemonImageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(pokemonImageApi.middleware),
});
