import React from 'react';
import './dropdownList.css'

function DropdownList ({menu, position, dropdownListOnClick}) {
	
	const clientX = position.clientX
	const clientY = position.clientY

	
	return (
		<ul data-id="dropdown" className="dropdown" style={{position: "fixed", top: clientY, left: clientX}}>
			{menu.map(({isActive, name}, i) => (
				<li 
					key={i} 
					className={isActive === true ? "active" : ""}>
						<a onClick={() => dropdownListOnClick(i)}>{name}</a>
				</li>
			))}
		</ul>
	)

}

export default DropdownList