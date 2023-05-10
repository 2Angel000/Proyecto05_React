import React from 'react'

export default function Actividad3({reyes}) {
    
    const resultado=reyes.find(rey => rey.nombre.substring(0,1) == "e" || 
        rey.nombre.substring(0,1) == "E");

    return (
    <>
     {resultado == undefined ? "No se ha encontrado": resultado.nombre}
    </>
  )
}
