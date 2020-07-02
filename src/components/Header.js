import React from 'react';


function Header() {
  return (
  	<>
    	<div className="header">
    	<a href="/">CASTELLÓN TRAIL</a>
    	<button className="botonesPortada" type='button'>Iniciar Sesión</button>
	   	<button className="botonesPortada" type='button'>Registrarse</button>
	   
	   <p className="header">Estás viendo la versión Beta</p>  
	   </div>
  	</>
      );
}

export default Header;
