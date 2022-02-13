

const Card = (props) => (
		<div className="card">
			<div className="card__close" onClick={props.onDelete}>
			</div>
				 <div className="card__header header-card">
					 <div className="header-card__title">{props.title}</div>
					 <div className="header-card__produce ibg">
						 <img src={require(`../assets/${props.produce}.png`)} alt={props.produce_alt} />
					 </div>
				 </div>
				 <div className="card__reduce">скидка -{props.reduce}%</div>
				 <a href="/#" className="card__img ibg">
					 <img src={require(`../assets/${props.foto}.png`)} alt={props.foto_alt} />
				 </a>
				 <div className="card__subtitle">
					 <a href="/#">{props.subtitle}</a>
				 </div>
				 <div className="card__input">
					 <input type="text" placeholder="subtitle" onChange={props.onChangeSubtitle}/>
				 </div>
				 <div className="card__footer footer-card">
					 <div className="footer-card__price price-card">
						<div className="price-card__old">{props.old_price} ₽</div>
						<div className="price-card__new">{props.new_price} ₽</div>
					 </div>
					 <div className="footer-card__btn">
						 <button onClick={props.onChangeTitle}>Подробнее</button>
					 </div>
				 </div>
				 {props.children}
			 </div>
	)



	export default Card

