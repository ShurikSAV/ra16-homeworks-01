import React from 'react'
import ShopItem from '../ShopItem'
import './listView.css'

function ListView({cards}) {
  return (
    <div className="ListView">
      {cards.map( 
        (item, i) => (
          <ShopItem key={i} {...item} />
        )
      )}
    </div>
  )
}

export default ListView