import React, { useState } from 'react';
import DropdownList from './DropdownList';
import './dropdownContent.css'

/*
const menu = [
	{isActive: true, name: "Profile Information"},
	{isActive: false, name: "Change Password"},
	{isActive: false, name: "Become PRO"},
	{isActive: false, name: "Help"},
	{isActive: false, name: "Log Out"}
]
*/

function DropdownContent({dropdownMenu}) {
	//console.log(dropdownMenu);

	const menu = dropdownMenu.map( ({name, path}, i) => CreateMenuDropdownList(i === 1, name, path) )


	const [dropdownListVisible, setDropdownListVisible] = useState(false)
	const [position, setPosition] = useState(CreatePosition(0,0))
	const [menuDropdownList, setMenuDropdownList] = useState(menu)

	function CreateMenuDropdownList(isActive, name, path) {return {isActive, name, path}}

	function CreatePosition(clientX,clientY) { return {clientX,clientY}}
	
	const toggleOpenOrClose = (event) => {
		const element = event.target.getBoundingClientRect();

		setPosition(CreatePosition(event.clientX - element.left, event.clientY + element.top))
		setDropdownListVisible(!dropdownListVisible)
	}

	const dropdownListOnClick = (indexClick) => {
		setMenuDropdownList( menuDropdownList.map(
			
		))
		setDropdownListVisible(!dropdownListVisible)
	}

	return (
		<div className="bodyDropdownContent">
			<div className="container">
				<div data-id="wrapper" className="dropdown-wrapper open">
					<button data-id="toggle" className="btn" onClick={toggleOpenOrClose}>
						<span>Account Settings</span>
						<i className="material-icons">public</i>
					</button>
					{dropdownListVisible && <DropdownList menu={menuDropdownList} position={position} dropdownListOnClick={dropdownListOnClick}/>}
				</div>
			</div>
		</div>
		
	)
}

export default DropdownContent