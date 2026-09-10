
import './App.css'

function App() {

  function testar() { 

 let nome = prompt("Qual é o seu nome?")
 let bocaDoSapo = nome
 alert(nome + ", Seu nome esta na boca do sapo🐸")


  }

  function calcularMedia() {
   let nota1 = Number(prompt("qual sua primeira nota:"))
   let nota2 = Number(prompt("qual sua segunda nota:"))
   let media = (nota1 + nota2) / 2
   alert("sua media é: "+ media)
  }

  return (
    <div className="cont-app">
      <h1>Javascript no React</h1>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
      
    </div>
  )
}

export default App
