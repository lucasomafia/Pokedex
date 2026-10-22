import { useState } from "react";
import data from "./data/pokedex-data.json";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import PokemonList from "./components/PokemonList";


function App() {
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
  const [tela, setTela] = useState("pokedex");

  // Estado derivado: calculado a partir dos outros, não precisa de useState
  const pokemonsFiltrados = data.pokemon.filter((p) => {
    const textoOk =
      p.name.toLowerCase().includes(busca.toLowerCase()) ||
      String(p.id) === busca;

    const tipoOk =
      tipoSelecionado === "" || p.types.some((t) => t.name === tipoSelecionado);

    return textoOk && tipoOk;
  });

  return (
    <>
      <header>
        <h1>Pokédex</h1>
        <button onClick={() => setTela("pokedex")}>Pokédex</button>
        <button onClick={() => setTela("treinadores")}>Treinadores</button>
      </header>

      {tela === "pokedex" ? (
        <>
          <SearchBar busca={busca} setBusca={setBusca} />
          <Filters
            tipos={data.types}
            tipoSelecionado={tipoSelecionado}
            setTipoSelecionado={setTipoSelecionado}
          />
          <PokemonList pokemons={pokemonsFiltrados} onSelecionar={setPokemonSelecionado} />
        </>
      ) : (
        <p>Em breve...</p>
      )}
    </>
  );
}

export default App;