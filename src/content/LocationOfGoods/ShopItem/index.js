import React from 'react'
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
      <img src={img} />
      <h1>{name}</h1>
      <h2>{color}</h2>
      <p className='price'>${price}</p>
      <button>ADD TO CART</button>
    </div>
  )
}

export default ShopItem