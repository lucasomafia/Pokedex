import { useEffect, useRef } from "react";
import StatBar from "./StatBar";

const stats = [["hp", "HP"], ["attack", "Attack"], ["defense", "Defense"], ["specialAttack", "Sp. Attack"], ["specialDefense", "Sp. Defense"], ["speed", "Speed"]];

export default function PokemonDetails({ pokemon, onFechar }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="pokemon-modal" aria-labelledby="pokemon-detail-title" onCancel={onFechar} onClick={e => {
    if (e.target !== e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) onFechar();
  }}>
    <button className="modal-close" aria-label="Fechar detalhes" onClick={onFechar} autoFocus>×</button>
    <img className="detail-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    <span className="card-id">#{String(pokemon.id).padStart(3, "0")}</span>
    <h2 id="pokemon-detail-title">{pokemon.name}</h2>
    <div className="card-tipos">{pokemon.types.map(type => <span key={type.id} className={`tipo tipo-${type.name.toLowerCase()}`}>{type.name}</span>)}</div>
    <div className="detail-stats">{stats.map(([key, label]) => <StatBar key={key} nome={label} valor={pokemon.stats[key]} />)}</div>
  </dialog>;
}
