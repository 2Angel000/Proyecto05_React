import React from 'react'

export default function Actividad2({reyes}) {
    
    const eliminar =(borrar)=>{
        borrar.target.parentNode.remove();
    }

   return (
    <>
        {
        reyes.filter(rey => !rey.nombre.includes("g")).
        map(rey => <div key={rey.nombre}>{rey.nombre}  <br /><br />
        <button onClick={eliminar}>Eliminar</button>
        </div>)
        
        }
    </>
  )
}
