export default function PokemonList({ pokemons }) {
  return (
    <ul className="pokemon_list">
      {pokemons?.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
