import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
<div id="navbar">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid" id="barra">
  <img src="Imagenes/Egg.jpg" alt="Huevo" width="30" height="24" className='Huevo' />
    <a className="navbar-brand" href="#" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        <Link to={'/'} className="nav-link active">Home</Link>
        {/* <a className="nav-link" href="#">Main1</a> */}
        <Link to={'/Main1'} className="nav-link active">Main1</Link>
        {/* <a className="nav-link" href="#">Main2</a> */}
        <Link to={'/Main2'} className="nav-link active">Main2</Link>
      </div>
    </div>
  </div>
</nav>
</div>

  )
}
