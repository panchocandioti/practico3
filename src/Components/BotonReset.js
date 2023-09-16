import React from 'react';

// Este componente sólo proporciona un botón de RESET para recargar la página

function BotonReset() {
  const recargaPagina = () => {
    window.location.reload();
  };

  return (
    <button onClick={recargaPagina}>RESET</button>
  );
}

export default BotonReset;