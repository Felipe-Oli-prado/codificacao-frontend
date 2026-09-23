import "./Header.css";

function Header() {
  return (
    <>
      <header classname="header">
        <div className="header-container">
          <div classname="logo">
            <img
              className="logo-icon"
              src="../../../src/assets/imgs/Alfa-Romeo-Logo.png"
              alt="logo"
            />
            <span className="logo-text"> Studio Alfa</span>
          </div>
          <nav className="nav">
            <a href="#">início</a>
            <a href="#">serviços</a>
            <a href="#">sobre</a>
            <a href="#" className="btn-contatos">
              Contato
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
