import React, { useState } from "react";

function Altura() {
  const [resultado, setResultado] = useState("");

  const calcularPeso = () => {
    let gênero = prompt("Qual seu gênero? (M/F)")?.toUpperCase();
    let altura = parseFloat(prompt("Qual sua altura? (em metros)"));

    if (!gênero || isNaN(altura)) return;

    let pesoIdealM = 72.7 * altura - 58;
    let pesoIdealF = 62.1 * altura - 44.7;

    if (gênero === "M") {
      setResultado(`Seu peso ideal é: ${pesoIdealM.toFixed(2)} kg`);
    } else if (gênero === "F") {
      setResultado(`Seu peso ideal é: ${pesoIdealF.toFixed(2)} kg`);
    } else {
      setResultado(
        "Gênero inválido. Por favor, insira 'M' para masculino ou 'F' para feminino."
      );
    }
  };

  return (
    <div className="Descubra seu peso ideal">
      <h3>Venha descobrir seu peso ideal</h3>
      <p>Não deixe isso te deixar mal</p>
      <button onClick={calcularPeso}>Descubra</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Altura;