import img1 from "../../assets/nubes.jpg";
import img2 from "../../assets/20.jpg";
import img3 from "../../assets/23.jpg";
import img4 from "../../assets/19.jpg";
import img5 from "../../assets/utes.jpg";
import img6 from "../../assets/xodos.jpg";
import img7 from "../../assets/14.jpg";
import img8 from "../../assets/15.jpg";
import img9 from "../../assets/16.jpg";
import img10 from "../../assets/17.jpg";
import img11 from "../../assets/18.jpg";
import img12 from "../../assets/19.jpg";
import img13 from "../../assets/21.jpg";


const initState = {
    carreras: [
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
        },
        {
            id: 7,
            nombre: "Volta a la Campana",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, iure?",
            img: img7,
            lugar: "Sueras",
            fecha: "Octubre/2021",
            distancia: "23km",
            desnivel: "1300mts",
            url: "https://voltaalacampana.com",
            destacada: false
        },{
            id: 8,
            nombre: "Volta Sprint",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis?",
            img: img8,
            lugar: "Morella",
            fecha: "Mayo/2021",
            distancia: "11km",
            desnivel: "#500mts",
            url: "https://voltaalacampana.com",
            destacada: false
        },{
            id: 9,
            nombre: "Trail Denes de Morella",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, magni.",
            img: img9,
            lugar: "Morella",
            fecha: "Mayo/2021",
            distancia: "45km",
            desnivel: "1900mts",
            url: "https://voltaalacampana.com",
            destacada: false
        },
        {
            id: 10,
            nombre: "Refugis de Pedra",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, iure?",
            img: img10,
            lugar: "Onda",
            fecha: "Marzo/2021",
            distancia: "46km",
            desnivel: "2450km",
            destacada: false,
            url: "https://refugisdepedra.es"
            
        },{
            id: 11,
            nombre: "Refugis Sprint",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis?",
            img: img11,
            lugar: "Onda",
            fecha: "Marzo/2021",
            distancia: "15km",
            desnivel: "950",
            destacada: false,
            url: "https://refugisdepedra.es"
            
        },{
            id: 12,
            nombre: "Cursa Muntanya Cati",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, magni.",
            img: img12,
            lugar: "Cati",
            fecha: "Junio/2021",
            distancia: "20,5km",
            desnivel: "1100mts",
            url: "https://www.facebook.com/cursadecati",
            destacada: false
        }
        ,{
            id: 13,
            nombre: "Marxa Muntanya Cati",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, magni.",
            img: img13,
            lugar: "Cati",
            fecha: "Junio/2021",
            distancia: "12km",
            desnivel: "550mts",
            url: "https://www.facebook.com/cursadecati",
            destacada: false
        }
    ]
}
 
const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer; 