import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignIn from '../../components/auth/SignIn';
import AcercaDe from '../../components/AcercaDe';
import Contactar from '../../components/Contactar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuCrudCarreras from './MenuCrudCarreras';
import Home from '../../pages/Home';
import Registrarse from '../../components/auth/Registrarse';
import CrearCarrera from '../admin/CrearCarrera';

function MenuAdmin() {
  return (
    <>
  	<Router>
    <MenuCrudCarreras/>
    <Switch>
    <Route path="/" exact component={Home}/>  
    <Route path="/iniciar" component={SignIn}/>
    <Route path="/crearCarrera" component={CrearCarrera}/>
    <Route path="/registrarse" component={Registrarse}/>
    <Route path="/acerca" component={AcercaDe}/>   
    <Route path="/contactar" component={Contactar}/>
    </Switch>    
    </Router> 
    </>
  );
}

export default MenuAdmin;
