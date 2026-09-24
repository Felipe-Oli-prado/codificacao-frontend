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
          <a href="#orcamento" className="btn-secundary">
            ver portfolio
          </a>
        </div>
      </section>
      <section className="servicos"></section>
    </main>
  );
}

export default Main;
