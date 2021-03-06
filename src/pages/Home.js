import React, { Component } from 'react';
import Portada from '../components/Portada';
import CarrerasDestacadas from '../components/carreras/CarrerasDestacadas';
import '../App.css';
import { connect } from 'react-redux';
import BuscadorCarreras from '../components/carreras/BuscadorCarreras';
import Mapa from '../components/mapa/MapaCarreras';


class Home extends Component {
  render() {
    //console.log(this.props)   
    const { carreras } = this.props;
  return (
    <>
       <Portada/>
       <CarrerasDestacadas carreras={carreras}/>
       <BuscadorCarreras carreras={carreras}/>
       <Mapa/>
      
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
