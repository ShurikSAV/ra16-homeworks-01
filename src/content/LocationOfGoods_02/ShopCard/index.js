import React from 'react'
import PropTypes from 'prop-types';
import './shopCard.css'

const ShopCard = ({name, price, color, img}) => {
  return (
    <div className='ShopCard'>
      <h1>{name}</h1>
      <h2>{color}</h2>
      <img src={img} alt={name}/>
      <div className='footer'>
        <p className='price'>${price}</p>
        <p></p>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string
}

export default ShopCard