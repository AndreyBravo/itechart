import { Link } from "react-router-dom";
import PokemonItem from "./PokemonItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/favoritesSlice";

export default function PokemonList({ typeItem, pokemons }) {
  const [favorites, setFavorites] = useState(true);
  const dispatch = useDispatch();

  function changeFavorites(isFav, name) {
    if (isFav) {
      dispatch(addItem(name));
    } else {
      dispatch(removeItem(name));
    }
    setFavorites(!favorites);
  }
  return (
    <ul
      className={`pokemon_list ${
        typeItem == "card" ? "pokemon_list_cards" : ""
      }`}
    >
      {pokemons?.map((item) => (
        <PokemonItem
          favoritesItem={(isFavorites) =>
            changeFavorites(isFavorites, item.name)
          }
          typeItem={typeItem}
          key={item.name}
          item={item}
        />
      ))}
    </ul>
  );
}
