import styled from 'styled-components';
export const Card = styled.div`
	.container {
		transform-style: preserve-3d;
		width: 200px;
	}

	.front,
	.back {
		background-image: url('coaster2.png');
		background-size: 106%;
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
		opacity: 0.5;
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
