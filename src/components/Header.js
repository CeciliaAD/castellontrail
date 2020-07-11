import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
	
	<nav>
    	<ul className="header">
		<Link to="/">
		<li className="castellonTrail">Castellón Trail</li>
		</Link>
		<Link to="/iniciar">
		<li className="botonesPortada"variant="secondary">Iniciar Sesión</li>
		</Link>
		<Link to="/registrarse">
		<li className="botonesPortada"variant="secondary">Registrarse</li>
		</Link>		
	    <li className="header">Estás viendo la versión Beta</li> 
		</ul> 
 	</nav>
	
    );
}

export default Header;
