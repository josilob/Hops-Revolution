import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../Styled-Components/Navbar';
import { Bars } from '../Styled-Components/Bars';
import { NavMenu } from '../Styled-Components/NavMenu';

function Nav() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<>
			<Navbar>
				<NavLink to='/' id='home'>
					<img
						src='beer-btn.png'
						alt='logo'
						className='home-logo'
						onClick={closeBurger}
					/>
				</NavLink>
				<Bars onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</Bars>
				<NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink
						exact
						to='/'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span className='tab-name'>Home</span>
					</NavLink>
					<NavLink
						to='/breweries'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span className='tab-name'>Breweries</span>
					</NavLink>
					<NavLink
						to='/location'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span className='tab-name'>Location</span>
					</NavLink>
					<NavLink
						to='/beer'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span className='tab-name'>Beer</span>
					</NavLink>

					<NavLink
						to='/about'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span className='tab-name'>About</span>
					</NavLink>
				</NavMenu>
			</Navbar>
		</>
	);
}
export default Nav;

const NavLink = styled(Link)`
	color: #f4bb6a;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 35px;
	cursor: pointer;
	&.active {
		color: #15cdfc;
	}
	@media screen and (max-width: 768px) {
	}
`;
