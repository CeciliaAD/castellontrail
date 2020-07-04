import React, { Component } from 'react';
import { CarrerasContext } from '../context';
import Carrera from './Carrera';
import '../styles/styles.css';

export default class CarrerasDestacadas extends Component {
    static contextType = CarrerasContext;
    
    render() {
        let carreras = this.context;

        carreras = carreras.map(carrera => {
            return <Carrera key={carrera.id} carrera={carrera}/>;
        });
        return (
            <section className="carreras-destacadas">
            <h4 className="section-title">Carreras destacadas:</h4>
            <div className="carreras-descatadas-center">
                {carreras}
            </div>
            </section>
            );
        }
    }


