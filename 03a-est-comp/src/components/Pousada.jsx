import React, { useState } from "react";

function Pousada() {
  const [resultado, setResultado] = useState("");

  function calcularvalor() {
    let dias = Number(prompt("Quantos dias?"));
    let valordiaria;
    if (dias <= 5) {
      valordiaria = 100;
    } else if (dias <= 10) {
      valordiaria = 90;
    } else {
      valordiaria = 80;
    }

    let totalbruto = dias * valordiaria;
    let descontos = (totalbruto * 25) / 100;
    let multa = 150;
    let totalpagar = totalbruto - descontos + multa;
    setResultado("Vai pagar: R$" + totalpagar);
  }

  return (
    <div className="pousadaaaa">
      <h2>Pousada</h2>
      <button onClick={calcularvalor}>Calcular</button>
      {resultado}
    </div>
  );
}
export default Pousada;
