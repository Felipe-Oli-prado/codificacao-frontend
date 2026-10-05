
import "./main.css";
import ServicoCard from "../servicoCard/servicoCard";
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
          
<ServicoCard 
titulo= "Design de Interface"
 icone="😉"
  descricao="Telas claras, pensadas para o usuario"/>

<ServicoCard2 
titulo=""
icone=""
descricao=""

/> 


<ServicoCard3
titulo=""
icone=""
descricao=""
 />

          <div className="servico-card">
            <span>😁</span>
            <h3>design de interface</h3>
            <p>telas clara, pensadas para o usuario</p>
          </div>

          <div className="servico-card">
            <span>😂</span>
            <h3>responsividade</h3>
            <p>o mesmo site em qualquer tela</p>
          </div>

          <div className="servico-card">
            <span>😎</span>
            <h3>perfornance</h3>
            <p>paginas leves que carregam rapidos</p>
             </div>
          </div>
      </section>
    </main>
  );
}

export default Main;