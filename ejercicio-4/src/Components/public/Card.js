import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <div>
<div class="card" style={{width: "18rem;"}}>
  <img src="./Imagenes/Egg1.png" class="card-img-top" alt="Huevo" id="EggOscuro"/>
  <div class="card-body">
    <h5 class="card-title">Soy un Huevo</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={'/'} className="nav-link px-2 text-secondary">Home</Link>
              </button>
            </div>
          </div>
  </div>
</div>
    </div>
  )
}
