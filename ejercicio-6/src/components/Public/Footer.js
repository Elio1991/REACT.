import React, { useState } from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  const company = "Elio Education";

  const [click, setClicks] = useState(0);

  
  const incrementar = () => {
    console.log("cliqueando");
    setClicks(click + 1);
  }

  const decrementar = () => {
    console.log("cliqueando");
    setClicks(click - 1);
  }
  const reset = () => {
    setClicks(0);
  };

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {company} {click}
        </p>
       
        <button className='btn btn-outline-primary'onClick={incrementar} id="incrementar">Incrementar</button>
        
        <spam 
        
        className="col-md-1 d-flex align-items-center justify-content-center mb-0 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        onClick={reset}
        >
           
          <img
            src="./Imagenes/Esfera.png"
            className="bi me-2"
            width="60"
            alt="esfera"
            id="esfera"
          ></img>
           
         </spam>

         <button className='btn btn-outline-secondary'onClick={decrementar} id="decrementar">Decrementar</button>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
          <a href="https://twitter.com/?lang=es" target="_blank"> 
            <img width="24" height="24" src="./Imagenes/twiter.png" className="text-body-secondary" ></img>
             </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com/eliochamorro/" target="_blank"> 
            <img width="24" height="24" src="./Imagenes/instagram.png" className="text-body-secondary" ></img>
             </a>
            
          </li>
          <li className="ms-3">
          <a href="https://www.facebook.com/Eliochamorro/" target="_blank"> 
            <img width="24" height="24" src="./Imagenes/facebook.png" className="text-body-secondary" ></img>
             </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
