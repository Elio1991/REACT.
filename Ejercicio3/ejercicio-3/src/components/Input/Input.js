import React, { useState } from 'react';
// import { Hijo } from './../hijos/Hijo';
import { Main } from '../main/Main';

function ColorChanger(props) {
  // Estado para almacenar el color seleccionado
  const [selectedColor, setSelectedColor] = useState('#000000'); // Color inicial negro

  // Función para manejar el cambio de color
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div >
      {/* <Hijo nombre="Elio" color={selectedColor}/> */}
     
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        id="input"
      />
       <Main backgroundColor={selectedColor}/>
    </div>
  );
}

export default ColorChanger;