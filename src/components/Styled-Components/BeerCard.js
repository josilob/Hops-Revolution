import styled from 'styled-components';
export const BeerCard = styled.div`
	.container {
		transform-style: preserve-3d;
		width: 280px;
		height: 50px;
		font-family: 'Piedra', cursive;
	}
	.beer-name {
		color: white;
		font-size: 20px;
		position: relative;
		line-height: 1.25;
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
		opacity: 0.55;
		background-color: #000;
		border-radius: 10px;
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

	.front .inner span {
		color: rgba(255, 255, 255, 0.7);
		font-family: 'Courgette', cursive;
		font-weight: 300;
	}

	@media screen and (max-width: 768px) {
	}

	@media screen and (max-width: 450px) {
	}
`;
