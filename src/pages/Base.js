import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from '../components/auth/SignIn';
import Registrarse from '../components/auth/Registrarse';
import AcercaDe from '../components/AcercaDe';
import Contactar from '../components/Contactar';
import MenuAdmin from '../components/admin/MenuAdmin';
import CrearCarrera from '../components/admin/CrearCarrera';

function Base() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home}/>   
    <Route path="/iniciar" component={SignIn}/>
    <Route path="/admin" component={MenuAdmin}/>
    <Route path="/crearCarrera" component={CrearCarrera}/>
    <Route path="/registrarse" component={Registrarse}/>
    <Route path="/acerca" exact component={AcercaDe}/>   
    <Route path="/contactar" component={Contactar}/>
    </Switch>    
    </Router>
  );
}

export default Base;
