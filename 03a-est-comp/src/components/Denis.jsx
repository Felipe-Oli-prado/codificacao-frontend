import React, { useState } from "react";

function TransporteParque() {
  const [resultado, setResultado] = useState("");

  function VerificarTransporte() {
    let emManutencao = window.confirm("O sistema está em manutenção? (OK para Sim, Cancelar para Não)");
    let emergenciaAtiva = window.confirm("Há alguma emergência ativa no parque? (OK para Sim, Cancelar para Não)");

    if (!emManutencao && !emergenciaAtiva) {
      setResultado("Transporte liberado para uso.");
    } else {
      setResultado("Transporte indisponível por motivo de segurança.");
    }
  }

  return (
    <div>
      <h2>Sistema de Transporte Interno</h2>
      <button onClick={VerificarTransporte}>Verificar Transporte</button>

      {resultado && (
        <p>{resultado}</p>
      )}
    </div>
  );
}

export default TransporteParque;