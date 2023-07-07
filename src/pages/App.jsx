import { Link } from "react-router-dom";
import { useGetPokemonsQuery } from "../api/api";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { useState, useMemo } from "react";

export default function App() {
  const limit = 20;
  const [offset, setOffset] = useState();
  const { data = [] } = useGetPokemonsQuery([offset, limit]);

  useMemo(() => {
    const page = JSON.parse(localStorage.getItem("activePage"));
    if (page) {
      setOffset(limit * page);
    }
  }, []);

  function changeOffset(currentOffset) {
    setOffset(currentOffset);
  }

  return (
    <div className="app">
      <Link to="/">Go Login</Link>
      <div className="pokemon">
        <h1>Pokemon</h1>
        <PokemonList pokemons={data?.results} />
        <Pagination
          currentOffset={offset}
          limitPerPage={limit}
          count={data?.count}
          changeOffset={changeOffset}
        />
      </div>
    </div>
  );
}
