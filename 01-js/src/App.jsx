
import './App.css'

function App() {

function jucaGastar() {

let  salario = Number(prompt("qual valor do salario?"))

let moradia = Number(prompt("qual valor da moradia?"))
let agua = Number(prompt("qual valor da agua?"))
let luz = Number(prompt("qual valor da luz?"))
let internet = Number(prompt("qual valor da internet?"))






}


  


  function SararMano () {

   let bombas = Number(7)
   let showmarcado = Number(prompt("quantos shows foram marcados?")) // 10 shows marcados
   let precobomb = Number(prompt("qual o preço de cada bomba?")) // 15 reais cada bomba

let bombasfaltam = bombas - showmarcado

let valorbombas = bombasfaltam * precobomb

alert("faltam " + bombasfaltam + " bombas para marcar e o valor das bombas é: " + valorbombas + " reais")


  }

  function lucrarGanso() {

    let gastomec = Number(prompt("Quanto foi gasto em suprimentos e mercadorias para operar seu navio?"))
    let fating = Number(prompt("Quanto foi o faturamento em venda de ingressos?"))
    let fatitens = Number(prompt("Quanto foi o faturamento em venda de itens?"))

    let lucro = fating + fatitens - gastomec

    alert("O lucro do navio é: " + lucro.toFixed(2) + " reais")

    let porcentagem = (lucro / gastomec) * 100

    alert("A porcentagem de lucro é: " + porcentagem.toFixed(2) + "%")

  }

  

  function calcularlucro() {


  let dinheiroganho = Number(6579.00)
  let gasto1 = Number(112.00)
  let gasto2 = Number(750.00)
  let gasto3 = Number(650.00)
  let Lucro  = dinheiroganho - (gasto1   + gasto2 + gasto3)

  alert("O lucro da empresa é: " + Lucro.toFixed(2) + " reais")

  }

function  taxar() {

let peso = Number(prompt("Qual o peso do caminhão?"))
let distancia = Number(prompt("Qual a distancia percorrida?"))
let volume = Number(prompt("Qual o volume da carga?"))
let frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

alert("O valor do frete é: " + frete.toFixed(2) + " reais")


}

  function recrutarDevs() {

 let n = Number(prompt("Qual o numero de uso de celular?"));
let porc = (0.1 / (1 + 500 * n)) * 100;
alert("A chance de uso de celular é: " + porc.toFixed(2) + "%");
  
  }

  function Telles() {
    let PesoDoCaminhaoComCarga = Number(prompt('Qual o peso total? '))
    let PesoDoCaminhaoVazio = Number(prompt('Qual o peso do caminhão vazio? '))
      
    let PesoDaCarga = PesoDoCaminhaoComCarga - PesoDoCaminhaoVazio
    alert('O peso da carga é: ' + PesoDaCarga)
  }


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
   let vitoria = parseFloat(prompt("quantas vitórias você teve?"))
   let empate = parseFloat(prompt("quantos empates você teve?"))
   let derrota = parseFloat(prompt("quantas derrotas você teve?"))
   let pontos = (vitoria * 3) + (empate * 1) + (derrota * 0)
   alert("seu time fez: " + pontos + " pontos")
  }

 function trocarSapatos() {
  let qtdPares, precoPar, valorTotal
  qtdPares = parseFloat(prompt("quantos pares de sapatos você quer comprar?"))
  precoPar = parseFloat(prompt("qual o preço de cada par de sapatos?"))
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

      <hr />
      <button onClick={Telles}>Calcular Peso da Carga</button>
      <button onClick={recrutarDevs}>Recrutar Devs</button>

      <h3>LADO B</h3>

      <button onClick={taxar}>Calcular Frete</button>
      <button onClick={calcularlucro}>Calcular Lucro</button>

      <hr />

    <button onClick={lucrarGanso}>lucrarGanso</button>
    <button onClick={SararMano}>Sarar Mano</button>
    </div>
  )
}

export default App
