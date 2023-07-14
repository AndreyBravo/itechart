import { Link } from "react-router-dom";
import { useGetPokemonsQuery } from "../api/api";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { useEffect, useState, useMemo } from "react";

export default function App() {
  const [typeList, setTypeList] = useState("list");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState();
  const { data = [] } = useGetPokemonsQuery([offset, limit]);

  useEffect(() => {
    const page = JSON.parse(localStorage.getItem("activePage"));
    setOffset(limit * page);
  }, [limit]);

  useMemo(() => {
    const limitPerPage = JSON.parse(localStorage.getItem("limit"));
    if (limitPerPage) {
      setLimit(limitPerPage);
    }
  }, []);

  useMemo(() => {
    const typeName = JSON.parse(localStorage.getItem("type"));
    if (typeName) {
      setTypeList(typeName);
    }
  }, []);

  function changeOffset(currentOffset) {
    setOffset(currentOffset);
  }

  function changeLimit(currentlimit) {
    setLimit(currentlimit);
  }

  function changeTypeList(currentType) {
    setTypeList(currentType);
  }

  return (
    <div className="app">
      <Link className="link_login" to="/">
        Go Login
      </Link>
      <Link className="link_login" to="/favorites">
        Go Favorites
      </Link>
      <div className="pokemon">
        <h1>Pokemon</h1>
        <PokemonList typeItem={typeList} pokemons={data?.results} />
        <Pagination
          currentOffset={offset}
          limitPerPage={limit}
          count={data?.count}
          typeOfList={typeList}
          changeOfTypeList={changeTypeList}
          changeOffset={changeOffset}
          changeOfLimit={changeLimit}
        />
      </div>
    </div>
  );
}
