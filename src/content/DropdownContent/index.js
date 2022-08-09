import React, { useState } from 'react';
import DropdownList from './DropdownList';
import './dropdownContent.css'

function DropdownContent() {
	const [dropdownListVisible, setDropdownListVisible] = useState(false)
	const [position, setPosition] = useState(CreatePosition(0,0))
	
	function CreatePosition(clientX,clientY) { return {clientX,clientY}}

	
	const toggleOpen = (event) => {
		setPosition(CreatePosition(event.clientX, event.clientY))
		setDropdownListVisible(!dropdownListVisible)
		console.log(event.clientX, event.clientY );
	}

	return (
		<div class="container">
			<div data-id="wrapper" class="dropdown-wrapper open">
				<button data-id="toggle" class="btn" onClick={toggleOpen}>
					<span>Account Settings</span>
					<i class="material-icons">public</i>
				</button>
				{dropdownListVisible === true && <DropdownList position={position}/>}
			</div>
		</div>
		
	)
}

export default DropdownContent