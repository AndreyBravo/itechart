import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../api/api";

export default function PokemonByName() {
  const { name } = useParams();
  const { data } = useGetPokemonByNameQuery(name);

  return (
    <div className="pokemon_by_name">
      <h1>{name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          data?.id || 0
        }.png`}
        alt="img"
        className="pokemon_img"
      />
      <ul className="pokemon_description">
        {data?.stats.map((item, index) => (
          <li key={index}>
            <span>{item.stat.name}</span>
            <span>{item.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
