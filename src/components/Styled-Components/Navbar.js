import styled from 'styled-components';

export const Navbar = styled.nav`
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
			height: 35px;
		}
		.nav-link span {
		}
	}
`;
