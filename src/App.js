import React, {Component} from 'react'
import './App.scss';
import Card from './Components/Card'
import InCard from './Components/InCard/InCard';
import Header from './Components/Header'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';


export const ChangeContext = React.createContext('777')
class App extends Component{

	constructor (props) {
		super(props)
		console.log('constructor')
		this.state = {
			cards: [
				{
					title: 'Сухая и влажная уборка', 
					produce: 'tefal',
					produce_alt: 'tefal',
					reduce: 45,
					foto: 'robot',
					foto_alt: 'robot',
					subtitle: 'Робот-пылесос Tefal X-plorer serie 60 Allergy Kit(RG7447WH)',
					old_price: 35999
				},
				{
					title: 'Произведен в Италии', 
					produce: 'babyliss',
					produce_alt: 'fen',
					reduce: 40,
					foto: 'fen',
					foto_alt: 'fen',
					subtitle: 'Фен Babyliss 6741DE',
					old_price: 9999
				},
				{
					title: 'Мощный процессор UHD 4K', 
					produce: 'samsung',
					produce_alt: 'samsung',
					reduce: 20,
					foto: 'prod_img-06_16',
					foto_alt: 'tv',
					subtitle: 'Телевизор Samsung UE50AU7570U',
					old_price: 59999
				}
			],
			pageTitle: this.props.pageTitle,
			showReduce: true,
			inCard: 'changed'
		}
	}



handleReduce = () => {
	this.setState({
		showReduce: !this.state.showReduce
	})
}

handleClick = (new_title) => {
	this.setState({
		pageTitle: new_title
	})
}

handleInput = (event) => {
	this.setState({
		pageTitle: event.target.value
	})

}

handleSubtitle = (name, i) => {
	const card = this.state.cards[i]
	card.subtitle = name
	const cards = [...this.state.cards]
	cards[i] = card
	this.setState({cards})
}

handleDelete = (i) => {
	const cards = [...this.state.cards]
	cards.splice(i, 1)
	this.setState({cards})
}
handelContext = () => {
	this.setState({
		inCard: 'Shatz'
	})
}

render () {

	
  return (
    <div className="App">
		 <Header
		 	pageTitle={this.state.pageTitle}
			handleClick={this.handleClick.bind(this, 'DNS')}
			handleInput={this.handleInput}
			handleReduce={this.handleReduce}
		 >
			 <ChangeContext.Provider value={this.state.inCard}>
				<InCard/>
			</ChangeContext.Provider>
		</Header>
		 <div className="wrapper">
		 <div className='wrapper__btn'>
			 <button onClick={this.handelContext}>change</button>
		 </div>
		 
			 {	this.state.showReduce ?
					this.state.cards.map((card, i) => {
						const new_price = Math.round(card.old_price * (1 - card.reduce / 100))
						return (
							<ErrorBoundary key={i}>
								<Card
									index={i}
									title={card.title}
									class_hide={this.hide_reduce}
									produce={card.produce}
									produce_alt={card.produce_alt}
									reduce={card.reduce}
									foto={card.foto}
									foto_alt={card.foto_alt}
									subtitle={card.subtitle}
									old_price={card.old_price}
									new_price={new_price}
									onDelete={this.handleDelete.bind(this, i)}
									onChangeSubtitle={event => this.handleSubtitle(event.target.value, i)}
									onChangeTitle={this.handleClick.bind(this, `${card.foto_alt.toUpperCase()} - ${card.old_price} ₽`)}
								/>
							</ErrorBoundary>
						)
					})
			: null}

		 </div>
	 </div>
  )
}
}

export default App;

