import React, {Component} from 'react'
import datos from './data'

const CarrerasContext = React.createContext(datos);

class CarrerasProvider extends Component {
  state = {
        carreras:[],
        carrerasBuscadas:[],
        carrerasDestacadas:[],
    };
    
    componentDidMount(){
        let carreras = datos;
        let carrerasDestacadas = carreras.filter(carrera => carrera.destacada === true);
        console.log(this.state.carrerasDestacadas);
        this.setState({
            carreras,
            carrerasDestacadas,
            carrerasBuscadas:carreras});
   }
   
    render(){
        return(
            <CarrerasContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </CarrerasContext.Provider>
        );
    }
}

const CarrerasConsumer = CarrerasContext.Consumer;

export { CarrerasProvider, CarrerasConsumer, CarrerasContext };
