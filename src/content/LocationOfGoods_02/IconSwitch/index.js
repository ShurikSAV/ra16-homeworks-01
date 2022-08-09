import React from 'react'
import './iconSwitch.css'

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className='iconSwitch'>
        <span className="material-icons" onClick={onSwitch}>{icon}</span>
    </div>
  )
}

export default IconSwitch