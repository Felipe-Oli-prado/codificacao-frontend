import React, { useState } from "react";

function CentroComando() {
  const [resultado, setResultado] = useState("");

  function VerificarAcesso() {
    let crachaValido = window.confirm("O crachá é válido? (OK para Sim, Cancelar para Não)");
    let digitalReconhecida = window.confirm("A digital foi reconhecida? (OK para Sim, Cancelar para Não)");

    if (crachaValido && digitalReconhecida) {
      setResultado("Acesso liberado ao Centro de Comando");
    } else if (!crachaValido && digitalReconhecida) {
      setResultado("Crachá inválido. Dirija-se à recepção");
    } else if (crachaValido && !digitalReconhecida) {
      setResultado("Falha na digital. Tente novamente ou chame o suporte");
    } else {
      setResultado("Acesso negado. Verifique sua identificação.");
    }
  }

  return (
    <div>
      <h2>Acesso ao Centro de Comando</h2>
      <button onClick={VerificarAcesso}>Verificar Acesso</button>

      {resultado && (
        <p>{resultado}</p>
      )}
    </div>
  );
}

export default CentroComando;