import StatBar from "./StatBar";

function PokemonCard({ pokemon, onSelecionar }) {
  const s = pokemon.stats;
  const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="card" onClick={() => onSelecionar(pokemon)}>
      <img src={imagem} alt={pokemon.name} />

      <span className="card-id">#{pokemon.id}</span>
      <h2>{pokemon.name}</h2>

      <div className="card-tipos">
        {pokemon.types.map((t) => (
          <span key={t.id} className={"tipo tipo-" + t.name.toLowerCase()}>
            {t.name}
          </span>
        ))}
      </div>

      <StatBar nome="HP" valor={s.hp} />
      <StatBar nome="Attack" valor={s.attack} />
      <StatBar nome="Defense" valor={s.defense} />
      <StatBar nome="Sp. Attack" valor={s.specialAttack} />
      <StatBar nome="Sp. Defense" valor={s.specialDefense} />
      <StatBar nome="Speed" valor={s.speed} />
    </div>
  );
}

export default PokemonCard;