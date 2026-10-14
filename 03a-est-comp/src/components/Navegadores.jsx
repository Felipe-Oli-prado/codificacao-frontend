import React, { useState } from "react";

function Navegadores() {
  const [resultado, setResultado] = useState("");

  function RecrutarMarujos() {
    let sabenadar = prompt("O novato sabe nadar? (Sim/Não)");
    let idade = Number(prompt("Qual a idade do novato?"));
    let recomendacao = prompt("Ele tem recomendação? (Sim/Não)");

    if (idade >= 16 && sabenadar === "Sim") {
      setResultado("Aprovado para o navio!");
    } else if (sabenadar === "Não" && recomendacao === "Sim" && idade >= 14) {
      setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
    } else {
      setResultado("Reprovado. Volte quando estiver mais preparado para o mar.");
    }
  }

  return (
    <div className="marujos">
      <h4>marujos</h4>
      <button onClick={RecrutarMarujos}>recrutamento - navegadores</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Navegadores;