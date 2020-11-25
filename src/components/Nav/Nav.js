import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
	const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<>
			<Navbar>
				<NavLink to='/'>
					<img
						src='beer-pint.png'
						alt='logo'
						className='home-pint'
						onClick={closeBurger}
					/>
				</NavLink>
				<Bars onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</Bars>
				<NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink
						to='/location'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Location</span>
					</NavLink>
					<NavLink
						to='/breweries'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Breweries</span>
					</NavLink>
					<NavLink
						to='/beer'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Beer</span>
					</NavLink>
					<NavLink
						to='/form'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>Form</span>
					</NavLink>
					<NavLink
						to='/about'
						activeStyle
						onClick={closeBurger}
						className='nav-link'>
						<span>About</span>
					</NavLink>
				</NavMenu>
			</Navbar>
		</>
	);
}
export default Nav;

const Navbar = styled.nav`
	background: #000;
	height: 60px;
	display: flex;
	justify-content: space-around;
	padding: 5px calc(100vw - 2500px);
	z-index: 2;

	@media screen and (max-width: 768px) {
		.nav-menu {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100vh;
			position: absolute;
			top: 59px;
			left: -100%;
			opacity: 1;
			transition: all 0.5s ease;
		}

		.nav-menu.active {
			background: #242222;
			left: 0;
			opacity: 1;
			transition: all 0.5s ease;
			z-index: 1;
			margin-top: 10px;
		}
		.nav-link {
			text-align: center;
			padding-top: 30px;
			width: 100%;
			display: table;
			height: 80px;
		}
	}
`;

const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #15cdfc;
	}
`;

const Bars = styled.span`
	display: none;
	color: #fff;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
  	white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
