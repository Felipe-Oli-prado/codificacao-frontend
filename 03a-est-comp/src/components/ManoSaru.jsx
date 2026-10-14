import React, { useState } from "react";

function SarumanoPalco() {
  const [resultado, setResultado] = useState("");

  function VerificarEntrada() {
   
    let somFuncionando = window.confirm("O sistema de som está a funcionar? (OK para Sim, Cancelar para Não)");
    let figurinoCompleto = window.confirm("O figurino está completo (com chapéu)? (OK para Sim, Cancelar para Não)");

    if (somFuncionando && figurinoCompleto) {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
    } else if (!somFuncionando && figurinoCompleto) {
      setResultado("Sem som. Realizar apresentação alternativa no salão.");
    } else if (somFuncionando && !figurinoCompleto) {
      setResultado("Faltando parte do figurino. Te vira no improviso!");
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Verificação de Entrada no Palco - Sarumano</h2>
      <button onClick={VerificarEntrada}>Verificar Condições do Palco</button>
      
      {resultado && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          {resultado}
        </p>
      )}
    </div>
  );
}

export default SarumanoPalco;