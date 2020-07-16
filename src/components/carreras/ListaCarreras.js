import React, { useState } from 'react';
import Carrera from './Carrera';
import CardDeck from 'react-bootstrap/CardDeck';
import './ListaCarreras.css';

const ListaCarreras = ({carreras}) => {
      
	const [value, setValue] = useState('')
  
	return (
		<>
	  	<div className="buscador">
		  <h4>Buscar Carrera:</h4>
		<input 
		  type="text"
		  value={value} 
		  onChange={e => setValue(e.target.value)} 
		/>
		</div>
		<h4 className="section-title">Resultados:</h4>
		<CardDeck className="cardDeck">
		{carreras
		  .filter(carrera => carrera.nombre.includes(value) || carrera.lugar.includes(value))
		  .map(carrera => <Carrera carrera={carrera} key={carrera.id}/>)
		}
	</CardDeck>
	</>
	)
  }


export default ListaCarreras;



/* 
  return (
	<>
	<h4 className="section-title">Resultados:</h4>
		<CardDeck className="cardDeck">
	
	
		{carreras.map(carrera => {
		return (
			<Carrera className="item" style={{backgroundImage: "url({img}"}} key={carrera.id} carrera={carrera}/>
			 
		
		)
})} 
		</CardDeck>
		</>
);
}
 */




















/*import Carrera from './Carrera';
//import Carreras from './Carreras';


function ListaCarreras(props) {

	if(props.carreras.length===0) {
		return (
			<div className="vacio">
			<p>Lo sentimos, no existe ninguna carrera que coincida con la búsqueda</p>
			</div>
			);
	}
	console.log(props);
	return(
		<>
		
		{ props.carreras.map((carreras) => {
			return(
				<Carrera
				key={carreras.id}
				img={carreras.img}
				nombre={carreras.nombre}
				lugar={carreras.lugar}
				fecha={carreras.fecha}
				distancia={carreras.distancia}
				desnivel={carreras.desnivel}
				url={carreras.url}
				descripcion={carreras.descripcion}
				/>

				)
		})}
	
		</>
	);
}

export default ListaCarreras;
 */