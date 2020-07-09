import React, { useContext } from 'react';
import { CarrerasContext } from '../contexts/CarrerasContext';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';

const CarrerasDestacadas = () => {
    const { carreras } = useContext(CarrerasContext);
    
    return (
            <>
            <h4 className="section-title">Carreras destacadas:</h4>
            <CardDeck style={{marginLeft: "11%"}}>
            
            {carreras.filter(carrera => carrera.destacada === true).map(carrera => {
            return (<Carrera style={{backgroundImage: "url({img}"}} key={carrera.id} carrera={carrera}/> 
            )
        })} 
            </CardDeck>                
            </>
    );
}

export default CarrerasDestacadas;
/* 
{carreras.filter(carrera => carrera.destacada === true).map(carrera => {
        return (<Carrera style={{backgroundImage: "url({img}"}} key={carrera.id} carrera={carrera}/> */