
import './App.css'

function App() {

  


  function calcularSalarios () {


    let salarioMensal = Number(prompt("qual o valor do salário mensal?"))
    let diasTrabalhados = Number(prompt("quantos dias você trabalhou?"))
    let salarioTotal = (salarioMensal / 30) * diasTrabalhados
    alert("o valor do salário total é: " + salarioTotal + " reais")


    
  }

  function pagarCustos  () {


  let custosMensais = Number(prompt("qual o valor dos custos mensais da igreja?"))
  let doacoes = Number(prompt("quanto foi recebido de doações e dízimos no dia?"))
  let valorFaltante = custosMensais - doacoes

  if (valorFaltante <= 0) {
    alert("os custos mensais da igreja foram pagos completamente")
  } else {
    alert("falta pagar: " + valorFaltante + " reais para pagar completamente os custos mensais da igreja")
  }
   // - - Os custos mensais da igreja
 // - Quanto foi recebido de doações e dízimos no dia

// - E mostre quanto falta para pagar completamente os custos mensais

  }

  function venderLaranjas () {

    let laranjasIniciais = Number(prompt("quantas laranjas você tem?"))
    let laranjasVendidas = Number(prompt("quantas laranjas você vendeu?"))
    let laranjasRestantes = laranjasIniciais - laranjasVendidas
    alert("você tem " + laranjasRestantes + " laranjas restantes")

  }

  function calcularDevs() {
  
    let Devsclts = Number(prompt("quantos devs clt tem ma sua empresa?"))
    let Devsestag = Number(prompt("quantos devs estagiarios tem na sua empresa?"))
    let DevsPJ = Number(prompt("quantos devs PJ tem na sua empresa?"))
    let totalDevs = Devsclts + Devsestag + DevsPJ
    alert("o total de devs é: " + totalDevs)
  

   





  }

  function calcularPontos() {
   let vitoria = Number(prompt("quantas vitórias você teve?"))
   let empate = Number(prompt("quantos empates você teve?"))
   let derrota = Number(prompt("quantas derrotas você teve?"))
   let pontos = (vitoria * 3) + (empate * 1) + (derrota * 0)
   alert("seu time fez: " + pontos + " pontos")
  }

 function trocarSapatos() {
  let qtdPares, precoPar, valorTotal
  qtdPares = Number(prompt("quantos pares de sapatos você quer comprar?"))
  precoPar = Number(prompt("qual o preço de cada par de sapatos?"))
  valorTotal = qtdPares * precoPar
  alert("o valor total da compra é R$: " + valorTotal.toFixed(2))
 }





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

      <h2>exercicios supimpas</h2>

      <button onClick={calcularPontos}>campeonato </button>
       <button onClick={trocarSapatos}> Trocar Pé Pequenos</button>

      <hr />


      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
      
      <hr />

      <button onClick={calcularDevs}>Calcular Devs</button>

      <button onClick={venderLaranjas}>Vender Laranjas</button>

      <hr />

      <button onClick={pagarCustos}>Pagar Custos</button>
      <button onClick={calcularSalarios}>Calcular Salários</button>
    </div>
  )
}

export default App
