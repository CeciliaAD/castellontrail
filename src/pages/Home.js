import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';
import portada from '../assets/running.jpg';

function Home() {
  return (
    <div >
    	<Header />
    	<img className="portada" src={portada} alt='imagen de portada'/>
		  <Footer />    
    </div>
  );
}

export default Home;
