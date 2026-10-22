function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="search"
      aria-label="Pesquisar Pokémon por nome ou número"
      placeholder="Pesquisar Pokémon..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}

export default SearchBar;