import React, { useState } from 'react';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';
import './BuscadorCarreras.css';
import { Label } from 'semantic-ui-react';

const BuscadorCarreras = ({carreras}) => {
    const [value, setValue] = useState('')
    
    return (
		<section>
		<div className="contenedor_buscador">
		<h4>Buscar Carrera</h4>
        <h4 className="section-title">Resultados:</h4>
        <form className="form_filtro">
        <label htmlFor="texto">Búsqueda por texto</label>
        <input 
		  type="text"
          value={value} 
          name="texto"
		  onChange={e => setValue(e.target.value)} 
		/>
		<label htmlFor="distancia">Búsqueda por distancia Km:</label>
		<input 
		  type="range"
          value={value} min="10" max="42,5" step="1"
          name="distancia"
		  onChange={e => setValue(e.target.value)} 
		/>
        </form>
		</div>
        <div>
		{carreras
		  .filter(carrera => {
			if (!value) return true
			if (carrera.nombre.includes(value) || carrera.lugar.includes(value)) {
			  return true
			}
		  })
		  .map(carrera => {
			  return(
            
			<Carrera
			  carrera={carrera} key={carrera.id}
			/>

		  )
		})}
	    
        
        {carreras
		  .filter(carrera => {
            if (!value) return false
			if (carrera.distancia.includes(value) || carrera.distancia.includes(value)) {
			  return true
			}
        })
		  .map(carrera => {
			  return(
            
			<Carrera
			  carrera={carrera} key={carrera.id}
			/>
            
		  )
		})}
        </div>
		</section>    

  )
}

export default BuscadorCarreras;


