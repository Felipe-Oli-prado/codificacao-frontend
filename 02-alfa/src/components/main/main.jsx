import "./main.css";

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
          <div className=" servicos-card1">
            <span>🐸🐸</span>

            <h3>Designs e interfaces</h3>
            <p>telas claras, pensadas para o usuario</p>
          </div>

          <div className="servicos-card2">
            <span>❤️</span>
            <h4>responsividade</h4>
            <p> o mesmo site em qualquer tela</p>
          </div>

          <div className="servicos-card3">
            <span>😒</span>
            <h5>performance</h5>
            <p>paginas leves que carregam rapido</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
