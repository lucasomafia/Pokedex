function StatBar({ nome, valor }) {
  const porcentagem = (valor / 255) * 100; // 255 é o maior stat possível

  return (
    <div className="stat">
      <span>{nome}</span>
      <div className="barra-fundo">
        <div className="barra" style={{ width: porcentagem + "%" }}></div>
      </div>
      <span>{valor}</span>
    </div>
  );
}

export default StatBar;