import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<StyledFooter className='footer'>
			<div className='footerIcons'>
				<a href='https://github.com/josilob' target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/josilo/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div>
			<hr className='footerLine' />
			<h4>Bojan Josilo</h4>
			<p>© Copyright 2020</p>
		</StyledFooter>
	);
}

export default Footer;
const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	max-width: 100vw;
	width: 100%;
	background-color: #242222;
	height: 70px;
	align-content: center;

	.footerLine {
		background-color: #f4bb6a;
		width: 90%;
		height: 1px;
		margin: 0 auto;
	}
	h4,
	p {
		color: #f4bb6a;
		margin: 0;
		font-family: 'Courgette', cursive;
	}

	.footerIcons {
		width: 100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		font-size: 23px;
		color: #f4bb6a;
	}
	.footerIcons a:visited {
		color: #f4bb6a;
	}
`;
