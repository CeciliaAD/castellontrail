import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
//import portada from '../assets/zapatilla.jpg';
import CarrerasDestacadas from '../components/CarrerasDestacadas';

function Home() {
  return (
    <>
    <div>
    	<Header />
    </div>
    <div className='container'>
    	{/* {<img className="portada" src={portada} alt='imagen de portada'/>} */}
    	</div>
      <CarrerasDestacadas />
    	<div>
		  <Footer />    
		</div>
    </>
  );
}

export default Home;
