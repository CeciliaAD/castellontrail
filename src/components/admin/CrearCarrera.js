import React, { Component } from 'react'
//import './SignIn.css';


class CrearCarrera extends Component {
    state = {
        id: '',
        nombre: '',
        descripcion: '',
        img: '',
        lugar: '',
        fecha: '',
        distancia: '',
        desnivel: '',
        url: '',
        destacada: false
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Crear Carrera</h5>
                    <div className="input-field">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lugar">Lugar</label>
                        <input type="text" id="lugar" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="distancia">Distancia</label>
                        <input type="text" id="distancia" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="desnivel">Desnivel</label>
                        <input type="text" id="desnivel" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="descripcion">Descripción Carrera</label>
                        <textarea id="descripcion" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="button">Crear</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default CrearCarrera;