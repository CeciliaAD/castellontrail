import React from "react";
import { useContext } from "react";
import { CarrerasContext } from '../contexts/CarrerasContext';


const Buscador = () => {
  

  
  return (
    <section className="filter-container">
     
      <form className="filter-form">

        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control">
            
          </select>
        </div>
       
       
       
        <div className="form-group">
          <label htmlFor="price">room price $</label>
          <input
            type="range"
            name="price"
           
            id="price"
           
            className="form-control"
          />
        </div>
        
       
       
      </form>
    </section>
  );
};

export default Buscador;