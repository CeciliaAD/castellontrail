import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import './MenuCrudCarreras.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { IoIosCheckmark } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import CardDeck from 'react-bootstrap/CardDeck';

function MenuCrudCarreras() {
  return (
	<Fragment>
     <CardDeck className="deck">
    <Card style={{ width: '14rem'}}>
        <Card.Body>
        <Card.Title className="title">Carreras</Card.Title>
        <br/>
      <Card.Subtitle>
          <Link to="/crearCarrera">
          <Card.Link href="/crearCarrera"><IoIosCheckmark /><span /> Crear</Card.Link>
          </Link>
          </Card.Subtitle>
        <br/>
        <br/>
		<Card.Subtitle><Card.Link href="/modificarCarrera"><IoMdCreate /><span /> Modificar</Card.Link></Card.Subtitle>
        <br/>
        <br/>
		<Card.Subtitle><Card.Link href="/eliminarCarrera"><FaTrashAlt /><span /> Eliminar</Card.Link></Card.Subtitle>		
        </Card.Body>
    </Card>
    <Card style={{ width: '14rem'}}>
        <Card.Body>
        <Card.Title className="title">Entrenamientos</Card.Title>
		<Card.Subtitle><Card.Link href="/crearCarrera"><IoIosCheckmark /><span /> Crear</Card.Link></Card.Subtitle>
        <br/>
		<Card.Subtitle><Card.Link href="/modificarCarrera"><IoMdCreate /><span /> Modificar</Card.Link></Card.Subtitle>
        <br/>
		<Card.Subtitle><Card.Link href="/eliminarCarrera"><FaTrashAlt /><span /> Eliminar</Card.Link></Card.Subtitle>		
        </Card.Body>
    </Card>
    <Card style={{ width: '14rem'}}>
        <Card.Body>
        <Card.Title className="title">Estadísticas Carreras:</Card.Title>
		<Card.Subtitle><Card.Link href="/crearCarrera">Histórico Carreras Realizadas/Número Usuarios</Card.Link></Card.Subtitle>
        <br/>
		<Card.Subtitle><Card.Link href="/modificarCarrera">Previsión Carreras Futuras/Número Usuarios</Card.Link></Card.Subtitle>
        <br/>
		<Card.Subtitle><Card.Link href="/eliminarCarrera">Carreras No Seleccionadas</Card.Link></Card.Subtitle>		
        </Card.Body>
    </Card>
    <Card style={{ width: '14rem'}}>
        <Card.Body>
        <Card.Title className="title">Lista Usuarios</Card.Title>
		<Card.Subtitle><Card.Link href="/crearCarrera">Lista Usuarios</Card.Link></Card.Subtitle>
        <br/>
		<Card.Subtitle><Card.Link href="/modificarCarrera">Información por Provincia</Card.Link></Card.Subtitle>
        </Card.Body>
    </Card>
    </CardDeck>
      </Fragment> 
  
    );
}

export default MenuCrudCarreras;

