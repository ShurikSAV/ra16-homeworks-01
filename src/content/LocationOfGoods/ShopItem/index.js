import React from 'react'
import PropTypes from 'prop-types';
import './shopItem.css'

/*
{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }
*/


const ShopItem = ({name, price, color, img}) => {
  return (
    <div className='ShopItem'>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{color}</h2>
      <p className='price'>${price}</p>
      <button>ADD TO CART</button>
    </div>
  )
}

ShopItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string
}

export default ShopItem