import React from 'react';
import Portada from '../components/Portada';
import CarrerasContextProvider from '../contexts/CarrerasContext';
import ListaCarreras from '../components/ListaCarreras';
import Buscador from '../components/Buscador';
import CarrerasDestacadas from '../components/CarrerasDestacadas';
import '../App.css';


function Home() {
  return (
    <>
       <Portada/>
       <CarrerasContextProvider>
        <Buscador />
        <CarrerasDestacadas/>
        <ListaCarreras />
      </CarrerasContextProvider>
    </>
  );
}

export default Home;
