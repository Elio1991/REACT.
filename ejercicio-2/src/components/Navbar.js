import React from 'react'

export const Navbar = () => {
  return (
    
<div id="navbar">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid" id="barra">
  <img src="Imagenes/images.png" alt="perrito" width="30" height="24" className='perrito' />
    <a className="navbar-brand" href="#" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
</div>

  )
}
