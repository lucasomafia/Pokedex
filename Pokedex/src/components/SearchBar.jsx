function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar Pokémon..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}

export default SearchBar;