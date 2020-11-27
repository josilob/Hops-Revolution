import styled from 'styled-components';
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
		margin: 0;
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
