import React from 'react'
import ShopCard from '../ShopCard'
import './cardsView.css'

function CardsView({cards}) {
  return (
    <div className="CardsView">
      {cards.map( 
        (item, i) => (
          <ShopCard key={i} {...item} />
        )
      )}
    </div>
  )
}

export default CardsView