

const Header = (props) => {
	return (
		<header className="header">
			<h1 className="header__title">{props.pageTitle}</h1>
			<button className="header__btn" onClick={props.handleClick}>Click</button>
			<input 
				type="text" 
				className="header__input" 
				onChange={props.handleInput}
				placeholder='search'
			/>
			<button 
				className="header__reduce"
				onClick={props.handleReduce}
			>hide</button>
		</header>
	)
	
	}

export default Header