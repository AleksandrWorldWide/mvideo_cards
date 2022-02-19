import React from "react"
import PropTypes from 'prop-types'

class Card extends React.Component {

	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount() {
		if (this.props.index === 1) {
			this.inputRef.current.focus()
		}
	}

	render() {
		if (Math.random() > .9) {
			throw new Error('epic fail')
		}
		return (
			<div className="card">
				<div className="card__close" onClick={this.props.onDelete}>
				</div>
					<div className="card__header header-card">
						<div className="header-card__title">{this.props.title}</div>
						<div className="header-card__produce ibg">
							<img src={require(`../assets/${this.props.produce}.png`)} alt={this.props.produce_alt} />
						</div>
					</div>
					<div className="card__reduce">скидка -{this.props.reduce}%</div>
					<a href="/#" className="card__img ibg">
						<img src={require(`../assets/${this.props.foto}.png`)} alt={this.props.foto_alt} />
					</a>
					<div className="card__subtitle">
						<a href="/#">{this.props.subtitle}</a>
					</div>
					<div className="card__input">
						<input 
							ref={this.inputRef}
							type="text" 
							placeholder="subtitle" 
							onChange={this.props.onChangeSubtitle}
						/>
					</div>
					<div className="card__footer footer-card">
						<div className="footer-card__price price-card">
							<div className="price-card__old">{this.props.old_price} ₽</div>
							<div className="price-card__new">{this.props.new_price} ₽</div>
						</div>
						<div className="footer-card__btn">
							<button onClick={this.props.onChangeTitle}>Подробнее</button>
						</div>
					</div>
					{this.props.children}
				</div>
		)
	}
}

Card.propTypes = {
	subtitle: PropTypes.string
}

export default Card

