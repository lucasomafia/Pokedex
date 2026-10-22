import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons, onSelecionar }) {
  if (pokemons.length === 0) {
    return <p className="vazio">Nenhum Pokémon encontrado</p>;
  }

  return (
    <div className="lista">
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelecionar={onSelecionar} />
      ))}
    </div>
  );
}

export default PokemonList;