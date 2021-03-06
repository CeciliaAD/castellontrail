import React, { Component } from 'react'
import './SignIn.css';

class SignIn extends Component {
    state = {
email: '',
password: ''

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
                    <h5 className="grey-text text-darken-3">Iniciar Sesión</h5>
                    <div className="input-field">
                        <label htmlFor="email">Correo electronico o usuario</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="button">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default SignIn;