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
			height: 80px;
		}
	}
`;

export const Bars = styled.span`
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

export const NavMenu = styled.div`
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

export const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	max-width: 100vw;
	width: 100%;
	background-color: black;
	height: 70px;
	align-content: center;

	.footerLine {
		background-color: white;
		width: 90%;
		height: 1px;
		margin: 0 auto;
	}
	h4,
	p {
		color: white;
	}
	* {
		margin: 0px;
		padding: 0px;
	}
	.footerIcons {
		width: 100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		font-size: 25px;
		color: white;
	}
	.footerIcons a:visited {
		color: white;
	}
`;

export const Card = styled.div`
	.container {
		transform-style: preserve-3d;
		width: 200px;
	}

	.front,
	.back {
		background-image: url('cork-coaster.png');
		background-size: cover;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-position: center;
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
		backface-visibility: hidden;
		text-align: center;
		min-height: 200px;
		height: 200px;
		border-radius: 50%;
		color: #fff;
		font-size: 20px;
	}

	.back {
		background-image: url('globe.png');
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.2;
		background-color: #000;
		backface-visibility: hidden;
		border-radius: 50%;
	}
	.container:hover .front,
	.container:hover .back {
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.inner {
		transform: translateY(-50%) translateZ(60px) scale(0.94);
		top: 50%;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
		outline: 1px solid transparent;
		perspective: inherit;
		z-index: 2;
	}

	.container .back {
		transform: rotateY(180deg);
		transform-style: preserve-3d;
	}

	.container .front {
		transform: rotateY(0deg);
		transform-style: preserve-3d;
	}

	.container:hover .back {
		transform: rotateY(0deg);
		transform-style: preserve-3d;
	}

	.container:hover .front {
		transform: rotateY(-180deg);
		transform-style: preserve-3d;
	}

	.front .inner p {
		font-size: 20px;
		margin-bottom: 1rem;
		position: relative;
	}

	.front .inner p:after {
		content: '';
		width: 4rem;
		height: 2px;
		position: absolute;
		background: #c6d4df;
		display: block;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: -0.75rem;
	}

	.front .inner span {
		color: rgba(255, 255, 255, 0.7);
		font-family: 'Montserrat';
		font-weight: 300;
	}

	@media screen and (max-width: 64rem) {
		.col {
			width: calc(33.333333% - 2rem);
		}
	}

	@media screen and (max-width: 48rem) {
		.col {
			width: calc(50% - 2rem);
		}
	}

	@media screen and (max-width: 32rem) {
		.col {
			width: 100%;
			margin: 0 0 2rem 0;
		}
	}
`;
