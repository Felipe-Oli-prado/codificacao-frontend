import React, { useState } from "react";

function SarumanoDeslocamento() {
  const [resultado, setResultado] = useState("");

  function VerificarDeslocamento() {
    let estaGripado = window.confirm("Sarumano está gripado? (OK para Sim, Cancelar para Não)");
    let tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    if (!estaGripado && tempoViagem < 45) {
      setResultado("Viagem autorizada. Rumo ao show!");
    } else {
      setResultado("Deslocamento inviável. Melhor recusar este evento.");
    }
  }

  return (
    <div>
      <h2>Deslocamento para Eventos - Sarumano</h2>
      <button onClick={VerificarDeslocamento}>Verificar Viagem</button>

      {resultado && (
        <p>{resultado}</p>
      )}
    </div>
  );
}

export default SarumanoDeslocamento;