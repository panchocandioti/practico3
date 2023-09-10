import React from 'react'
import './App.css'
import InterfazUsuario from './Components/InterfazUsuario'
import SeleccionarJugada from './Components/SeleccionarJugada';

function App() {

    return (
      <div className='App'>
        <header className='App-header'>¡Piedra, papel, tijeras!</header>
        <InterfazUsuario />
        <SeleccionarJugada/>
      </div>
    );
  }

export default App;