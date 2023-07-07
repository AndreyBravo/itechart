import { Link } from "react-router-dom";
import { useGetPokemonsQuery } from "../api/api";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { useEffect, useState, useMemo } from "react";

export default function App() {
  const [limit, setLimit] = useState();
  const [offset, setOffset] = useState();
  const { data = [] } = useGetPokemonsQuery([offset, limit]);

  useEffect(() => {
    const page = JSON.parse(localStorage.getItem("activePage"));
    if (page) {
      setOffset(limit * page);
    }
  }, []);

  useEffect(() => {
    const limitPerPage = JSON.parse(localStorage.getItem("limit"));
    if (limitPerPage) {
      setLimit(limitPerPage);
    }
  }, []);

  function changeOffset(currentOffset) {
    setOffset(currentOffset);
  }
  function changeLimit(currentlimit) {
    setLimit(currentlimit);
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
          changeOfLimit={changeLimit}
        />
      </div>
    </div>
  );
}
