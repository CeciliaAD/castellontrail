import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from '../components/SignIn';
import Registrarse from '../components/Registrarse';
import AcercaDe from '../components/AcercaDe';
import Contactar from '../components/Contactar';

function Base() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home}/>   
    <Route path="/iniciar" component={SignIn}/>
    <Route path="/registrarse" component={Registrarse}/>
    <Route path="/acerca" exact component={AcercaDe}/>   
    <Route path="/contactar" component={Contactar}/>
    </Switch>    
    </Router>
  );
}

export default Base;
