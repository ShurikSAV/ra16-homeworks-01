import { NavLink } from 'react-router-dom';
import './header.css'

const Header = ({menu}) => { 
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
        {menu.map( ({path,name}) => linkMenu(path,name))}
      </ul>
    </nav>
    );
  }

export default Header;