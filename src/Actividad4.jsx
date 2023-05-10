import React from "react";

export default function Actividad4({ reyes }) {
  const sumar = (_div) => {
    // ++ antes lo suma, ++ después: a la siguiente suma
    ++_div.target.innerHTML;
  };

  const resultado = reyes
    .filter((rey) => rey.reinado > 10 && rey.vacasComidas > 10)
    .map((rey) => (
      <div key={rey.nombre}>
        {rey.nombre}
        <div className="numero" onClick={sumar}>
          0
        </div>
      </div>
    ));

  return <>{resultado}</>;
}
