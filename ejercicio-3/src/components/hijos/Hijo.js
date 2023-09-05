import React from 'react'

export function Hijo(props) {
const estilo = {
    color: props.color // Aplica el color como estilo
  };

  return <h1 style={estilo}>Hola, {props.nombre}</h1>;
}






  
