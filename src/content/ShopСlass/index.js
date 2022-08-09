import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopItemClass from '../../components/ShopItemClass';
import './css/main.css'

class ShopClass extends Component {
	static propTypes = {
		item: PropTypes.shape({
			brand: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			descriptionFull: PropTypes.string,
			price: PropTypes.number,
			currency: PropTypes.string
			})
	}
	
	render() {
		const {item} = this.props;
		
		
		return (
			<div className="container">
				<div className="background-element"></div>
				<div className="highlight-window">
					<div className='highlight-overlay'></div>
				</div>
				<div className="window">
					<ShopItemClass item={item} />
				</div>
			</div>
		)
	}
}

export default ShopClass;