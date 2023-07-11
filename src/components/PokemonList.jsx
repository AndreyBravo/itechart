import { Link } from "react-router-dom";
import PokemonItem from "./PokemonItem";

export default function PokemonList({ typeItem, pokemons }) {
  return (
    <ul className={`pokemon_list ${typeItem == "card"? "pokemon_list_cards":""}`}>
      {pokemons?.map((item) => (
        <PokemonItem typeItem={typeItem} key={item.name} item={item} />
      ))}
    </ul>
  );
}
