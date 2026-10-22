import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import Demo from './assets/pages/Demo'
import Ex0081 from './assets/pages/ex0081'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
    
    < Ex0081/>
   < Demo />
   < Home />


  </div>
  )
}

export default App
