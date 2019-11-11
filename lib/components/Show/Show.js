import React, { Component } from 'react'

class Show extends Component {

	constructor(props){
		super(props)

		this.initialState = {

			status: '', // inRehearsal, nowPlaying,  past, future
			isCurrentShow: false,
			hasTicketsAvailable: false,
			isInCurrentSeason: true,

		}

		this.setState = this.initialState;

	}

	render() {

		return (
			'Show Component'
		)

	}

}

export default Show;
