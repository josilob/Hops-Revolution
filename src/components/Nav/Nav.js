import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

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
					<NavLink exact to='/' onClick={closeBurger} className='nav-link'>
						<span className='tab-name'>Home</span>
					</NavLink>

					{/* <NavLink to='/beer' onClick={closeBurger} className='nav-link'>
						<span className='tab-name'>Beer</span>
					</NavLink> */}

					<NavLink to='/breweries' onClick={closeBurger} className='nav-link'>
						<span className='tab-name'>Breweries</span>
					</NavLink>

					<NavLink to='/location' onClick={closeBurger} className='nav-link'>
						<span className='tab-name'>Location</span>
					</NavLink>

					<NavLink to='/about' onClick={closeBurger} className='nav-link'>
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

const Navbar = styled.nav`
	background: #242222;
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
			left: -105%;
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
			padding: 30px 0;
			width: 100%;
			display: table;
			height: 25px;
			margin-top: 20px;
		}
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Bars = styled.span`
	display: none;
	color: #f4bb6a;
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
