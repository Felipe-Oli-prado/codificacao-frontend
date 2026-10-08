import React, { useState } from "react";

function Feira() {
  const [resultado, setResultado] = useState("");

  const calcularCompra = () => {
    let quantidade = Number(prompt("Quantas maçãs você vai comprar?"));

    if (isNaN(quantidade) || quantidade <= 0) {
      setResultado("Digite um número válido de maçãs.");
      return;
    }

    let precoUnitario = quantidade < 12 ? 0.30 : 0.25;
    let total = quantidade * precoUnitario;

    setResultado(`Total da compra: R$ ${total.toFixed(2)}`);
  };

  return (
    <div className="feira-container">
      <h2>Feira do Mano Juca</h2>
      <h3>Comprar Maçãs</h3>

      <button onClick={calcularCompra}>Calcular Total</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Feira;