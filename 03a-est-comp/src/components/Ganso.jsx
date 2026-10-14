import React, { useState } from "react";




function Ganso() {
     const [resultado, setResultado] = useState("");

    function Calcularprovisoes () {

let marujos = Number(prompt("Quantos marujos?"))
let comida = Number(prompt("Quantos quilos de comida?"))
let comidapormarujo = comida / marujos

if(marujos >= 10 && comidapormarujo >= 1.5) {

setResultado("Provisões suficientes. Rumo ao horizonte!")

}else{

setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje.")


}

    }
  return (

   <div className="ganso">

<h3>Ganso</h3>
<button onClick={Calcularprovisoes}>Ganso - provisões</button>
{resultado}
   </div>
  )
}

export default Ganso
