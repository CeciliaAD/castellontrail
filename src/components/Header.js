import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
  	<>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" >Castellón Trail</Navbar.Brand>
     
      
      <Nav>
	    <Button variant="primary">Iniciar Sesión</Button>{' '}
	    <Button variant="success">Registrarse</Button>{' '}
      </Nav>
  
	</Navbar>
  <p className="beta">Estás viendo la versión Beta</p>
	</>
      );
}

export default Header;
