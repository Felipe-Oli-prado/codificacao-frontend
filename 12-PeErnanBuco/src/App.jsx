import { useState } from 'react'
import './App.css'
import DevWeb from './assets/components/DevWeb'
import Frontend from './assets/components/Frontend'
import Backend from './assets/components/Backend'
import Fullstack from './assets/components/Fullstack'
import Deploy from './assets/components/Deploy'


function App() {
  const [pagina, setPagina] = useState(0)
  function MostrarOração () {



    setPagina(0)


  }


  return (
  
    <div className="app">



<nav>

<button onClick={MostrarOração}> oração do dev</button>
<button onClick={() => setPagina(1)}> oração do frontend</button>
<button onClick={() => setPagina(2)}> oração do backend</button>
<button onClick={() => setPagina(3)}> oração do fullstack</button>
<button onClick={() => setPagina(4)}> oração do Deploy</button>


</nav>
<h1> oração do Padre Ernan Buco</h1>


      
{pagina==0 && < DevWeb />}
{pagina==1 && < Frontend/>}
{pagina==2 && < Backend/>}
{pagina==3 && < Fullstack/>}
{pagina==4 && < Deploy/>}




    </div>
   
  )
}

export default App
