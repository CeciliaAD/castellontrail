import React from 'react';

export default function Carrera({carrera}) {
  const{nombre,lugar,img,url,descripcion,distancia,desnivel,fecha} = carrera;
  return (
  <article className="carreras-destacadas" style={{width: "350px", display: "inline-grid"}}>
    <div className="img-container">
      <img style={{}} src={img} alt="carrera" />
      <div className="lugar">
        <h6>{lugar}</h6>
      </div>
      <div className="carrera-info">
      <p>{nombre} {fecha}</p>
      <p>Distancia: {distancia}</p>
      </div>
      
    </div>
  </article>
  );
}

