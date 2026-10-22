import { useState } from "react";
import data from "./data/pokedex-data.json";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainerList from "./components/TrainerList";
import Header from "./components/Header";


function App() {
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [pokemonSelecionado, setPokemonSelecionado] = useState(null);
  const [tela, setTela] = useState("pokedex");

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
      <Header tela={tela} setTela={setTela} />
      <main>
      {tela === "pokedex" ? (
        <>
          <SearchBar busca={busca} setBusca={setBusca} />
          <Filters
            tipos={data.types.filter(tipo => tipo.name.toLowerCase() !== "typeless")}
            tipoSelecionado={tipoSelecionado}
            setTipoSelecionado={setTipoSelecionado}
          />
          <PokemonList pokemons={pokemonsFiltrados} onSelecionar={setPokemonSelecionado} />
        </>
      ) : (
        <TrainerList treinadores={data.trainers} pokemons={data.pokemon} onSelecionar={setPokemonSelecionado} />
      )}
      </main>
      {pokemonSelecionado && <PokemonDetails pokemon={pokemonSelecionado} onFechar={() => setPokemonSelecionado(null)} />}
    </>
  );
}

export default App;