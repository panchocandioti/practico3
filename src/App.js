import React from 'react'
import './App.css'
import InterfazUsuario from './Components/InterfazUsuario'
import fondo from './multimedia/fondo.jpg'

function App() {

    return (
      <div className='App'>
        <header className='App-header'>¡Piedra, papel, tijeras!</header>
        <InterfazUsuario />
      </div>
    );
  }

export default App;