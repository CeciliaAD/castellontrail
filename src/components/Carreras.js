import React from 'react';
import Data from '../data.js';
import ListaCarreras from './ListaCarreras'
import Carrera from './Carrera'

class Carreras extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			Data
		}
	console.log(this.state.Data)
	}
	render(){
		return(
			<>
			<ListaCarreras
				carreras={this.state.Data} />
			</>

			)
	}
}

export default Carreras;