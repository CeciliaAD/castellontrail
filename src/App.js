import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import AcercaDe from './components/AcercaDe';
import Contactar from './components/Contactar';
import Registrarse from './components/Registrarse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
  	<Router>
    <Header />
    <Switch>
    <Route path="/" exact component={Home}/>  
    <Route path="/iniciar" component={SignIn}/>
    <Route path="/registrarse" component={Registrarse}/>
    <Route path="/acerca" exact component={AcercaDe}/>   
    <Route path="/contactar" component={Contactar}/>
    </Switch>    
    <Footer/>
    </Router> 
    
    </>
  );
}

export default App;
