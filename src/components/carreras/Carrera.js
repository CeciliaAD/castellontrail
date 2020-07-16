import React from 'react';
//import Card from 'react-bootstrap/Card'
//import CardDeck from 'react-bootstrap/CardDeck';
import './Carrera.css';
import { GiRunningShoe } from "react-icons/gi";
import {MdDateRange} from "react-icons/md"
export default function Carrera({carrera}) {
  const{nombre,lugar,img, distancia, fecha} = carrera;
  return (
  
  <div style={{boxSizing: "inherit", backgroundColor: "#303743", color: "white", margin: "1rem", marginLeft: "6rem",width: "350px", display: "inline-block"}}>
    <div>
      <img variant="top" src={img} style={{height: "13rem", width: "100%"}} alt="carrera" />
      <div className="carrera-info">
      {nombre}
      <div>
      <div className="lugar">
        <h6>{lugar}</h6>
      </div>
      {fecha} <MdDateRange className="icon"/>
      <br/>
      Distancia:  {distancia} Km <GiRunningShoe className="icon"/>
      </div>
      </div>
      </div>
  </div>
  
  
  );
}

