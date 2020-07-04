import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Carrera({carrera}) {
  const{nombre,lugar,img,url,descripcion,distanci,desnivel,fecha} = carrera;
  return (
  <article className="carrera">
    <div className="img-container">
      <img src={img} alt="carrera" />
      <div className="lugar">
        <h6>{lugar}</h6>
      </div>
      {/* <Link to={`/carreras/${url}`} className="btn-primary room-link">
        Destacadas
      </Link> */}
      <p className="carrera-info">{nombre} {fecha}</p>
      
      
    </div>
    </article>
  );
}

Carrera.propTypes = {
  carrera:PropTypes.shape({
    nombre:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    lugar:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    descripcion:PropTypes.string.isRequired,
    distancia:PropTypes.string.isRequired,
    desnivel:PropTypes.string.isRequired,
    fecha:PropTypes.string.isRequired
  })
}