import React from 'react'
import { ChangeContext } from '../../App'

export default class InCard extends React.Component {

	render () {
		console.log(ChangeContext)
		// let cont = this.ChangeContext
		return (
			<div className="incard">
				<ChangeContext.Consumer>
					{inCard => <div className="incard__text">{inCard}</div>}
				</ChangeContext.Consumer>
				
			</div>
		)
	}

}