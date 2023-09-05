import React from 'react';
import './Style.css';
import { Hijo } from './../hijos/Hijo';
import  ColorChanger  from './../Input/Input';

export const Main = (props) => {
  const estilo = {
    backgroundColor: props.backgroundColor // Aplica el color como estilo
  };

  return (
    <div className="Hijos" style={estilo}>
           
      <Hijo nombre="Chiquito"/>
      <Hijo nombre="Filomena"/>
    
    </div>
  )
}
