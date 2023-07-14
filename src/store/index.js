import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/api";
import { favoritesSlice } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    array: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
