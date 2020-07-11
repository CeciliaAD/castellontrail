import React, { Component } from 'react'
import './Contactar.css';

class Contactar extends Component {
     state = {
email: '',
nombre:  '',
apellido: '',
comentarios: ''
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
                    <h5 className="grey-text text-darken-3">Formulario de Contacto:</h5>
                    <div className="input-field">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="apellido" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="comentarios">Comentarios, ideas, sugerencias:</label>
                        <textarea cols="50" id="comentarios" placeholder="No encuentro esta carrera en las búsquedas" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="button">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Contactar;