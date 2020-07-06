import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import portada from '../assets/zapatilla.jpg';
import CarrerasContextProvider from '../contexts/CarrerasContext';
import ListaCarreras from '../components/ListaCarreras';
import CarrerasDestacadas from '../components/CarrerasDestacadas';


function Home() {
  return (
    <>
     	<Header />
      <CarrerasContextProvider>
        <CarrerasDestacadas/>
        <ListaCarreras />
      </CarrerasContextProvider>
      <Footer />    
    </>
  );
}

export default Home;
