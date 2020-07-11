import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import './Carrera.css';

export default function Carrera({carrera}) {
  const{nombre,lugar,img,url,descripcion,distancia,desnivel,fecha} = carrera;
  return (
    <CardDeck>
  <Card style={{boxSizing: "inherit", backgroundColor: "#303743", color: "white", margin: "2rem", width: "350px"}}>
    <Card.Body>
      <Card.Img variant="top" src={img} style={{height: "13rem", width: "100%"}} alt="carrera" />
      <div className="lugar">
        <h6>{lugar}</h6>
      </div>
      <Card.Title>
      {nombre}
      <Card.Text>
      {fecha}
      <br/>
      Distancia: {distancia}
      </Card.Text>
      </Card.Title>
      </Card.Body>
  </Card>
  </CardDeck>
  );
}

