import React, { useState } from 'react'

function Home() {
    const [inputLogin, setInputLogin] = useState('')

    function efetuarlogin() {
        if (inputLogin === 'admin') {
            alert("Você recebeu acesso de admin ao sistema")
        } else {
            alert("Errado, a senha é admin")
        }
    }

    return (
        <div className="Home">
            <h1>Inputs controlados</h1>
            <label htmlFor="login">Login</label>
            
            <input 
                type="text" 
                value={inputLogin}
                onChange={(e) => setInputLogin(e.target.value)}
            />

            <p>
                <button onClick={efetuarlogin}>Entrar</button>
            </p>
        </div>
    )
}

export default Home