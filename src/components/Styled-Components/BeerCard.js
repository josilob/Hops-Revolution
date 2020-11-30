import styled from 'styled-components';
export const BeerCard = styled.div`
	.beer-container {
		border-radius: 10px;
		width: 280px;
		height: 50px;
		background-color: rgba(29, 21, 21, 0.65);
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;
		margin: 20px 20px;
		align-content: center;
	}

	.beer-name {
		margin: 0 auto;
		color: white;
		font-size: 20px;
		position: relative;
		line-height: 1.25;
		font-family: 'Piedra', cursive;
	}

	.beer-list {
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-bottom: 70px;
	}

	.beer-container:hover {
		cursor: pointer;
	}

	.details-box {
		justify-items: center;
	}

	@media screen and (max-width: 645px) {
		.beer-list {
			width: 100%;
			margin: 0;
		}
		.beer-container {
			float: left;
			margin: 10px 10px;
			width: 200px;
		}
		.beer-name {
			font-size: 18px;
		}
	}
`;
