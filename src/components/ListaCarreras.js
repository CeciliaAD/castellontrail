import React from 'react';
import Carrera from './Carrera';
import Carreras from './Carreras';


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
		<section className="listacarreras">
		<div className="listacarreras-centro">
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
		</div>
		</section>
	);
}

export default ListaCarreras;
