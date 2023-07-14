import { Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import PSelect from "../components/PSelect";

export default function FavoritesPage() {
  const [typeList, setTypeList] = useState("list");
  const array = useSelector((state) => state.array);
  const optionsType = ["card", "list"];

  useMemo(() => {
    const typeName = JSON.parse(localStorage.getItem("type"));
    if (typeName) {
      setTypeList(typeName);
    }
  }, []);

  const pokemons = useMemo(() => array.map((name) => ({ name })), []);

  function changeTypeList(type) {
    setTypeList(type);
  }

  return (
    <div className="favorites_page">
      <Link className="link_login" to="/app">
        Go App
      </Link>
      <div className="pokemon">
        <h1>Favorites Page</h1>
        <PokemonList typeItem={typeList} pokemons={pokemons} />
        <div className="select_container">
          <PSelect
            options={optionsType}
            nameSelected="type"
            curruntSelected={typeList}
            changeSelect={(type) => changeTypeList(type)}
          />
          <label>limit per page</label>
        </div>
      </div>
    </div>
  );
}
