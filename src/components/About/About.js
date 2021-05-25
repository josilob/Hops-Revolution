import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<div className='faded-about'>
				<p className='about-text'>
					As an emerging web developer, with a special interest in frontend , I've
					built this page utilizing OpenBreweryDB and BreweryDB APIs, together with
					Styled components and Google Maps for reversed geolocation. Main
					functionality is based around being able to look up beers across the
					country, finding more information about each, and the place of their origin
				</p>
			</div>
		</div>
	);
}

export default About;
