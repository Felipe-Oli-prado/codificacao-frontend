import "./ServicoCard.css";

function ServicoCard({ icone, titulo, descricao }) {
  return (
    <div className="servico-card">
      <span>{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default ServicoCard;
const servicos = [
  {
    id: 1,
    titulo: "Design de Interface",
    icone: "🪟",
    descricao: "Telas claras, pensadas para o usuario",
  },
  {
    id: 2,
    titulo: "Responsividade",
    icone: "📱",
    descricao: "O mesmo site em qualquer tela.",
  },
  {
    id: 3,
    titulo: "Performance",
    icone: "🚀",
    descricao: "Paginas leves que carregam rápido",
  },
];
