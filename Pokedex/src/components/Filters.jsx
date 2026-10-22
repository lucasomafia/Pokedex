function Filters({ tipos, tipoSelecionado, setTipoSelecionado }) {
  return (
    <select
      value={tipoSelecionado}
      onChange={(e) => setTipoSelecionado(e.target.value)}
    >
      <option value="">Todos os tipos</option>
      {tipos.map((tipo) => (
        <option key={tipo.id} value={tipo.name}>
          {tipo.name}
        </option>
      ))}
    </select>
  );
}

export default Filters;