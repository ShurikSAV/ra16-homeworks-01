import { Link } from 'react-router-dom';
import './header.css'

const Header = ({menu}) => { 
	const linkMenu = (path,name) => {
    return (
      <li key={name} className='linkMenu'>
        <Link to={path}>{name}</Link>
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