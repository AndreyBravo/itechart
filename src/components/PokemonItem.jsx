import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/api";

export default function PokemonItem({ typeItem, item }) {
  const { data } = useGetPokemonByNameQuery(item.name);

  const currentUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;

  function handleLoad(event) {
    if (event.currentTarget.className !== "error") {
      event.currentTarget.className = "success";
    }
  }

  function handleError(event) {
    event.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${0}.png`;
    event.currentTarget.className = "error";
  }

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
          <img
            src={currentUrl}
            onLoad={handleLoad}
            onError={handleError}
            alt="pokemon image"
            className="pokemon_img"
          />
          <h1>{item.name}</h1>
        </Link>
      </li>
    );
  };

  return <>{typeItem == "card" ? <Card /> : <List />}</>;
}
