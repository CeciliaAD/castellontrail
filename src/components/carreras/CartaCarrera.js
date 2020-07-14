import React from 'react';
import Card from 'react-bootstrap/Card'

const CartaCarrera = ({ carrera }) => {
   return(
   <Card style={{boxSizing: "inherit", backgroundColor: "#303743", color: "white", margin: "2rem", width: "350px"}}>
    <Card.Body>
      <Card.Img variant="top" src={carrera.img} style={{height: "13rem", width: "100%"}} alt="carrera" />
      <div className="lugar">
        <h6>{carrera.lugar}</h6>
      </div>
      <Card.Title>
      {carrera.nombre}
      <Card.Text>
      {carrera.fecha}
      <br/>
      Distancia: {carrera.distancia}
      </Card.Text>
      </Card.Title>
      </Card.Body>
    </Card>
  
  );
}

export default CartaCarrera;