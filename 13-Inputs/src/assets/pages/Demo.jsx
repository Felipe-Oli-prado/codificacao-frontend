import { useState } from "react";

function Demo() {
  const [inputNota1, setNota1] = useState("");
  const [inputNota2, setNota2] = useState("");
  const [resultado, setResultado] = useState(
    "digite suas notas e aperte o botão",
  );

  function CalcularMedia() {
    let nota1 = Number(inputNota1);
    let nota2 = Number(inputNota2);
    let media = (nota1 + nota2) / 2;
    setResultado(media);
  }

  return (
    <div className="demo">
      <h1>Demo - Médias</h1>

      <label htmlFor="">Nota1</label>

      <input
        type="text"
        value={inputNota1}
        onChange={(e) => setNota1(e.target.value)}
      />

      <label htmlFor="">Nota2</label>

      <input
        type="text"
        value={inputNota2}
        onChange={(e) => setNota2(e.target.value)}
      />

      <button onClick={CalcularMedia}>calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Demo;
