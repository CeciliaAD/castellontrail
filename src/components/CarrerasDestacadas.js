import React, { Component } from 'react';
import { CarrerasContext } from '../context';
import Carrera from './Carrera';

export default class CarrerasDestacadas extends Component {
    static contextType = CarrerasContext;
    
    render() {
        let carrerasDestacadas = this.context;

        carrerasDestacadas = carrerasDestacadas.map(carrera => {
            return <Carrera className ="carreras-destacadas" key={carrera.id} carrera={carrera}/>;
        });
        return (
            <section className="carreras-destacadas">
            <h4 className="section-title">Carreras destacadas:</h4>
            <div className="carreras-descatadas-center">
                {carrerasDestacadas}
            </div>
            </section>
            );
        }
    }


