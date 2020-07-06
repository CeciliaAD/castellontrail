import React, { useContext } from 'react';
import { CarrerasContext } from '../contexts/CarrerasContext';

const ListaCarreras = () => {
	const { carreras } = useContext(CarrerasContext);
return (
	<div>
	<ul>
	{carreras.map(carrera => {
		return(
			<li className="carrera" key={carrera.id}>{carrera.nombre}</li> 
		)
	})}
	</ul>
</div>
);
}
export default ListaCarreras;


























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