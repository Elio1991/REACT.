import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import RickAndMortyService from "../../services/RickAndMorty.service";



export const Cards = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    RickAndMortyService.getAllCharacters()
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.log(error));
  }, [personajes]);

  //en base a la variable card list genera y devuelve cartas con esos elementos
  const cardList = personajes.map((m) => <Card personaje={m} key={m.id} />);

  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardList}
          </div>
        </div>
      </div>
    </div>
  );
};
