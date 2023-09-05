import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { Footer } from "./Footer";

export const Details = () => {

  const [personaje, setpersonaje] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharacterById(id)
    .then((data) => setpersonaje(data))
  }, []);

  const detailCard = {
    width: '20%',
    margin: 'auto',
    background: 'white'
   }
  

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img style={detailCard} src={personaje.image} alt="personaje" />

          <h2 className="mb-0 text-dark"> {personaje.name}</h2>
          <h5 className="mb-0 text-dark"> {personaje.status}</h5>
          <h5 className="mb-0 text-dark"> {personaje.species}</h5>
          <h6 className="mb-0 text-dark"> {personaje.type}</h6>
          <h6 className="mb-0 text-dark"> {personaje.gender}</h6>
          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group" style={{ marginLeft: "15px" }}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <Link
                    to={`/`}
                    className="nav-link px-2 text-success"
                  >
                    volver
                  </Link>
                </button>

               
              </div>
              <small className="text-body-secondary"></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
