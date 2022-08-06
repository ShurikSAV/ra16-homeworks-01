import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = ({menu, lessonNumber}) => { 
  const linkMenu = (path,name) => {
    return (
      <li key={name} className="linkMenu">
        <NavLink 
          className={({ isActive }) =>
          isActive ? "linkActive" : "linkDisable"
        }
          to={path}
        >
        {name}
        </NavLink>
      </li>
    )
  }

  return(
    <nav className='header'>
      <ul>
        {menu.map((item) => {
          if(item.lessonNumber == 0 || item.lessonNumber == lessonNumber)
            return linkMenu(item.path, item.name)
          }
        )}
      </ul>
    </nav>
    );
  }

export default Header;