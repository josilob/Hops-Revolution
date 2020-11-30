import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<div className='faded-about'>
				<img className='ga-logo' src='ga-logo.png' alt='img' />
				<p className='about-text'>
					As an emerging web developer, with a special interest in frontend
					frameworks like ReactJS, I've built this page utilizing OpenBreweryDB
					and BreweryDB APIs, together with google maps for reversed geolocation
					and Styled components.
				</p>
				<br />

				<br />
				<p className='about-text'>
					Main functionality is based around being able to look up beers across
					the country, finding more information about each, and the happy place
					of their creation...with some aditional informations.
				</p>
			</div>
		</div>
	);
}

export default About;
