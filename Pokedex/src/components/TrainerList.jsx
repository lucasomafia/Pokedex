export default function TrainerList({ treinadores, pokemons, onSelecionar }) {
  const porId = new Map(pokemons.map(pokemon => [pokemon.id, pokemon]));
  return <section aria-label="Treinadores" className="trainer-list">{treinadores.map(trainer => <article className="trainer-card" key={trainer.id}>
    <span className="eyebrow">Treinador #{String(trainer.id).padStart(2, "0")}</span><h2>{trainer.name}</h2>
    <p className="badges">★ {trainer.badges} {trainer.badges === 1 ? "insígnia" : "insígnias"}</p>
    <ul className="trainer-team">{trainer.pokemonIds.map((id, index) => {
      const pokemon = porId.get(id);
      return pokemon ? <li key={`${id}-${index}`}><button onClick={() => onSelecionar(pokemon)} aria-label={`Ver detalhes de ${pokemon.name}`}><img loading="lazy" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" /><span>{pokemon.name}</span></button></li> : null;
    })}</ul>
  </article>)}</section>;
}
