import React from 'react';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';
import './CarrerasDestacadas.css';
const CarrerasDestacadas = ({carreras}) => {
  
    
    return (
            <>
            <h4 className="section-title">Carreras destacadas:</h4>
            
            
            {carreras.filter(carrera => carrera.destacada === true).map(carrera => {
            return (<Carrera style={{backgroundImage: "url({img}", padding: "0"}} key={carrera.id} carrera={carrera}/> 
            )
        })} 
            
            </>
    );
}

export default CarrerasDestacadas;
