export default function Header({ tela, setTela }) {
  return <header>
    <h1>Pokédex</h1>
    <button aria-current={tela === "pokedex" ? "page" : undefined} onClick={() => setTela("pokedex")}>Pokédex</button>{" "}
    <button aria-current={tela === "treinadores" ? "page" : undefined} onClick={() => setTela("treinadores")}>Treinadores</button>
  </header>;
}
