import React from 'react';

const Carrera = ({ nombre, descripcion, img, lugar, 
fecha, distancia, desnivel, url }) => (

	<div className="carrera">
	<div className="contenedor-img">
	<img src={img} alt='carrera' />
	<p className="info-carrera">Carrera: {nombre}</p>
	<p>Lugar: {lugar}</p>
	</div>
	</div>
)

export default Carrera;
