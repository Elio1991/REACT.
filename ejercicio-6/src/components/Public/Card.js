import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({personaje}) => {

    return (
 
        <div className="col">
          <div className="card shadow-sm">

            <img width="100%"  src={personaje.image} alt='personaje'/>
            
            <h2 className="mb-0 text-dark"> {personaje.name}</h2>
            <h5 className="mb-0 text-dark"> {personaje.species}</h5>
            <h6 className="mb-0 text-dark"> {personaje.gender}</h6>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={`/detail/${personaje.id}`} className="nav-link px-2 text-secondary">Detalle</Link>
              </button>
            </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
      );
    };
