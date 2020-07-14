import React, { useState} from 'react';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';
import './ListaCarreras.css';

const BuscadorDistancia = ({carreras}) => {
      
	const [valueDistancia, setValueDistancia] = useState('')
  
	return (
		<>
	  	<form>
		<div>
		<label htmlFor="carrera">Busqueda por distancia en Km:</label>
		<input 
		  type="range"
		  value={valueDistancia} min="10" max="42,5" step="5"
		  onChange={e => setValueDistancia(e.target.valueDistancia)} 
		/>
		</div>
		</form>
		
		<h4 className="section-title">Resultados:</h4>
		<CardDeck className="cardDeck">
	
        {carreras
		  .filter(carrera => {
			if (!valueDistancia) return true
			if (carrera.distancia.includes(valueDistancia)) {
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
	</CardDeck>
	
	</>
	)
  }


export default BuscadorDistancia;
