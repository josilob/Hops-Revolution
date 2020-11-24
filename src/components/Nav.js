import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = styled.header`
	max-width: 100vw;
	border-bottom: 10px solid #222;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px 0;
	height: 80px;
	margin-bottom: 0px;
	background: #f8f8f8;
	.logo {
		margin: 0px;
		padding: 0px;
		height: 100%;
	}
	.logo a {
		padding-top: 0px;
		display: flex;
		flex-direction: column;
		clear: both;
		padding-bottom: 30px;
		text-decoration: none;
	}

	.logo p {
		width: 250px;
		display: block;
		padding-left: 10px;
	}

	.logo em {
		font-size: 0.5em;
		display: block;
		float: left;
	}

	.logo img {
		display: inline-block;
		width: 15px;
		margin-top: 5px;
		float: left;
	}

	.logo .letterhead {
		display: inline-block;
		float: left;
		font-size: 20px;
	}

	.logo a {
		color: #222;
		opacity: 0.55;
		transition: all 0.6s;
		color: #222;
		font-size: 26px;
		padding: 0px;
	}

	.logo p {
		margin: 10px 0px;
	}

	.gray {
		color: #ccc;
		padding-bottom: 20px;
	}

	a:hover {
		opacity: 1;
	}

	.fa-bars {
		display: none;
		color: #222;
		font-size: 2rem;
	}
	nav ul {
		display: flex;
		justify-content: space-between;
		font-size: 20px;
	}
	li {
		margin: 0 15px;
		justify-content: space-between;
		font-size: 1em;
		list-style: none;
	}
	nav a {
		font-size: 1em;
		text-decoration: none;
	}
	nav a:visited{
		color: #222
	}
	nav .active {
		color: tomato;
	}
	a.active {
		color: #222;
	}

	@media only screen and (max-width: 768px) {
		height: 90px;
		min-height: 50px;
		display: block;
		position: relative;

		.logo {
			width: 90%;
			display: block;
			padding-left: -10px;
		}
		.logo a {
			padding: 0px;
		}
		
		.fa-bars {
			display: inline-block;
			position: absolute;
			top: 45px;
			right: 25px;
			cursor: pointer;
		}

		ul.collapsed {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-wrap: wrap;
			overflow: hidden;
			max-height: 0;
			transition-duration: 0.4s;
			cubic-bezier(0, 1, 0.5, 1);
			transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
			padding-inline-start: 0px;

		}

		ul.is-expanded {
			overflow: hidden;
			max-height: 500px;
			transition-duration: 0.4s;
			transition-timing-function: ease-in;
			margin: 0 auto;
			padding-top: 10px;

		}

		li {
			padding: 15px 0px;
			margin: 0px;
			width: vw;
			}
		
	}
`;

function Nav(props) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleToggle = (e) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	return (
		<Navigation>
			<div className='logo'>
				<Link to='/'>
					<p>Bojan's Brewery App</p>
					<em>
						<div className='letterhead'>
							<span className='name'>Brew</span>
							<span className='gray'>App</span>
						</div>
					</em>
				</Link>
			</div>
			<nav className='nav'>
				<i
					className='fa fa-bars'
					aria-hidden='true'
					onClick={(e) => handleToggle(e)}
				/>
				<ul
					className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}
					onClick={(e) => handleToggle(e)}>
					<NavLink activeClassName='active' to='/'>
						<li>Home</li>
					</NavLink>
					<NavLink activeClassName='active' to='/breweries'>
						<li>Breweries</li>
					</NavLink>
					<NavLink activeClassName='active' to='/location'>
						<li>Location</li>
					</NavLink>
					<NavLink activeClassName='active' to='/beer'>
						<li>Beer</li>
					</NavLink>
					<NavLink activeClassName='active' to='/form'>
						<li>Form</li>
					</NavLink>
					<NavLink activeClassName='active' to='/about'>
						<li>About</li>
					</NavLink>
				</ul>
			</nav>
		</Navigation>
	);
}

export default Nav;
