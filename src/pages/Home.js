import React, { Component } from 'react';
import Portada from '../components/Portada';
import ListaCarreras from '../components/carreras/ListaCarreras';
import Buscador from '../components/Buscador';
import CarrerasDestacadas from '../components/carreras/CarrerasDestacadas';
import '../App.css';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    //console.log(this.props)   
    const { carreras } = this.props;
  return (
    <>
       <Portada/>
       <Buscador />
       <CarrerasDestacadas carreras={carreras}/>
       <ListaCarreras carreras={carreras} />
      
    </>
  );
}
}
const mapStateToProps = (state) => {
  return {
    carreras: state.carreras.carreras
  }
}
export default connect(mapStateToProps)(Home);
