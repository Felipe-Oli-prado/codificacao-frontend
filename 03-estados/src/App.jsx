import { useState } from 'react';
import './App.css';

function App() {
  const[saida, setSaida] = useState(0)

  

function calcularMédia() {

  let nota1 = Number(prompt("digite sua primeira nota:"))
  let nota2 = Number(prompt("digite sua segunda nota:"))
  let nota3 = Number(prompt("digite sua terceira nota:"))
  let nota4 = Number(prompt("digite sua quarta nota:"))
  let media = (nota1 + nota2 + nota3 + nota4) / 4
  setSaida(media)
 
}

function rolarD100 () {

let n = Math.ceil(Math.random()*100 )
setSaida(n)
}


function rolarD20 () {

let n = Math.ceil(Math.random()*20 )
setSaida(n)
}


function rolarD12 () {

let n = Math.ceil(Math.random()*12 )
setSaida(n)
}

function rolarD8 () {

let n = Math.ceil(Math.random()*8 )
setSaida(n)

}

function rolarD6 () {
let n = Math.ceil(Math.random()*6 )
setSaida(n)

}

function raciocinarNumero ()
{

let A = Number(prompt("qual seu numero"))

let B = Number(prompt("qual seu outro número"))

if ( A > B) {

setSaida(" número A é maior")

} else {


  setSaida("número B é maior")
}


}

function digitarSenha() {


  let senha = prompt("qual sua senha?")
  if(senha == 1234) {

    setSaida("acesso permitido")
  } else {

    setSaida("acesso negado")
  }



}

  return ( 
   
 <div className="app">

<h1>Estados!!!!!</h1>
<button onClick={calcularMédia}>Média</button>
<button onClick={rolarD6}>D6</button>
<button onClick={rolarD8}>D8</button>
<button onClick={rolarD12}>D2</button>
<button onClick={rolarD20}>D20</button>
<button onClick={rolarD100}>D100</button>
<button onClick={digitarSenha}>digitar senha</button>
<button onClick={raciocinarNumero}> raciocine</button>

<hr />




<p>
resultado: {saida}

</p>



 </div>

  )
}

export default App
