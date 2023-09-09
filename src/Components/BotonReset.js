import React from 'react';

function BotonReset() {
  const recargaPagina = () => {
    window.location.reload();
  };

  return (
    <button onClick={recargaPagina}>RESET</button>
  );
}

export default BotonReset;