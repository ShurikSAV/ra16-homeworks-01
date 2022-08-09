import React from 'react';
import './dropdownList.css'

const DropdownList = ({menu, position, dropdownListOnClick}) => {
	return (
		<ul data-id="dropdown" className="dropdown" /* style={"{position: 'relative', padding, left, top}"} */>
			{menu.map(({isActive, name}, i) => (
				<li key={i} className={isActive === true ? "active" : ""} ><a onClick={() => dropdownListOnClick(i,position[i])}>{name}</a></li>
			))}
		</ul>
	)

}

export default DropdownList