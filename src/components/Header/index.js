import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './header.css'

const Header = ({menu, lessonNumber}) => { 
  return(
    <nav className='header'>
      <ul>
        {menu.map((item, i) => {
          if(item.lessonNumber === 0 || item.lessonNumber === lessonNumber) 
            return (
              <li key={i} className="linkMenu">
                <NavLink 
                  className={({isActive}) => isActive ? "linkActive" : "linkDisable"}
                  to={item.path}
                  >
                  {item.name}
                </NavLink>
              </li>
              )
          return <span key={i}></span>
          }
        )}
      </ul>
    </nav>
    );
  }

Header.propTypes = {
  menu: PropTypes.array,
  lessonNumber: PropTypes.number
}

export default Header;