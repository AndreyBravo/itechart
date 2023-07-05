import { Link } from "react-router-dom";

export default function PokemonList({ pokemons }) {
  return (
    <ul className="pokemon_list">
      {pokemons?.map((item) => (
        <li key={item.name}>
          <Link to={`/app/${item.name}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
