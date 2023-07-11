import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/api";
import { useGetImageQuery } from "../api/imageApi";
import { useMemo } from "react";

export default function PokemonItem({ typeItem, item }) {
  const { data } = useGetPokemonByNameQuery(item.name);
  const { error } = useGetImageQuery(data?.id);

  const srcUrl = useMemo(() => {
    if (error?.originalStatus != 200) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${0}.png`;
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;
    }
  }, [error]);

  const List = () => {
    return (
      <li className="list_item" key={item.name}>
        <Link to={`/app/${item.name}`}>{item.name}</Link>
      </li>
    );
  };

  const Card = () => {
    return (
      <li className="pokemon_card" key={item.name}>
        <Link to={`/app/${item.name}`}>
          <img src={srcUrl} alt="img" className="pokemon_img" />
          <h1>{item.name}</h1>
        </Link>
      </li>
    );
  };

  return <>{typeItem == "card" ? <Card /> : <List />}</>;
}
