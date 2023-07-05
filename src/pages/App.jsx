import { Link } from "react-router-dom";
import { useGetPokemonsQuery } from "../api/api";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function App() {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const { data, error } = useGetPokemonsQuery([offset, limit]);

  function changeOffset(currentOffset){
    setOffset(currentOffset);
  };

  return (
    <div className="app">
      <div className="pokemon">
        <h1>Pokemon</h1>
        <PokemonList pokemons={data?.results} />
        <Pagination currentOffset={offset} limitPerPage={limit} count={data?.count} changeOffset={changeOffset} />
        <Link to="/">Go Login</Link>
      </div>
    </div>
  );
}
