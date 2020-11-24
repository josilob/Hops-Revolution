import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
	max-width: 100vw;
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

function Footer() {
	return (
		<StyledFooter>
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
