import React, { Component } from 'react';
import './dropdownList.css'

const DropdownList = () => {
	return (
		<ul data-id="dropdown" class="dropdown" /* style={"{position: 'relative', padding, left, top}"} */>
			<li class="active"><a href="#">Profile Information</a></li>
			<li><a href="#">Change Password</a></li>
			<li><a href="#">Become PRO</a></li>
			<li><a href="#">Help</a></li>
			<li><a href="#">Log Out</a></li>
		</ul>
	)

}

export default DropdownList