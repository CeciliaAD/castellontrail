import React, { useState} from 'react';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';
import './ListaCarreras.css';

const BuscadorTexto = ({carreras}) => {
      
	const [value, setValue] = useState('')
  
	return (
		<>
	  	<form>
		<div>
		<label htmlFor="carrera">Busqueda por texto:</label>
		<input 
		  type="text"
		  value={value} 
		  name="carrera"
		  id="carrera"
		  onChange={e => setValue(e.target.value)} 
		/>
		</div>
		</form>
		
		<h4 className="section-title">Resultados:</h4>
		<CardDeck className="cardDeck">
	
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
	</CardDeck>
	
	</>
	)
  }


export default BuscadorTexto;
