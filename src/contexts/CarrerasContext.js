import React, { createContext, useState} from 'react';
import img1 from "../assets/nubes.jpg";
import img2 from "../assets/panoramica.jpg";
import img3 from "../assets/zapatilla.jpg";
import img4 from "../assets/fontsEslida.jpg";
import img5 from "../assets/utes.jpg";
import img6 from "../assets/xodos.jpg";

export const CarrerasContext = createContext();

const CarrerasContextProvider = (props) => {
    const [carreras, setCarreras] = useState([

    {
        id: 1,
        nombre: "Marxa Alcora",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, iure?",
        img: img1,
        lugar: "Alcora",
        fecha: "14/5/2021",
        distancia: "15km",
        desnivel: "450",
        url: "",
        destacada: true
    },{
        id: 2,
        nombre: "Dements",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis?",
        img: img2,
        lugar: "Eslida",
        fecha: "12/11/2021",
        distancia: "42.5km",
        desnivel: "#3808mts",
        url: "www.maratodelsdements.com",
        destacada: false
    },{
        id: 3,
        nombre: "Alcudia de Veo Trail",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, magni.",
        img: img3,
        lugar: "Alcudia de Veo",
        fecha: "5/5/2021",
        distancia: "45km",
        desnivel: "3450mts",
        url: "www.alcudiadeveotrail.com",
        destacada: false
    },
    {
        id: 4,
        nombre: "Volta a les fonts d'Eslida",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, iure?",
        img: img4,
        lugar: "Eslida",
        fecha: "Agosto",
        distancia: "15,2km",
        desnivel: "530",
        destacada: true,
        url: "www.facebook.com/fonts.deslida"
        
    },{
        id: 5,
        nombre: "Utes",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis?",
        img: img5,
        lugar: "La Vall D'Uixo",
        fecha: "Febrero",
        distancia: "84km",
        desnivel: "5500mts",
        destacada: true,
        url: "www.espadantrailevents.com"
        
    },{
        id: 6,
        nombre: "Marato Xodos-Penyagolosa",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, magni.",
        img: img6,
        lugar: "Xodos",
        fecha: "Junio",
        distancia: "42km",
        desnivel: "2367mts",
        url: "www.maratoxodospenyagolosa.es",
        destacada: false
    }
    
])
return(
    <CarrerasContext.Provider value={{carreras}}>
        {props.children}
    </CarrerasContext.Provider>
);
}

export default CarrerasContextProvider;

/* function CarrerasProvider({ children }) {
    let [carreras, setCarreras] = useState(datos);
    // let [carrerasBuscadas, setCarrerasBuscadas] = useState(null);
    let [carrerasDestacadas, setCarrerasDestacadas] = useState(datos);

    function lasCarreras() {
        setCarreras({carreras})
    }

    function destacadas(){
        setCarrerasDestacadas(carrerasDestacadas.filter(carrera => carrera.destacada === true))
    }

return (
    <Provider value={{lasCarreras, destacadas}}>
        {children}
    </Provider>
)
}

export { CarrerasProvider, Consumer as CarrerasConsumer, CarrerasContext} */
/* const CarrerasContext = React.createContext(datos);

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
 */