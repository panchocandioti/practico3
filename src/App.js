import React from 'react'
import './App.css'
import FormularioNombre from './Components/FormularioNombre'
import BotonReset from './Components/BotonReset'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>¡Piedra, papel, tijeras!</header>
      <FormularioNombre />
      <BotonReset />
    </div>
  )
}

export default App