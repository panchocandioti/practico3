import React from 'react'
import './App.css'
import InterfazUsuario from './Components/InterfazUsuario'

//El componente App sólo quedó para mostrar el header, llamar a InterfazUsuario.js
// y recibir los estilos desde App.css

function App() {

    return (
      <div className='App'>
        <header className='App-header'>¡Piedra, papel, tijeras!</header>
        <InterfazUsuario />
      </div>
    );
  }

export default App;