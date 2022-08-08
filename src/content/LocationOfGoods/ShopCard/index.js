import React from 'react'
import './shopCard.css'

const ShopCard = ({name, price, color, img}) => {
  return (
    <div className='ShopCard'>
      <h1>{name}</h1>
      <h2>{color}</h2>
      <img src={img} />
      <div className='footer'>
        <p className='price'>${price}</p>
        <p></p>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopCard