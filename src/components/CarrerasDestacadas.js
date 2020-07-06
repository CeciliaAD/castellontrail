import React, { useContext } from 'react';
import { CarrerasContext } from '../contexts/CarrerasContext';
import Carrera from './Carrera';

const CarrerasDestacadas = () => {
    const { carreras } = useContext(CarrerasContext);
    
    return (
            <section>
            <h4 className="section-title">Carreras destacadas:</h4>
            
                {carreras.filter(carrera => carrera.destacada === true).map(carrera => {
                return (<Carrera style={{width: "350px"}} key={carrera.id} carrera={carrera}/>
                        
                        
                
                )
        })}
                </section>
);
}

export default CarrerasDestacadas;

