import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonImageApi = createApi({
  reducerPath: "pokemonImageApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  }),
  endpoints: (builder) => ({
    getImage: builder.query({
      query: (id) => `${id}.png`,
    }),
  }),
});

export const { useGetImageQuery } = pokemonImageApi;
