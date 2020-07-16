import React, { useState } from 'react';
import Carrera from './Carrera';
import './BuscadorCarreras.css';


const BuscadorCarreras = ({carreras}) => {
  
  const [state, setState] = useState({
	texto: "",
	distancia: "",
	fecha: ""
  })

  function handleChange(e) {
	const value = e.target.value;
	setState({
	  ...state,
	  [e.target.name]: value
	});
  }
  return (
	
		<section>
		<div className="contenedor_buscador">
		<h4>Buscar Carrera</h4>
        
        <form className="form_filtro">
		<div>
        <label htmlFor="texto">Búsqueda por texto</label>
        <input 
		  type="text"
		  name="texto"
		  value={state.texto}
		  onChange={handleChange}
		/>
		</div>
		<div>
		<label htmlFor="distancia">Búsqueda por distancia {state.distancia} Km </label>
		<input
            type="range"
            name="distancia"
            min="0"
            max="85"
			id="distancia"
			value={state.distancia}
			
            onChange={handleChange}
            className="form-control"
          />
		  </div>
		  <div>
		<label htmlFor="fecha">Búsqueda por fecha:</label>
		<input type="date" id="fecha" name="date"
		value={state.date}
		onChange={handleChange}
       	min="2020-01-01" max="2022-12-31"/>
		   </div>
        </form>
		</div>
		<h4 className="section-title">Resultados:</h4>
        <div>
		
		{carreras
		  .filter(carrera => carrera.nombre.includes(state.texto) || carrera.lugar.includes(state.texto) || carrera.distancia.includes(state.distancia) || carrera.fecha.includes(state.date))  
		  .map(carrera => <Carrera carrera={carrera} key={carrera.id}/>)
		}
	    
        
        </div>

		</section>    
  )
}


export default BuscadorCarreras;


