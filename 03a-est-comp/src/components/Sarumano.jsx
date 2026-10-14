import React, { useState } from "react";

function Sarumano() {
  const [resultado, setResultado] = useState("");

  function ControlarFumaca() {
    let criancasPequenas = Number(prompt("Quantas crianças pequenas estão próximas?"));
    let velocidadeVento = Number(prompt("Qual a velocidade do vento (m/s)?"));

    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setResultado("Fumaça bloqueada. Aguardar condições ideais.");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Máquina de Fumaça Mística de Sarumano</h2>
      <button onClick={ControlarFumaca}>Verificar Máquina de Fumaça</button>
      
      {resultado && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          {resultado}
        </p>
      )}
    </div>
  );
}

export default Sarumano;