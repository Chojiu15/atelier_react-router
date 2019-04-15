import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const styleHeader = {
		display: 'flex',
		justifyContent: 'space-around',
		listStyleType: 'none'
	};
	return (
		<ul style={styleHeader}>
			<li>
				<NavLink activeClassName='active' exact to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/htmlDef'>
					HTML
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/CssDef'>
					CSS
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/JsDef'>
					JavaScript
				</NavLink>
			</li>
		</ul>
	);
};

export default Header;
