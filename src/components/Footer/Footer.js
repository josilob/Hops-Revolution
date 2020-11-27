import React from 'react';
import { StyledFooter } from '../Styled-Components/StyledFooter';

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
