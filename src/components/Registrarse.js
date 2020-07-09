import React, { Component } from 'react'
import './Registrarse.css';

class Registrarse extends Component {
    state = {
email: '',
password: '',
nombre:  '',
apellido: '',
provincia: ''
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
                    <h5 className="grey-text text-darken-3">Registrarse</h5>
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
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="provincia">Provincia</label>
                        <input type="text" id="provincia" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="button">Registrarse</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Registrarse;