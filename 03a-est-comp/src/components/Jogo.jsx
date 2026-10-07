import React, { useState } from 'react'

function Jogo() {

    const[resultado, setResultado] = useState()

function classificarJuca ()
{

let pontos = Number(prompt("Quantos pontos?"))
if(pontos <= 10 ) {
    setResultado("moggado")

} else if(pontos <=100){
setResultado("Ohhhh Lee...")


} else if(pontos <= 200) {

    setResultado("Supimpa")
} else{
    setResultado("GOAT")
}


}


  return (
    <div className='jogo'> 
    
    <h2>Jogo do mano juca</h2>
    <button onClick={classificarJuca}>Classificar
    </button>
    resultado: {resultado}
    </div>
  )
}

export default Jogo