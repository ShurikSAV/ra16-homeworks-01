import React, { useState } from 'react';
import DropdownList from './DropdownList';
import './dropdownContent.css'

const menu = [
	{isActive: true, name: "Profile Information"},
	{isActive: false, name: "Change Password"},
	{isActive: false, name: "Become PRO"},
	{isActive: false, name: "Help"},
	{isActive: false, name: "Log Out"}
]

function DropdownContent() {
	const [dropdownListVisible, setDropdownListVisible] = useState(false)
	const [position, setPosition] = useState(CreatePosition(0,0))
	const [menuDropdownList, setMenuDropdownList] = useState(menu)

	function CreateMenuDropdownList(isActive, name) {return {isActive, name}}

	function CreatePosition(clientX,clientY) { return {clientX,clientY}}
	
	const toggleOpenOrClose = (event) => {
		const element = event.target.getBoundingClientRect();

		setPosition(CreatePosition(event.clientX - element.left, event.clientY + element.top))
		setDropdownListVisible(!dropdownListVisible)
	}

	const dropdownListOnClick = (indexClick) => {
		setMenuDropdownList( menuDropdownList.map(
			({name}, i) => CreateMenuDropdownList(indexClick === i, name)
		))
		setDropdownListVisible(!dropdownListVisible)
	}

	return (
		<div className="container">
			<div data-id="wrapper" className="dropdown-wrapper open">
				<button data-id="toggle" className="btn" onClick={toggleOpenOrClose}>
					<span>Account Settings</span>
					<i className="material-icons">public</i>
				</button>
				{dropdownListVisible && <DropdownList id="dropdownList" menu={menuDropdownList} position={position} dropdownListOnClick={dropdownListOnClick}/>}
			</div>
			
		</div>
		
	)
}

export default DropdownContent