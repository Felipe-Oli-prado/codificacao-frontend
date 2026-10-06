import "./main.css";
import ServicoCard from "../servicoCard/servicoCard";


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


function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>criamos sites que funcionam</h1>
        <p>
          layouts responsivos, rapidos e acessiveis para o seu negocio crecer na
          web
        </p>

        <div className="hero-buttons">
          <a href="#orcamento" className="btn-primary">
            peça um orçamento
          </a>
          <a href="#orcamento" className="btn-secondary">
            ver portfolio
          </a>
        </div>
      </section>
      <section className="servicos">
        <h2>nossos serviços</h2>

        <div className="servicos-grid">
         {servicos.map((servico) => (
            <ServicoCard
              key={servico.id}
              titulo={servico.titulo}
              icone={servico.icone}
              descricao={servico.descricao}
            />
          ))}
          
        </div>
      </section>
    </main>
  );
}

export default Main;
