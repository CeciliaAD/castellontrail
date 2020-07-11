import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from '../components/auth/SignIn';
import MenuAdmin from '../components/admin/MenuAdmin';
import CrearCarrera from '../components/admin/CrearCarrera';

function BaseAdmin() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home}/>   
    <Route path="/crearCarrera" component={CrearCarrera}/>
    <Route path="/iniciar" component={SignIn}/>
    </Switch>    
    </Router>
  );
}

export default BaseAdmin;
