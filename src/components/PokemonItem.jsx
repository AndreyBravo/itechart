import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PokemonItem({ typeItem, item, favoritesItem }) {
  const { data } = useGetPokemonByNameQuery(item.name);
  const [isFavorites, setIsFavorites] = useState(false);
  const array = useSelector((state) => state.array);

  const currentUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;

  useEffect(() => {
    favoritesItem(isFavorites);
  }, [isFavorites]);

  useEffect(() => {
    if (array.includes(item.name)) {
      setIsFavorites(true);
    }
  }, []);

  function handleError(event) {
    event.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${0}.png`;
    event.currentTarget.className = "error";
  }

  function handleFavorites(name) {
    setIsFavorites(!isFavorites);
  }

  const List = () => {
    return (
      <li className="list_item"  key={item.name}>
        <Link to={`/app/${item.name}`}>{item.name}</Link>
        <div className="btn_favorites" onClick={() => handleFavorites(item.name)}>
          {isFavorites ? <div>&#9733;</div> : <div> &#10032;</div>}
        </div>
      </li>
    );
  };

  const Card = () => {
    return (
      <li className="pokemon_card" key={item.name}>
        <div
          className="btn_favorites"
          onClick={() => handleFavorites(item.name)}
        >
          {isFavorites ? <div>&#9733;</div> : <div> &#10032;</div>}
        </div>
        <Link to={`/app/${item.name}`}>
          <img
            src={currentUrl}
            onError={handleError}
            alt="pokemon image"
            className="pokemon_img"
          />

          <h2>{item.name}</h2>
        </Link>
      </li>
    );
  };

  return <>{typeItem == "card" ? <Card /> : <List />}</>;
}
